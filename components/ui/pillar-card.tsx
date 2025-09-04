
'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface Pillar {
  id: string
  title: string
  icon: LucideIcon
  color: string
  particleColor: string
  description: string
  features: string[]
  delay: number
}

interface PillarCardProps {
  pillar: Pillar
  isSelected: boolean
  onClick: () => void
  index: number
}

export function PillarCard({ pillar, isSelected, onClick, index }: PillarCardProps) {
  const Icon = pillar.icon

  return (
    <motion.div
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        rotateY: 5,
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative cursor-pointer p-8 rounded-3xl backdrop-blur-lg border transition-all duration-500
        ${isSelected 
          ? 'bg-white/15 border-white/40 shadow-2xl ring-2 ring-white/20' 
          : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20 opacity-70 hover:opacity-100'
        }
      `}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Pillar Height Indicator */}
      <div className="absolute left-0 top-0 w-2 h-full rounded-l-3xl overflow-hidden">
        <motion.div
          className={`w-full bg-gradient-to-b ${pillar.color}`}
          initial={{ height: '0%' }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1.2, delay: pillar.delay }}
          viewport={{ once: true }}
        />
      </div>

      {/* Icon */}
      <motion.div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 mx-auto`}
        whileHover={{ rotateX: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white text-center mb-4">
        {pillar.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-center mb-6 line-clamp-3">
        {pillar.description}
      </p>

      {/* Features Preview */}
      <div className="space-y-2">
        {pillar.features.slice(0, 2).map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-2 text-sm text-gray-400"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: pillar.delay + 0.3 + (idx * 0.1) }}
            viewport={{ once: true }}
          >
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pillar.color}`} />
            <span>{feature}</span>
          </motion.div>
        ))}
        {pillar.features.length > 2 && (
          <div className="text-xs text-gray-500 text-center pt-2">
            +{pillar.features.length - 2} more
          </div>
        )}
      </div>

      {/* Particle Effect on Hover */}
      {isSelected && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: pillar.particleColor }}
              initial={{
                x: '50%',
                y: '50%',
                scale: 0
              }}
              animate={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      )}

      {/* Selection Ring */}
      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-white/30"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  )
}
