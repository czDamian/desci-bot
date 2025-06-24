import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data || !data.message) {
      console.log("No valid message found");
      return NextResponse.json({ status: "No valid message found" });
    }

    const { message } = data;
    const { chat, text = "", message_id, entities = [] } = message;
    const chatId = chat.id;
    const botUsername = process.env.BOT_USERNAME; // Should be without @ symbol

    console.log("Received message -->", text);
    console.log("Chat Type:", chat.type);
    console.log("Bot Username:", botUsername);
    console.log("Entities:", JSON.stringify(entities, null, 2));

    // Check if this is a group chat
    const isGroupChat = chat.type === "group" || chat.type === "supergroup";

    // Debug: Extract and log the actual mention text
    if (entities && entities.length > 0) {
      entities.forEach((entity, index) => {
        if (entity.type === "mention") {
          const mentionText = text.substring(
            entity.offset,
            entity.offset + entity.length
          );
          console.log(`Entity ${index} mention text: "${mentionText}"`);
          console.log(`Expected bot mention: "@${botUsername}"`);
          console.log(
            `Do they match? ${
              mentionText.toLowerCase() === `@${botUsername.toLowerCase()}`
            }`
          );
        }
      });
    }

    // Different ways to check if bot is mentioned
    let isMentioned = false;

    // Method 1: Check entities for mentions
    if (entities && entities.length > 0) {
      for (const entity of entities) {
        if (entity.type === "mention") {
          const mentionText = text.substring(
            entity.offset,
            entity.offset + entity.length
          );
          console.log(
            `Comparing mention "${mentionText}" with bot "@${botUsername}"`
          );

          if (mentionText.toLowerCase() === `@${botUsername.toLowerCase()}`) {
            isMentioned = true;
            console.log("Bot mentioned found via entity!");
            break;
          }
        }
      }
    }

    // Method 2: Check if command includes @botname
    if (
      !isMentioned &&
      text.startsWith("/") &&
      text.includes(`@${botUsername}`)
    ) {
      isMentioned = true;
      console.log("Bot detected via command with username");
    }

    // Method 3: Simple text-based detection as fallback
    if (!isMentioned && text.includes(`@${botUsername}`)) {
      isMentioned = true;
      console.log("Bot mentioned found via text content!");
    }

    // Direct messages to the bot should always be processed
    if (!isGroupChat) {
      isMentioned = true;
      console.log("Direct message to bot, processing");
    }

    // If in a group and not mentioned, ignore the message
    if (isGroupChat && !isMentioned) {
      console.log("Ignoring message, bot was not mentioned in group.");
      return NextResponse.json({
        status: "Bot not mentioned in group, ignoring message.",
      });
    }

    // Remove bot mention if applicable
    let cleanedText = text;
    if (isMentioned && text.includes(`@${botUsername}`)) {
      cleanedText = text.replace(`@${botUsername}`, "").trim();
    }

    // Command Handling
    let responseText = "";
    if (cleanedText.startsWith("/start")) {
      responseText = ` 
      🧬 <b>Welcome to the BIO/ACC AI Assistant!</b> 🚀

      I'm your intelligent guide to the world of <b>Biological Accelerationism</b> and <b>Decentralized Science</b>. Whether you're a researcher, innovator, or curious explorer, I'm here to accelerate your journey into the future of science.

      <b>What I can help you with:</b>
      🔬 <b>BIO/ACC Concepts</b> - Understanding biological acceleration principles
      🌐 <b>DeSci Projects</b> - Exploring decentralized science initiatives  
      📚 <b>Research Insights</b> - Summaries of cutting-edge papers and studies
      🧪 <b>Synthetic Biology</b> - Latest developments in bioengineering
      ⚡ <b>Longevity Research</b> - Advances in life extension and regenerative medicine
      🤝 <b>Community Connections</b> - Finding collaborators and projects

      <b>Quick Start:</b>
      • Type <code>/help</code> for available commands
      • Ask me anything like <i>"What is BIO/ACC?"</i> or <i>"Tell me about recent DeSci projects"</i>
      • Use <code>/examples</code> to see sample questions

      Ready to accelerate science together? 🌱✨

      <i>Powered by RAG technology with access to 10,000+ research papers</i>
`;
    } else if (cleanedText.startsWith("/help")) {
      responseText = ` 
      🧬 <b>Welcome to the BIO/ACC AI Assistant!</b> 🚀

      I'm your intelligent guide to the world of <b>Biological Accelerationism</b> and <b>Decentralized Science</b>. Whether you're a researcher, innovator, or curious explorer, I'm here to accelerate your journey into the future of science.

      <b>What I can help you with:</b>
      🔬 <b>BIO/ACC Concepts</b> - Understanding biological acceleration principles
      🌐 <b>DeSci Projects</b> - Exploring decentralized science initiatives  
      📚 <b>Research Insights</b> - Summaries of cutting-edge papers and studies
      🧪 <b>Synthetic Biology</b> - Latest developments in bioengineering
      ⚡ <b>Longevity Research</b> - Advances in life extension and regenerative medicine
      🤝 <b>Community Connections</b> - Finding collaborators and projects

      <b>Quick Start:</b>
      • Ask me anything like <i>"What is BIO/ACC?"</i> or <i>"Tell me about recent DeSci projects"</i>
      

      Ready to accelerate science together? 🌱✨

      <i>Powered by RAG technology with access to 10,000+ research papers</i>
`;
    } else {
      // Query the RAG endpoint
      try {
        const sampleApiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/RAG`;

        const sampleResponse = await fetch(sampleApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: cleanedText, chatId }),
        });

        const sampleData = await sampleResponse.json();
        responseText =
          sampleData.message || "Sorry, I couldn't process your request.";
      } catch (error) {
        console.error("Error calling RAG API:", error);
        responseText = "Sorry, I encountered an error processing your request.";
      }
    }

    console.log("Sending response:", responseText);

    // Send reply to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;

    const telegramResponse = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: responseText,
        parse_mode: "HTML",
        reply_to_message_id: message_id, // Reply directly to the original message
      }),
    });

    const telegramData = await telegramResponse.json();
    console.log("Telegram API Response:", telegramData);

    if (!telegramResponse.ok) {
      console.error("Failed to send message:", telegramData);
      return NextResponse.json({ success: false, error: telegramData });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in webhook handler:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function GET() {
  return NextResponse.json(
    { success: true, message: "Welcome to DeSci bot" },
    { status: 200 }
  );
}
