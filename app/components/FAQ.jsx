"use client";
import { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <section className="py-20 bg-gray-900/70">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-300">
              Frequently Asked Questions
            </span>
          </h2>

          <div className="space-y-6">
            <FaqItem
              question="What exactly is the BIO/ACC movement?"
              answer="BIO/ACC (Biological Accelerationism) is a movement focused on accelerating biological innovation, scientific progress, and technological advancement to address global challenges. It combines principles from decentralized science, open research, and technological integration."
            />

            <FaqItem
              question="Is the bot free to use?"
              answer="Yes, the BIO/ACC Telegram AI Bot is completely free to use for both individuals and communities. We believe in making knowledge accessible to everyone interested in DeSci and biological innovation."
            />

            <FaqItem
              question="How accurate is the information provided by the bot?"
              answer="The bot uses Retrieval Augmented Generation (RAG) to provide accurate information from verified sources. However, as with any AI system, it's always good practice to verify critical information from primary sources."
            />

            <FaqItem
              question="Can I add the bot to my own Telegram group?"
              answer="The bot is designed to work in both direct messages and group chats. Simply add @desci_ai_bot to your group and it will be ready to answer questions from all members."
            />

            <FaqItem
              question="What types of questions can I ask the bot?"
              answer="You can ask about BIO/ACC concepts, DeSci projects, biological innovation, scientific papers, community events, and even request content generation like explanations, summaries, or creative content related to the movement."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

// Component for FAQ items
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 text-left bg-gray-800/50 hover:bg-gray-800 transition-colors"
      >
        <h3 className="text-lg font-medium flex items-center gap-3 cursor-pointer">
          <FaQuestion className="text-green-400" /> {question}
        </h3>
        <HiChevronDown
          className={`text-xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-gray-800/30 text-gray-300">{answer}</div>
      </div>
    </div>
  );
}
