"use client"
import { motion } from "framer-motion"

export default function Logo({ size = 120, animated = true }) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.5 },
        },
      }
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" className="relative" style={{ width: size, height: size }}>
      {/* DNA Helix Base */}
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="rgba(16, 185, 129, 0.1)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* DNA Helix */}
        <motion.path
          d="M60,40 C90,60 110,40 140,60 C110,80 90,60 60,80 C90,100 110,80 140,100 C110,120 90,100 60,120 C90,140 110,120 140,140 C110,160 90,140 60,160"
          stroke="#10b981"
          strokeWidth="6"
          strokeLinecap="round"
          custom={1}
          variants={animated ? draw : {}}
        />

        {/* DNA Connections */}
        <motion.path
          d="M60,40 L140,60 M60,80 L140,100 M60,120 L140,140 M60,160 L140,160"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 6"
          custom={2}
          variants={animated ? draw : {}}
        />

        {/* Acceleration Arrow */}
        <motion.path
          d="M100,50 L130,100 L100,150"
          stroke="#22c55e"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          custom={3}
          variants={animated ? draw : {}}
        />

        {/* AI Circuit Elements */}
        <motion.path
          d="M80,75 L120,75 M80,100 L120,100 M80,125 L120,125"
          stroke="#4ade80"
          strokeWidth="4"
          strokeLinecap="round"
          custom={4}
          variants={animated ? draw : {}}
        />

        {/* Nodes */}
        <motion.circle
          cx="60"
          cy="40"
          r="6"
          fill="#34d399"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, duration: 0.3 }}
        />
        <motion.circle
          cx="140"
          cy="60"
          r="6"
          fill="#34d399"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.6, duration: 0.3 }}
        />
        <motion.circle
          cx="60"
          cy="80"
          r="6"
          fill="#34d399"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.7, duration: 0.3 }}
        />
        <motion.circle
          cx="140"
          cy="100"
          r="6"
          fill="#34d399"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.8, duration: 0.3 }}
        />
        <motion.circle
          cx="60"
          cy="120"
          r="6"
          fill="#34d399"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.9, duration: 0.3 }}
        />
        <motion.circle
          cx="140"
          cy="140"
          r="6"
          fill="#34d399"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.0, duration: 0.3 }}
        />
        <motion.circle
          cx="60"
          cy="160"
          r="6"
          fill="#34d399"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.1, duration: 0.3 }}
        />
        <motion.circle
          cx="140"
          cy="160"
          r="6"
          fill="#34d399"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.2, duration: 0.3 }}
        />
      </svg>

      {/* Glow Effect */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0) 70%)",
          filter: "blur(10px)",
          zIndex: -1,
        }}
      />
    </motion.div>
  )
}

