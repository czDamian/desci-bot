"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaTelegram, FaUsers, FaRocket } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const JoinCommunity = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Minimal gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-700/20 to-slate-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-900/20 to-slate-700/20 rounded-full blur-3xl"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 md:p-16 shadow-2xl">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl"></div>

            <div className="relative z-10 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-full px-6 py-2 mb-8"
              >
                <HiSparkles className="text-emerald-400 w-4 h-4" />
                <span className="text-sm font-medium text-slate-300">
                  Join the Revolution
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
              >
                Ready to Accelerate Your{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  DeSci Journey
                </span>
                ?
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Join thousands of researchers, enthusiasts, and innovators who
                are already using the BIO/ACC AI Bot to enhance their
                understanding and drive scientific progress.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    10K+
                  </div>
                  <div className="text-slate-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    50K+
                  </div>
                  <div className="text-slate-400">Queries Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    24/7
                  </div>
                  <div className="text-slate-400">AI Support</div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href="https://t.me/desci_ai_bot"
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/25"
                >
                  <div className="flex items-center justify-center gap-3">
                    <FaTelegram className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-lg">Start Using the Bot Today</span>
                    <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>

                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <FaUsers className="w-4 h-4" />
                  <span>Free to use • No registration required</span>
                </div>
              </motion.div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-600/10 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-slate-600/10 to-transparent rounded-tr-3xl"></div>
          </div>

          {/* Additional Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mt-16"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-700/50 rounded-xl">
                  <FaRocket className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Get Started Instantly
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                No complex setup required. Simply click the link, start a
                conversation, and begin exploring the world of decentralized
                science with AI-powered assistance.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-700/50 rounded-xl">
                  <FaUsers className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Join the Community
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Connect with like-minded researchers and innovators. Share
                insights, collaborate on projects, and stay at the forefront of
                scientific advancement.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCommunity;
