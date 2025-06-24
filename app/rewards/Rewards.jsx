"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaCoins,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaBell,
} from "react-icons/fa";
import { HiSparkles, HiGift, HiTrendingUp, HiStar } from "react-icons/hi";
import { IoRocket } from "react-icons/io5";
import Header from "../components/Header";

export default function Rewards() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // success or error message
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const res = await fetch("/api/rewards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("🎉 You have successfully joined the waitlist!");
        setEmail("");
      } else {
        setStatus(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <Header />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-500/5 to-green-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-32 right-20 text-emerald-400/20"
        >
          <FaCoins className="w-12 h-12" />
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
          className="absolute bottom-40 left-20 text-green-400/20"
        >
          <FaRocket className="w-10 h-10" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute top-1/2 left-16 text-teal-400/20"
        >
          <HiGift className="w-8 h-8" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-8">
              <FaClock className="text-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">
                Coming Soon
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
                DeSci Rewards
              </span>
              <br />
              <span className="text-white">Program</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Submit your innovative{" "}
              <span className="text-emerald-400 font-semibold">
                DeSci projects
              </span>{" "}
              and get rewarded with tokens for contributing to the future of{" "}
              <span className="text-teal-400 font-semibold">
                decentralized science
              </span>
              .
            </p>

            {/* Coming Soon Badge */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl px-8 py-4 mb-12"
            >
              <div className="relative">
                <IoRocket className="w-8 h-8 text-emerald-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-white">
                  Launching Soon
                </div>
                <div className="text-sm text-gray-300">
                  Be the first to know when we go live
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            <motion.div variants={itemVariants}>
              <FeatureCard
                icon={<FaLightbulb />}
                title="Project Submission"
                description="Submit your innovative DeSci projects, research papers, and breakthrough discoveries to our community-driven platform."
                gradient="from-emerald-500 to-teal-400"
                glowColor="emerald"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FeatureCard
                icon={<FaCoins />}
                title="Token Rewards"
                description="Earn valuable tokens based on project quality, community impact, and scientific contribution to the DeSci ecosystem."
                gradient="from-green-500 to-emerald-400"
                glowColor="green"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FeatureCard
                icon={<FaUsers />}
                title="Community Voting"
                description="Let the community evaluate and vote on projects, ensuring fair distribution of rewards and recognition."
                gradient="from-teal-500 to-green-400"
                glowColor="teal"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FeatureCard
                icon={<HiTrendingUp />}
                title="Impact Tracking"
                description="Monitor your project's impact, citations, and community engagement with detailed analytics and metrics."
                gradient="from-emerald-500 to-green-400"
                glowColor="emerald"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FeatureCard
                icon={<HiStar />}
                title="Recognition System"
                description="Gain recognition as a leading contributor to the BIO/ACC movement with badges, rankings, and achievements."
                gradient="from-green-500 to-teal-400"
                glowColor="green"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FeatureCard
                icon={<FaRocket />}
                title="Project Acceleration"
                description="Get your projects featured, funded, and accelerated through our network of researchers and investors."
                gradient="from-teal-500 to-emerald-400"
                glowColor="teal"
              />
            </motion.div>
          </motion.div>

          {/* Notification Signup */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl">
                  <FaBell className="w-8 h-8 text-emerald-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Get Notified
                </h2>
              </div>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Be among the first to know when the DeSci Rewards Program
                launches. Join our waitlist and get exclusive early access to
                submit your projects.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6"
              >
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-700/50 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 cursor-pointer"
                  disabled={loading || !email}
                >
                  {loading ? "Joining..." : "Notify Me"}
                </motion.button>
              </form>
              {status && (
                <div
                  className={`text-center my-2 ${
                    status.startsWith("🎉") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {status}
                </div>
              )}

              <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <HiSparkles className="text-emerald-400" />
                  <span>Early Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiGift className="text-emerald-400" />
                  <span>Exclusive Rewards</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRocket className="text-emerald-400" />
                  <span>Priority Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description, gradient, glowColor }) {
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
