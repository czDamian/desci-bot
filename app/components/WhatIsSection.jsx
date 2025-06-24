"use client";

import {
  FaFlask,
  FaDna,
  FaMicrochip,
  FaAtom,
  FaRocket,
  FaCog,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

const WhatIsSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Science Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-16 text-emerald-400/20"
        >
          <FaAtom className="w-16 h-16" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-32 right-20 text-green-400/20"
        >
          <FaCog className="w-12 h-12" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute top-1/2 right-12 text-teal-400/20"
        >
          <FaRocket className="w-10 h-10" />
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
              <HiSparkles className="text-emerald-400" />
              <span className="text-sm font-medium text-gray-300">
                Understanding the Movement
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8">
              What is{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
                BIO/ACC
              </span>
              ?
            </h2>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              <span className="text-emerald-400 font-semibold">
                BIO/ACC (Biological Accelerationism)
              </span>{" "}
              is a revolutionary movement focused on accelerating biological
              innovation and scientific progress. Our AI bot helps you
              understand the principles, stay updated with the latest
              developments, and connect with the{" "}
              <span className="text-teal-400 font-semibold">
                DeSci community
              </span>
              .
            </motion.p>
          </motion.div>

          {/* Main Content Cards */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div variants={cardVariants}>
              <ConceptCard
                icon={<FaDna />}
                title="Biological Innovation"
                description="Accelerating progress in biotechnology, genomics, and synthetic biology through cutting-edge research and development"
                gradient="from-emerald-500 to-teal-400"
                glowColor="emerald"
                delay={0}
              />
            </motion.div>

            <motion.div variants={cardVariants}>
              <ConceptCard
                icon={<FaFlask />}
                title="Decentralized Science"
                description="Supporting open, collaborative, and accessible scientific research that breaks traditional barriers"
                gradient="from-green-500 to-emerald-400"
                glowColor="green"
                delay={0.2}
              />
            </motion.div>

            <motion.div variants={cardVariants}>
              <ConceptCard
                icon={<FaMicrochip />}
                title="Tech Integration"
                description="Merging AI, blockchain, and biotechnology for unprecedented scientific advancement and innovation"
                gradient="from-teal-500 to-green-400"
                glowColor="teal"
                delay={0.4}
              />
            </motion.div>
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl">
                    <HiLightningBolt className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    The Future is Now
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  BIO/ACC represents a paradigm shift in how we approach
                  scientific research and biological innovation. By leveraging
                  decentralized technologies and AI-powered tools, we're
                  creating a more open, collaborative, and accelerated path to
                  scientific breakthroughs.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Open Source",
                    "Community Driven",
                    "AI Enhanced",
                    "Blockchain Verified",
                  ].map((tag, index) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-full text-sm font-medium text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "500+", label: "Research Papers" },
                    { number: "50K+", label: "Community Members" },
                    { number: "100+", label: "Active Projects" },
                    { number: "24/7", label: "AI Support" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-white/10"
                    >
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Concept Card Component
function ConceptCard({ icon, title, description, gradient, glowColor, delay }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative h-full"
    >
      <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-8 overflow-hidden transition-all duration-500">
        {/* Hover Glow Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-${glowColor}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
        ></div>

        {/* Icon Container */}
        <div className="relative mb-6">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`inline-flex p-4 bg-gradient-to-br ${gradient} rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500`}
          >
            <div className="text-white text-3xl">{icon}</div>
          </motion.div>

          {/* Icon Glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
}

export default WhatIsSection;
