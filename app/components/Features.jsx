"use client";

import { motion } from "framer-motion";
import { FaTelegram, FaTwitter, FaAtom, FaDna, FaRocket } from "react-icons/fa";
import {
  HiChatAlt2,
  HiDocumentText,
  HiLightningBolt,
  HiSparkles,
  HiChip,
  HiGlobe,
} from "react-icons/hi";

const Features = () => {
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
    <section
      id="features"
      className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-32 right-20 text-green-400/20"
        >
          <FaAtom className="w-12 h-12" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-40 left-16 text-emerald-400/20"
        >
          <FaDna className="w-10 h-10" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 left-8 text-teal-400/20"
        >
          <FaRocket className="w-8 h-8" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6">
            <HiSparkles className="text-emerald-400" />
            <span className="text-sm font-medium text-gray-300">
              Powerful AI Features
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
              Next-Gen
            </span>
            <br />
            <span className="text-white">AI Capabilities</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our AI bot comes packed with cutting-edge tools to enhance your{" "}
            <span className="text-emerald-400 font-semibold">
              DeSci experience
            </span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<FaTelegram />}
              title="Telegram Integration"
              description="Works seamlessly in both group chats and direct messages, providing instant responses to your queries"
              gradient="from-emerald-500 to-teal-400"
              glowColor="emerald"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<HiLightningBolt />}
              title="RAG-based Knowledge"
              description="Retrieval Augmented Generation ensures accurate, up-to-date information about DeSci and BIO/ACC topics"
              gradient="from-green-500 to-emerald-400"
              glowColor="green"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<HiSparkles />}
              title="Content Generation"
              description="Create BIO/ACC-themed content, memes, and explanations to share with your community"
              gradient="from-teal-500 to-green-400"
              glowColor="teal"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<FaTwitter />}
              title="Social Media Integration"
              description="Stay updated with the latest BIO/ACC discussions happening on Twitter and other platforms"
              gradient="from-emerald-500 to-teal-400"
              glowColor="emerald"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<HiChatAlt2 />}
              title="Rich Formatting"
              description="Receive beautifully formatted responses with rich text, links, and structured information"
              gradient="from-green-500 to-teal-400"
              glowColor="green"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<HiDocumentText />}
              title="Research Summaries"
              description="Get concise summaries of complex scientific papers and BIO/ACC concepts"
              gradient="from-teal-500 to-emerald-400"
              glowColor="teal"
            />
          </motion.div>
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl">
                <HiChip className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Advanced AI Engine
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Powered by state-of-the-art language models fine-tuned
              specifically for DeSci and BIO/ACC content, ensuring accurate and
              contextually relevant responses.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl">
                <HiGlobe className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Global Community
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Connect with researchers, enthusiasts, and innovators worldwide.
              Share insights, collaborate on projects, and stay at the forefront
              of decentralized science.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Feature Card Component
function FeatureCard({ icon, title, description, gradient, glowColor }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-8 overflow-hidden"
    >
      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-${glowColor}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
      ></div>

      {/* Icon Container */}
      <div className="relative mb-6">
        <div
          className={`inline-flex p-4 bg-gradient-to-br ${gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
        >
          <div className="text-white text-3xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Icon Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
}

export default Features;
