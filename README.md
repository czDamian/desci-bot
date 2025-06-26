# DeSci AI

## Overview

The **DeSci AI** is an AI-powered assistant designed to accelerate knowledge sharing and community engagement within the **Biological Accelerationism (BIO/ACC)** and **Decentralized Science (DeSci)** ecosystems. Built with cutting-edge technology, it serves as an intelligent bridge between complex scientific concepts and accessible community interaction. It integrates **Retrieval-Augmented Generation (RAG)** to fetch relevant information, responds to queries in **Telegram-supported HTML formatting**, and supports interactions in both **direct messages (DMs) and group mentions**.

## 🚀 Key Features

### 🤖 **AI-Powered Intelligence**

- ✅ **Advanced RAG System** - Retrieval-Augmented Generation with 10,000+ research papers
- ✅ **Multi-Platform Support** - Telegram bot + modern web interface
- ✅ **Real-time Responses** - Sub-second query processing with GPU acceleration
- ✅ **Context-Aware Conversations** - Maintains conversation history and context
- ✅ **Scientific Accuracy** - Validates information against curated knowledge base

### 🌐 **Platform Integration**

- ✅ **Telegram Bot** - Group mentions, DMs, and community engagement
- ✅ **Modern Web Chat** - Sophisticated chat interface with animations
- ✅ **Responsive Design** - Works seamlessly across all devices
- ✅ **Professional UI** - Glassmorphism effects and modern design language
- ✅ **Real-time Updates** - Live message streaming and typing indicators


### 🎁 **Rewards Program**

- ✅ **Early Access Waitlist** – Users can join a waitlist to get notified about the launch of the DeSci Rewards program.
- ✅ **Project Submission** – Submit DeSci or BIO/ACC projects for recognition and rewards.
- ✅ **Token Rewards** – Earn tokens for valuable contributions and community engagement.
- ✅ **Community Voting** – Participate in voting to help surface impactful projects.
- ✅ **Impact Tracking** – Monitor your contributions and project impact over time.
- ✅ **Recognition & Acceleration** – Top contributors and projects receive special recognition and support.

---
### 🔗 Social Media
Stay updated on our social media handles

- [X (Twitter)](https://x.com/Desci_ai_bot)
- [Telegram](https://t.me/DesciAI_New)


### 🔬 **BIO/ACC Specialization**

- ✅ **Movement Expertise** - Deep knowledge of BIO/ACC principles and culture
- ✅ **DeSci Integration** - Comprehensive coverage of decentralized science projects
- ✅ **Research Summaries** - Concise explanations of complex scientific papers
- ✅ **Community Content** - Generates educational content and explanations
- ✅ **Cultural Awareness** - Understands BIO/ACC memes and terminology

### 📊 **Technical Excellence**

- ✅ **Vector Search** - Semantic similarity matching for relevant content retrieval
- ✅ **HTML Formatting** - Telegram-compatible rich text formatting
- ✅ **Error Handling** - Robust error management and graceful degradation
- ✅ **Performance Optimization** - Lazy loading and optimized animations
- ✅ **Security** - Input validation and secure API endpoints

## 🛠️ Tech Stack

### **Frontend**

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom design system
- **Animations:** Framer Motion for smooth interactions
- **Icons:** React Icons (Lucide, Font Awesome)
- **UI Components:** Custom component library with glassmorphism effects

### **Backend**

- **API Routes:** Next.js serverless functions
- **AI Model:** Google Gemini AI (`text-embedding-004`)
- **Vector Database:** AstraDB for embeddings and semantic search
- **Bot Framework:** Telegram Bot API integration
- **Data Processing:** Puppeteer for content scraping and processing

## 🏗️ Architecture

### **System Design**

User Query → Telegram/Web Interface → Next.js API → RAG System → Vector Search → AI Processing → Formatted Response

### **RAG Pipeline**

1. **Query Processing** - NLP analysis and intent classification
2. **Vector Search** - Semantic similarity matching in AstraDB
3. **Context Retrieval** - Relevant document and paper extraction
4. **AI Generation** - Gemini AI with retrieved context
5. **Response Formatting** - HTML formatting for platform compatibility

## Setup Instructions

### 1️⃣ Prerequisites

Ensure you have the following installed:

- **Node.js** (v18+ recommended)
- **Next.js 14+** (`npx create-next-app@latest`)
- **AstraDB** (for vector search)
- **A valid Telegram bot token** (from [BotFather](https://t.me/BotFather))
- **Gemini AI** API key

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

### 2️⃣ Installation & Deployment

```bash

git clone https://github.com/czDamian/desci-bot
cd desci-bot

# Install dependencies
npm install

# Run development server
npm run dev

# View on your local machine
https://localhost:3000
```

### Api Documentation

📌 /api/bot (Telegram Webhook)

Handles all Telegram bot interactions with advanced message processing.

- Supports group mentions and direct messages.
- Queries RAG API for relevant DeSci/BIO/ACC content.
- Context-aware conversation management
- HTML formatting for rich text responses

Example payload:

```json
{
  "message": {
    "chat": { "id": 12345678, "type": "group" },
    "text": "@desci_ai_bot explain synthetic biology",
    "entities": [{ "offset": 0, "length": 13, "type": "mention" }]
  }
}
```

📌 /api/RAG (Retrieval-Augmented Generation)
Advanced knowledge retrieval and response generation system.

- Query embedding generation
- Vector similarity search in AstraDB
- Context ranking and selection
- AI response generation with retrieved context
- Scientific accuracy validation

### Future Enhancements

    🔹 AI-generated content for Twitter posts
    🔹 Integration with DeSci-specific APIs
    🔹 More detailed BIO/ACC meme explanations
    🔹 Advanced RAG-based responses

### Meet The Team

🔹 **Damian Olebuezie**

- Lead AI Engineer & Full-Stack Developer
- AI/ML architecture and implementation
- Backend systems and API development

🔹 **Ani Stephanie**

- UI/UX Designer

### Contributing

We welcome contributions from the BIO/ACC and DeSci communities! Here's how to get involved:

- Fork the repository
- Create a feature branch (`git checkout -b feature/amazing-feature`)
- Commit your changes (`git commit -m 'Add amazing feature'`)
- Push to the branch (`git push origin feature/amazing-feature`)
- Open a Pull Request

### License

MIT License © 2025
