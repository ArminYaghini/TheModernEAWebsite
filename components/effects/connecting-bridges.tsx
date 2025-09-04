
'use client'

import { motion, MotionValue } from 'framer-motion'

interface ConnectingBridgesProps {
  progress: MotionValue<number>
}

export function ConnectingBridges({ progress }: ConnectingBridgesProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 800 400">
        {/* Bridge from Pillar 1 to Pillar 2 */}
        <motion.path
          d="M200 200 Q400 180 600 200"
          stroke="url(#bridgeGradient1)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.6,
          }}
          transition={{ 
            duration: 1.5, 
            delay: 1.8,
            ease: "easeInOut"
          }}
        />
        
        {/* Bridge from Pillar 2 to Pillar 3 */}
        <motion.path
          d="M600 200 Q700 300 600 400"
          stroke="url(#bridgeGradient2)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.6,
          }}
          transition={{ 
            duration: 1.5, 
            delay: 2.0,
            ease: "easeInOut"
          }}
        />
        
        {/* Bridge from Pillar 3 to Pillar 4 */}
        <motion.path
          d="M600 400 Q400 420 200 400"
          stroke="url(#bridgeGradient3)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.6,
          }}
          transition={{ 
            duration: 1.5, 
            delay: 2.2,
            ease: "easeInOut"
          }}
        />
        
        {/* Bridge from Pillar 4 to Pillar 1 */}
        <motion.path
          d="M200 400 Q100 300 200 200"
          stroke="url(#bridgeGradient4)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.6,
          }}
          transition={{ 
            duration: 1.5, 
            delay: 2.4,
            ease: "easeInOut"
          }}
        />

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="bridgeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FbbF24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="bridgeGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="bridgeGradient3" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="bridgeGradient4" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FbbF24" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Connection Nodes */}
        {[
          { x: 200, y: 200, delay: 1.8 },
          { x: 600, y: 200, delay: 2.0 },
          { x: 600, y: 400, delay: 2.2 },
          { x: 200, y: 400, delay: 2.4 }
        ].map((node, index) => (
          <motion.circle
            key={index}
            cx={node.x}
            cy={node.y}
            r="6"
            fill="url(#nodeGradient)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 0.8,
            }}
            transition={{ 
              duration: 0.5, 
              delay: node.delay,
              ease: "easeOut"
            }}
          />
        ))}

        <defs>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
