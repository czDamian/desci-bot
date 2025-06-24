"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaPaperPlane, FaRobot, FaUser, FaSpinner } from "react-icons/fa"
import { HiSparkles, HiLightningBolt } from "react-icons/hi"
import { IoRocket } from "react-icons/io5"
import Header from "../components/Header"


export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm your BIO/ACC AI assistant. Ask me anything about decentralized science, biological innovation, or the BIO/ACC movement.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const chatEndRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = {
      sender: "user",
      text: input,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/RAG", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })
      const data = await res.json()
      if (res.ok && data.message) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: data.message,
            timestamp: new Date(),
          },
        ])
      } else {
        throw new Error(data.error || "Something went wrong.")
      }
    } catch (err) {
      setError("Sorry, something went wrong. Please try again later.")
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "⚠️ Sorry, I couldn't process your request. Please try again or ask a different question.",
          timestamp: new Date(),
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <Header />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6">
              <HiSparkles className="text-emerald-400" />
              <span className="text-sm font-medium text-gray-300">AI-Powered Chat</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
                Chat with
              </span>
              <br />
              <span className="text-white">DeSci Bot</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Get instant answers about BIO/ACC, decentralized science, and biological innovation from our AI assistant.
            </p>
          </div>

          {/* Chat Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-b border-white/10 p-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-xl shadow-lg">
                    <IoRocket className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-800 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">BIO/ACC AI Assistant</h3>
                  <p className="text-sm text-gray-400">Online • Ready to help</p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-emerald-400">
                  <HiLightningBolt className="w-4 h-4" />
                  <span className="text-sm font-medium">Powered by RAG</span>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start gap-3 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                    >
                      {/* Avatar */}
                      <div
                        className={`flex-shrink-0 p-2 rounded-xl ${
                          msg.sender === "user"
                            ? "bg-gradient-to-br from-slate-600 to-slate-700"
                            : "bg-gradient-to-br from-emerald-500 to-teal-400"
                        }`}
                      >
                        {msg.sender === "user" ? (
                          <FaUser className="w-4 h-4 text-white" />
                        ) : (
                          <FaRobot className="w-4 h-4 text-white" />
                        )}
                      </div>

                      {/* Message Bubble */}
                      <div
                        className={`relative px-4 py-3 rounded-2xl ${
                          msg.sender === "user"
                            ? "bg-gradient-to-br from-emerald-600 to-emerald-500 text-white"
                            : "bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-sm border border-white/10 text-gray-100"
                        }`}
                      >
                        <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: msg.text }} />

                        {/* Timestamp */}
                        <div
                          className={`text-xs mt-2 opacity-70 ${
                            msg.sender === "user" ? "text-emerald-100" : "text-gray-400"
                          }`}
                        >
                          {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </div>

                        {/* Message tail */}
                        <div
                          className={`absolute top-4 w-3 h-3 transform rotate-45 ${
                            msg.sender === "user" ? "right-[-6px] bg-emerald-600" : "left-[-6px] bg-slate-700"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading indicator */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start gap-3 max-w-[80%]">
                    <div className="flex-shrink-0 p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400">
                      <FaRobot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-2xl">
                      <div className="flex items-center gap-2 text-gray-300">
                        <FaSpinner className="w-4 h-4 animate-spin text-emerald-400" />
                        <span className="text-sm">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input Form */}
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-t border-white/10 p-6">
              <form onSubmit={handleSend} className="flex gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about BIO/ACC, DeSci, or biological innovation..."
                    disabled={loading}
                    className="w-full px-4 py-3 pr-12 rounded-xl bg-slate-700/50 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <HiSparkles className="w-5 h-5" />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading || !input.trim()}
                  whileHover={{ scale: loading || !input.trim() ? 1 : 1.05 }}
                  whileTap={{ scale: loading || !input.trim() ? 1 : 0.95 }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    loading || !input.trim()
                      ? "bg-slate-600/50 text-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-lg hover:shadow-emerald-500/25"
                  }`}
                >
                  {loading ? <FaSpinner className="w-4 h-4 animate-spin" /> : <FaPaperPlane className="w-4 h-4" />}
                  <span>{loading ? "Sending..." : "Send"}</span>
                </motion.button>
              </form>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid md:grid-cols-3 gap-4"
          >
            {[
              {
                title: "What is BIO/ACC?",
                description: "Learn about biological accelerationism",
                question: "What is BIO/ACC and how does it work?",
              },
              {
                title: "DeSci Projects",
                description: "Explore decentralized science initiatives",
                question: "Tell me about current DeSci projects and their impact",
              },
              {
                title: "Research Papers",
                description: "Get summaries of latest research",
                question: "Can you summarize recent developments in synthetic biology?",
              },
            ].map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setInput(action.question)}
                className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 rounded-xl text-left transition-all duration-300 group"
              >
                <h4 className="font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {action.title}
                </h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {action.description}
                </p>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
