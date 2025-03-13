# BIO/ACC Telegram AI Bot

## Overview

The **BIO/ACC Telegram AI Bot** is an AI-powered assistant designed to engage with the BIO/ACC and **DeSci (Decentralized Science)** communities. It integrates **Retrieval-Augmented Generation (RAG)** to fetch relevant information, responds to queries in **Telegram-supported HTML formatting**, and supports interactions in both **direct messages (DMs) and group mentions**.

## Features

- ✅ **Responds to group mentions** and replies to the specific message.
- ✅ **Integrates with Telegram** to provide real-time community engagement.
- ✅ **Uses RAG (Retrieval-Augmented Generation)** to pull insights from DeSci project documents.
- ✅ **Explains BIO/ACC movement & memes** with detailed responses.
- ✅ **Generates useful community content** for BIO/ACC & DeSci.
- ✅ **Formats messages using Telegram-supported HTML** (no `<ul>` or `<li>` tags).
- ✅ **Strict topic adherence** (only responds to BIO/ACC & DeSci-related queries).

## Tech Stack

- **Backend:** Next.js (`/api` routes for the bot)
- **Database:** AstraDb (for storing relevant data)
- **AI Model:** Gemini AI (Google's `text-embedding-004`)
- **Vector Database:** AstraDB (for storing embeddings)
- **Scraping:** Puppeteer (to fetch and embed football-related content)
- **Hosting:** Vercel (for serverless API deployment)

## Setup Instructions

### 1️⃣ Prerequisites

Ensure you have the following installed:

- **Node.js** (v18+ recommended)
- **Next.js** (`npx create-next-app@latest`)
- **AstraDB** (for vector search)
- **A valid Telegram bot token** (from [BotFather](https://t.me/BotFather))

### 2️⃣ Environment Variables

Create a `.env.local` file in the root directory and add:

```env
BOT_TOKEN = ""
BOT_USERNAME = ""
BOT_LINK = ""
GEMINI_API_KEY = ""
ASTRA_DB_API_ENDPOINT = ""
ASTRA_DB_APPLICATION_TOKEN= ""
ASTRA_DB_NAMESPACE = ""
ASTRA_DB_COLLECTION = ""
NEXT_PUBLIC_API_BASE_URL = "http://localhost:3000/"

```

### 2️⃣ Install Dependencies

```bash
npm install

```

### 4️⃣ Run Locally

```bash
npm run dev


```

### Api Routes

📌 /api/bot (Telegram Webhook)

Handles incoming messages and responds based on context.

- Supports group mentions and direct messages.
- Queries RAG API for relevant DeSci/BIO/ACC content.
- Formats responses in Telegram-supported HTML.

Example payload:

```json
{
  "message": {
    "chat": { "id": 12345678, "type": "group" },
    "text": "@desci_ai_bot what is DeSci?",
    "entities": [{ "offset": 0, "length": 13, "type": "mention" }]
  }
}
```

📌 /api/RAG (Retrieval-Augmented Generation)

- Fetches relevant context from AstraDB using embeddings.
- Prioritizes retrieved data before AI-generated responses.

### Future Enhancements

    🔹 AI-generated content for Twitter posts
    🔹 Integration with DeSci-specific APIs
    🔹 More detailed BIO/ACC meme explanations
    🔹 Advanced RAG-based responses

### Contributing

Contributions are welcome! Please submit a PR or open an issue for discussions.

### License

MIT License © 2025
🔥 Built for the BIO/ACC & DeSci Community!
