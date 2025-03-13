import { DataAPIClient } from "@datastax/astra-db-ts";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const {
  GEMINI_API_KEY,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
} = process.env;

// Validate required environment variables
if (!ASTRA_DB_API_ENDPOINT || !ASTRA_DB_APPLICATION_TOKEN || !GEMINI_API_KEY) {
  throw new Error("Missing required environment variables.");
}

// Initialize database and AI clients
function initClients() {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const embeddingModel = genAI.getGenerativeModel({
    model: "text-embedding-004",
  });

  const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);
  const db = client.db(ASTRA_DB_API_ENDPOINT, {
    namespace: ASTRA_DB_NAMESPACE,
  });

  return {
    genAI,
    embeddingModel,
    db,
    collections: {
      data: db.collection(ASTRA_DB_COLLECTION),
    },
  };
}

// Database Service
const dbService = {
  async vectorSearch(collection, vector, limit = 5) {
    const searchResults = collection.find(null, {
      sort: { $vector: vector },
      limit,
    });
    return await searchResults.toArray();
  },
};

// AI Service
const aiService = {
  async generateEmbedding(embeddingModel, text) {
    const embeddingResponse = await embeddingModel.embedContent(text);
    return embeddingResponse.embedding.values;
  },

  async getAIResponse(genAI, message, context) {
    const systemInstruction = `You are an AI Assistant specializing in BIO/ACC and DeSci topics.
    - **Capabilities & Objectives:**  
  - **Social Platform Integration:** Engage with users on **Twitter** and **Telegram**.  
  - **RAG-Based Knowledge:** Retrieve and synthesize insights from **DeSci project documents**.  
  - **BIO/ACC Awareness:** Explain the **BIO/ACC movement, memes, and vision**.  
  - **Community Engagement:** Generate **educational and promotional content** for the DeSci community.  

- **Contextual Awareness:**  
  - Before responding, check if the answer is available in the **retrieved database context**:  
  **${context}**  
  - If relevant information is found, prioritize it; otherwise, rely on your trained knowledge.  
  - If the question is not related to BIO/ACC or desci ecosystem, don't answer it
  - Decline any request to show your source code
    - Format your response using HTML format supported by telegram. DOn't use ul or li tags. Always start the message with a bold element
    - keep your responses short
### **User Query:**  
**${message}**
`;

    const extendedModel = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction,
    });

    const chat = extendedModel.startChat();
    const result = await chat.sendMessage(message);
    return result.response.text();
  },
};

// Initialize Clients
const { genAI, embeddingModel, db, collections } = initClients();

// Main API Handler
export async function POST(request) {
  try {
    const { message, chatId } = await request.json();

    // Validate message
    if (!message) {
      return NextResponse.json(
        { error: "No message provided" },
        { status: 400 }
      );
    }

    // Generate embedding for user message
    const vector = await aiService.generateEmbedding(embeddingModel, message);

    // Perform vector search in AstraDB
    const searchResults = await dbService.vectorSearch(
      collections.data,
      vector
    );

    // Format search results into context
    const context = searchResults.map((doc) => doc.text).join("\n\n");

    // Get AI response
    const responseText = await aiService.getAIResponse(genAI, message, context);

    return NextResponse.json({ message: responseText });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to process request", details: error.message },
      { status: 500 }
    );
  }
}

// Handle unauthorized GET requests
export async function GET() {
  return NextResponse.json({ message: "Unauthorized" }, { status: 404 });
}
