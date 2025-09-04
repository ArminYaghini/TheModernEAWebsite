
'use client'

import { motion } from 'framer-motion'

export function PillarParticles() {
  const pillars = [
    { x: '20%', color: '#FbbF24', count: 15 },
    { x: '40%', color: '#06B6D4', count: 15 },
    { x: '60%', color: '#10B981', count: 15 },
    { x: '80%', color: '#EF4444', count: 15 }
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pillars.map((pillar, pillarIndex) => (
        <div key={pillarIndex} className="absolute inset-0">
          {[...Array(pillar.count)].map((_, particleIndex) => (
            <motion.div
              key={`${pillarIndex}-${particleIndex}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: pillar.color,
                left: pillar.x,
                boxShadow: `0 0 10px ${pillar.color}`,
              }}
              initial={{
                y: '100vh',
                x: Math.random() * 100 - 50,
                opacity: 0
              }}
              animate={{
                y: ['100vh', '0vh', '100vh'],
                x: Math.random() * 100 - 50,
                opacity: [0, 1, 0],
                scale: [0, Math.random() * 2 + 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
