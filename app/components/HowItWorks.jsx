"use client";

import { motion } from "framer-motion";
import {
  FaTelegram,
  FaBrain,
  FaDatabase,
  FaRocket,
  FaUsers,
  FaCog,
  FaNetworkWired,
} from "react-icons/fa";
import {
  HiLightningBolt,
  HiChip,
  HiGlobe,
  HiChatAlt2,
  HiDocumentText,
} from "react-icons/hi";

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-emerald-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-green-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-teal-400 rounded-full"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-32 right-16 text-emerald-400/20"
        >
          <FaCog className="w-12 h-12" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 5,
          }}
          className="absolute bottom-40 left-20 text-green-400/20"
        >
          <FaNetworkWired className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-8">
              <HiChip className="text-emerald-400" />
              <span className="text-sm font-medium text-gray-300">
                Advanced AI Architecture
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powered by cutting-edge AI technology, our DeSci bot combines{" "}
              <span className="text-emerald-400 font-semibold">
                Retrieval Augmented Generation (RAG)
              </span>
              ,{" "}
              <span className="text-teal-400 font-semibold">
                specialized knowledge bases
              </span>
              , and{" "}
              <span className="text-green-400 font-semibold">
                real-time data processing
              </span>{" "}
              to deliver unparalleled scientific insights.
            </p>
          </motion.div>

          {/* Technical Architecture Overview */}
          <motion.div
            variants={itemVariants}
            className="mb-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl">
                    <FaBrain className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    AI Architecture
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Our bot leverages state-of-the-art Large Language Models
                  fine-tuned specifically for scientific content, combined with
                  a sophisticated RAG system that retrieves relevant information
                  from our curated DeSci knowledge base in real-time.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <HiLightningBolt />, label: "Sub-second Response" },
                    { icon: <FaDatabase />, label: "10K+ Research Papers" },
                    { icon: <HiGlobe />, label: "Multi-language Support" },
                    { icon: <HiChip />, label: "GPU-Accelerated" },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <div className="text-emerald-400">{feature.icon}</div>
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-4 text-center"
                  >
                    <FaBrain className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-white">
                      Neural Engine
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 text-center"
                  >
                    <FaDatabase className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-white">
                      Knowledge Base
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-teal-500/10 to-green-500/10 backdrop-blur-sm border border-teal-500/20 rounded-xl p-4 text-center"
                  >
                    <HiChip className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-white">
                      RAG System
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-4 text-center"
                  >
                    <FaTelegram className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-white">
                      API Interface
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step-by-Step Process */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <StepItem
                number="01"
                title="Intelligent Query Processing"
                description="When you send a message, our NLP engine analyzes your query using advanced semantic understanding to identify key concepts, intent, and context within the DeSci/BIO/ACC domain."
                icon={<HiChatAlt2 />}
                gradient="from-emerald-500 to-teal-400"
                glowColor="emerald"
                details={[
                  "Natural Language Understanding (NLU)",
                  "Intent classification and entity extraction",
                  "Context-aware query preprocessing",
                  "Multi-turn conversation memory",
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <StepItem
                number="02"
                title="Knowledge Retrieval & Augmentation"
                description="Our RAG system searches through a curated database of 10,000+ scientific papers, BIO/ACC research, and DeSci protocols to find the most relevant information for your specific query."
                icon={<FaDatabase />}
                gradient="from-green-500 to-emerald-400"
                glowColor="green"
                details={[
                  "Vector similarity search across research papers",
                  "Real-time data from scientific journals",
                  "Community-contributed knowledge base",
                  "Cross-referenced citation networks",
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <StepItem
                number="03"
                title="AI-Powered Response Generation"
                description="Using the retrieved knowledge, our fine-tuned language model generates accurate, contextual responses with proper scientific citations, formatted for easy reading and sharing."
                icon={<FaBrain />}
                gradient="from-teal-500 to-green-400"
                glowColor="teal"
                details={[
                  "Scientific accuracy validation",
                  "Automatic citation generation",
                  "HTML formatting for Telegram",
                  "Bias detection and mitigation",
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <StepItem
                number="04"
                title="Community Integration & Learning"
                description="Every interaction helps improve the system. The bot learns from community feedback, updates its knowledge base with new research, and adapts to emerging trends in the DeSci space."
                icon={<FaUsers />}
                gradient="from-emerald-500 to-green-400"
                glowColor="emerald"
                details={[
                  "Continuous learning from user interactions",
                  "Community feedback integration",
                  "Real-time knowledge base updates",
                  "Trend analysis and adaptation",
                ]}
              />
            </motion.div>
          </motion.div>

          {/* Technical Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 grid md:grid-cols-3 gap-8"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <HiLightningBolt className="w-6 h-6 text-green-400" />
                <h4 className="text-lg font-bold text-white">Performance</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Average response time: 0.8 seconds</li>
                <li>• 99.9% uptime guarantee</li>
                <li>• Handles 1000+ concurrent users</li>
                <li>• Auto-scaling infrastructure</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <HiDocumentText className="w-6 h-6 text-emerald-400" />
                <h4 className="text-lg font-bold text-white">Knowledge Base</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 10,000+ research papers indexed</li>
                <li>• Daily updates from 50+ journals</li>
                <li>• Specialized BIO/ACC content</li>
                <li>• Community-verified information</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaRocket className="w-6 h-6 text-teal-400" />
                <h4 className="text-lg font-bold text-white">Features</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Multi-language support</li>
                <li>• Image and document analysis</li>
                <li>• Custom research summaries</li>
                <li>• Integration with 20+ platforms</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Step Item Component
function StepItem({
  number,
  title,
  description,
  icon,
  gradient,
  glowColor,
  details,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <div className="flex items-start gap-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-8 transition-all duration-500">
        {/* Step Number */}
        <div className="flex-shrink-0 relative">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-2xl transition-all duration-500`}
          >
            {number}
          </motion.div>

          {/* Glow Effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
          ></div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className={`text-2xl text-${glowColor}-400`}>{icon}</div>
            <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
              {title}
            </h3>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          {/* Technical Details */}
          <div className="grid md:grid-cols-2 gap-3">
            {details.map((detail, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <div
                  className={`w-2 h-2 bg-${glowColor}-400 rounded-full`}
                ></div>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HowItWorks;
