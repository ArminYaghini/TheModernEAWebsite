
'use client'

import { motion } from 'framer-motion'

export function GeometricShapes() {
  const shapes = [
    { type: 'hexagon', size: 40, x: '20%', y: '30%', delay: 0 },
    { type: 'cube', size: 30, x: '80%', y: '20%', delay: 0.5 },
    { type: 'triangle', size: 35, x: '15%', y: '70%', delay: 1 },
    { type: 'hexagon', size: 25, x: '75%', y: '65%', delay: 1.5 },
    { type: 'cube', size: 45, x: '50%', y: '80%', delay: 2 },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.3, 
            scale: 1, 
            rotate: 360,
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 2,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {shape.type === 'hexagon' && (
            <svg width={shape.size} height={shape.size} viewBox="0 0 40 40">
              <polygon
                points="20,5 35,15 35,25 20,35 5,25 5,15"
                fill="none"
                stroke="url(#hexagonGradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="hexagonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#EF4444" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          )}
          
          {shape.type === 'cube' && (
            <div 
              className="border-2 border-gradient-to-br from-blue-400 to-red-400 bg-gradient-to-br from-blue-400/10 to-red-400/10 transform rotate-45"
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          
          {shape.type === 'triangle' && (
            <svg width={shape.size} height={shape.size} viewBox="0 0 40 40">
              <polygon
                points="20,5 35,30 5,30"
                fill="url(#triangleGradient)"
                stroke="url(#triangleStroke)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="triangleStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  )
}
