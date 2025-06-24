"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTelegram, FaRocket, FaAtom, FaDna } from "react-icons/fa";
import { HiChevronDown, HiSparkles } from "react-icons/hi";
import { IoRocket } from "react-icons/io5";
import Logo from "./Logo";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Science Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 text-green-400/30"
        >
          <FaAtom className="w-8 h-8" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-20 text-emerald-400/30"
        >
          <FaDna className="w-10 h-10" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-20 text-teal-400/30"
        >
          <FaRocket className="w-6 h-6" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Hero Image/Logo Section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mb-8 relative"
          >
            <div className="relative w-40 h-40 mx-auto">
              {/* Placeholder for hero image - replace with your actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-3xl shadow-2xl shadow-green-500/25 animate-pulse">
                <div className="absolute inset-4 bg-slate-900/80 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Logo className="w-16 h-16 text-white" size={120} />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
              BIO/ACC
            </span>
            <br />
            <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
              AI Powered Bot
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-xl md:text-2xl max-w-4xl text-gray-300 leading-relaxed"
          >
            Accelerate your{" "}
            <span className="text-emerald-400 font-semibold">
              DeSci knowledge
            </span>{" "}
            and community engagement with our intelligent AI assistant
          </motion.p>

          {/* Feature Pills */}

          {/* remove the AI Powered features for now */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {["AI-Powered", "Real-time", "Community-Driven", "Open Source"].map(
              (feature, index) => (
                <div
                  key={feature}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-gray-300"
                >
                  {feature}
                </div>
              )
            )}
          </motion.div> */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex flex-col sm:flex-row gap-6"
          >
            <a
              href="https://t.me/desci_ai_bot"
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-slate-900 font-bold py-4 px-8 rounded-2xl shadow-2xl shadow-emerald-500/25 transform transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40"
            >
              <div className="flex items-center justify-center gap-3">
                <FaTelegram className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg">Try it on Telegram</span>
                <HiSparkles className="text-xl group-hover:scale-125 transition-transform duration-300" />
              </div>

              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#features"
              className="group relative overflow-hidden bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border-2 border-emerald-500/30 hover:border-emerald-400/50 text-white font-bold py-4 px-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-lg">Explore Features</span>
                <HiChevronDown className="text-2xl animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
              </div>
            </a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl"
          >
            {[
              { number: "10K+", label: "Active Users" },
              { number: "50K+", label: "Queries Processed" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};

export default Hero;
