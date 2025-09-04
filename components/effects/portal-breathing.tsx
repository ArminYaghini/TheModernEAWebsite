
'use client'

import { motion } from 'framer-motion'

export function PortalBreathing() {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      {/* Main Portal */}
      <motion.div
        className="w-96 h-96 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Inner Glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-red-400/30 to-orange-400/30 backdrop-blur-sm"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Center Core */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-orange-300/40 to-red-300/40 backdrop-blur-sm"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  )
}
