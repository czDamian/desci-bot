"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white shadow-2xl backdrop-blur-sm border-b border-green-500/20 px-4 py-4 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 group-hover:scale-105">
          </div> */}
          <Logo className="w-6 h-6 text-white" size={40} />
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            DeSci AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <Link
              href="/"
              className="relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:text-green-300 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/20 group-hover:to-emerald-500/20 rounded-lg transition-all duration-300"></div>
            </Link>
          </li>
          <li>
            <Link
              href="/chat"
              className="relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:text-green-300 group"
            >
              <span className="relative z-10">Chat</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/20 group-hover:to-emerald-500/20 rounded-lg transition-all duration-300"></div>
            </Link>
          </li>
          <li>
            <Link
              href="/#features"
              className="relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:text-green-300 group"
            >
              <span className="relative z-10">Features</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/20 group-hover:to-emerald-500/20 rounded-lg transition-all duration-300"></div>
            </Link>
          </li>
          <li>
            <Link
              href="/rewards"
              className="relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:text-green-300 group"
            >
              <span className="relative z-10">Rewards</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/20 group-hover:to-emerald-500/20 rounded-lg transition-all duration-300"></div>
            </Link>
          </li>
        </ul>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/czDamian"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:text-green-300 group"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/buzorDamian"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:text-green-300 group"
            aria-label="X (Twitter)"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/buzorDamian"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:text-green-300 group"
            aria-label="Telegram"
          >
            <FaTelegram className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-black/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-6 mx-2 animate-in slide-in-from-top-2 duration-300">
          <ul className="flex flex-col gap-4 font-medium">
            <li>
              <Link
                href="/"
                className="block px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:text-green-300"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/chat"
                className="block px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:text-green-300"
                onClick={() => setMenuOpen(false)}
              >
                Chat
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="block px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:text-green-300"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/rewards"
                className="block px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:text-green-300"
                onClick={() => setMenuOpen(false)}
              >
                Rewards
              </Link>
            </li>

            {/* Mobile Social Links */}
            <li className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 px-4">
                <span className="text-sm text-gray-300">Follow us:</span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/czDamian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:text-green-300"
                    onClick={() => setMenuOpen(false)}
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/buzorDamian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:text-green-300"
                    onClick={() => setMenuOpen(false)}
                    aria-label="X (Twitter)"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://t.me/buzorDamian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:text-green-300"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Telegram"
                  >
                    <FaTelegram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
