"use client";

import { useState } from "react";
import { FaQuestion, FaLightbulb } from "react-icons/fa";
import { HiChevronDown, HiSparkles } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-slate-700/10 to-slate-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-900/10 to-slate-700/10 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-full px-6 py-2 mb-8">
              <HiSparkles className="text-emerald-400 w-4 h-4" />
              <span className="text-sm font-medium text-slate-300">
                Got Questions?
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              Questions
            </h2>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about the BIO/ACC AI Bot and how it
              can accelerate your DeSci journey.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div variants={containerVariants} className="space-y-4">
            <motion.div variants={itemVariants}>
              <FaqItem
                question="What exactly is the BIO/ACC movement?"
                answer="BIO/ACC (Biological Accelerationism) is a revolutionary movement focused on accelerating biological innovation, scientific progress, and technological advancement to address global challenges. It combines principles from decentralized science (DeSci), open research methodologies, and cutting-edge technological integration to create a more collaborative and efficient scientific ecosystem."
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FaqItem
                question="Is the bot free to use?"
                answer="Yes, the BIO/ACC Telegram AI Bot is completely free to use for both individuals and communities. We believe in making advanced AI-powered scientific knowledge accessible to everyone interested in DeSci and biological innovation. There are no hidden fees, subscription costs, or usage limits."
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FaqItem
                question="How accurate is the information provided by the bot?"
                answer="The bot uses advanced Retrieval Augmented Generation (RAG) technology combined with a curated database of 10,000+ verified scientific papers and research documents. While we maintain high accuracy standards through continuous validation and community feedback, we always recommend cross-referencing critical information with primary sources for important decisions."
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FaqItem
                question="Can I add the bot to my own Telegram group?"
                answer="The bot is designed to work seamlessly in both direct messages and group chats. Simply add @desci_ai_bot to your Telegram group, and it will be ready to answer questions from all members. It can handle multiple simultaneous conversations and maintains context for each user interaction."
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FaqItem
                question="What types of questions can I ask the bot?"
                answer="You can ask about a wide range of topics including BIO/ACC concepts, DeSci projects, biological innovation, synthetic biology, genomics, biotechnology trends, scientific paper summaries, research methodologies, community events, and even request content generation like explanations, research summaries, or educational content related to the movement."
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FaqItem
                question="How does the bot stay updated with the latest research?"
                answer="Our AI system continuously monitors 50+ leading scientific journals and research databases, updating its knowledge base daily. The bot also learns from community interactions and incorporates feedback to improve accuracy. Additionally, our team of researchers regularly curates and validates new content to ensure the most current information is available."
              />
            </motion.div>
          </motion.div>

          {/* Additional Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-slate-700/50 rounded-xl">
                <FaLightbulb className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Still have questions?
              </h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Can't find what you're looking for? Start a conversation with our
              AI bot and get personalized answers to your specific questions
              about DeSci and BIO/ACC.
            </p>
            <a
              href="https://t.me/desci_ai_bot"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
            >
              Ask the Bot Directly
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced FAQ Item Component
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-6 text-left hover:bg-slate-700/30 transition-colors duration-300 group cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-emerald-600/20 transition-colors duration-300">
            <FaQuestion className="text-emerald-400 w-4 h-4" />
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
            {question}
          </h3>
        </div>
        <HiChevronDown
          className={`text-xl text-slate-400 transition-all duration-300 ${
            isOpen
              ? "rotate-180 text-emerald-400"
              : "group-hover:text-slate-300"
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="pl-12 pr-8">
                <p className="text-slate-300 leading-relaxed">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default FAQ;
