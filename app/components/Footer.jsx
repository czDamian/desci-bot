"use client";

import { FaTelegram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-800/10 to-slate-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-900/10 to-slate-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <Logo size={50} />
                <h2 className="text-2xl font-bold text-white">DeSci Bot</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
                Accelerating DeSci knowledge and community engagement through
                advanced AI technology and collaborative research.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Open Source", "Community Driven", "AI Powered"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Features", href: "#features" },
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "About BIO/ACC", href: "#about" },
                  { label: "FAQ", href: "#faq" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-emerald-400 transition-colors duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
              <div className="space-y-4">
                <a
                  href="https://t.me/DesciAI_New"
                  className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300 group"
                >
                  <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-emerald-600/20 transition-colors duration-300">
                    <FaTelegram className="w-5 h-5" />
                  </div>
                  <span>Telegram</span>
                </a>
                <a
                  href="https://x.com/Desci_ai_bot"
                  className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300 group"
                >
                  <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-emerald-600/20 transition-colors duration-300">
                    <FaXTwitter className="w-5 h-5" />
                  </div>
                  <span>Twitter</span>
                </a>
                <a
                  href="mailto:dev.czdamian@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300 group"
                >
                  <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-emerald-600/20 transition-colors duration-300">
                    <HiMail className="w-5 h-5" />
                  </div>
                  <span>Mail</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800/50 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} BIO/ACC AI Bot. All rights reserved. Built with ❤️
              for the DeSci community.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
