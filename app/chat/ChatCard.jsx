"use client";

import React, { useState, useRef, useEffect } from "react";

export default function ChatCard() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi! Ask me anything about BIO/ACC or DeSci." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/RAG", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      if (res.ok && data.message) {
        setMessages((prev) => [...prev, { sender: "ai", text: data.message }]);
      } else {
        throw new Error(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Sorry, something went wrong. Please try again later.");
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Sorry, I couldn't process your request." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 rounded-xl shadow-lg bg-gray-900 border border-gray-800 p-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-100">
        Try DeSci Bot
      </h2>
      <div className="min-h-[300px] max-h-[400px] overflow-y-auto mb-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`my-2 flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-2xl text-sm break-words max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-blue-700 text-gray-100"
                  : "bg-gray-700 text-gray-100"
              }`}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            loading || !input.trim()
              ? "bg-blue-900 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500 text-white"
          }`}
        >
          {loading ? "..." : "Send"}
        </button>
      </form>
      {error && <div className="text-red-400 mt-4 text-center">{error}</div>}
    </div>
  );
}
