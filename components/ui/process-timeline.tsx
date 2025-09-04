
'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock } from 'lucide-react'

interface ProcessStep {
  title: string
  description: string
  duration: string
}

interface ProcessTimelineProps {
  steps: ProcessStep[]
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-red-500 to-pink-500 rounded-full" />

      <div className="space-y-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex items-center gap-8 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {/* Content */}
            <div className="flex-1 p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/20 cinematic-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4">{step.description}</p>
              
              <div className="flex items-center gap-2 text-orange-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{step.duration}</span>
              </div>
            </div>

            {/* Timeline Node */}
            <motion.div
              className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>

            {/* Spacer for opposite side */}
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
