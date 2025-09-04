
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function TransformationAnimation() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStage(prev => (prev >= 3 ? 0 : prev + 1))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-96 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Images */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <div className="relative w-full h-full">
          <Image
            src="https://upplabs.com/wp-content/uploads/2020/08/ing_5_4.png"
            alt="Legacy EA Architecture"
            fill
            className="object-cover opacity-60 rounded-l-2xl"
            onError={() => {
              // Fallback if image doesn't load
              const elem = document.querySelector('.legacy-fallback')
              if (elem) elem.classList.remove('hidden')
            }}
          />
          <div className="legacy-fallback hidden absolute inset-0 bg-gradient-to-br from-red-900/50 to-gray-800/50" />
        </div>
      </div>
      
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <div className="relative w-full h-full">
          <Image
            src="https://storage.googleapis.com/gweb-cloudblog-publish/images/microservices_architecture.max-2000x2000.jpg"
            alt="Modern EA Architecture"
            fill
            className="object-cover opacity-60 rounded-r-2xl"
            onError={() => {
              // Fallback if image doesn't load
              const elem = document.querySelector('.modern-fallback')
              if (elem) elem.classList.remove('hidden')
            }}
          />
          <div className="modern-fallback hidden absolute inset-0 bg-gradient-to-br from-teal-900/50 to-blue-800/50" />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full">
        {/* Legacy EA Side */}
        <div className="w-1/2 h-full p-6 bg-black/60 backdrop-blur-sm border-r border-gray-600">
          <h4 className="text-lg font-bold text-red-400 mb-4">Legacy EA</h4>
          <div className="space-y-3">
            {['Monolithic Systems', 'Manual Governance', 'Siloed Architecture', 'Reactive Security'].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 p-2 rounded bg-red-900/30 border border-red-500/30"
                animate={{
                  opacity: stage >= 2 ? 0.4 : 1,
                  scale: stage >= 2 ? 0.95 : 1
                }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-2 h-2 bg-red-400 rounded-full" />
                <span className="text-sm text-red-200">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modern EA Side */}
        <div className="w-1/2 h-full p-6 bg-black/60 backdrop-blur-sm">
          <h4 className="text-lg font-bold text-teal-400 mb-4">Modern EA</h4>
          <div className="space-y-3">
            {['Microservices', 'Automated Governance', 'Federated Architecture', 'Security-First'].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 p-2 rounded"
                initial={{ opacity: 0, x: 20, backgroundColor: 'rgba(107, 114, 128, 0.3)' }}
                animate={{
                  opacity: stage >= 1 ? 1 : 0,
                  x: stage >= 1 ? 0 : 20,
                  backgroundColor: stage >= 2 ? 'rgba(20, 184, 166, 0.3)' : 'rgba(107, 114, 128, 0.3)'
                }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="w-2 h-2 bg-teal-400 rounded-full" />
                <span className="text-sm text-teal-200">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Transformation Arrow */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{
          scale: stage >= 1 ? [1, 1.2, 1] : 0,
          rotate: stage >= 2 ? 360 : 0
        }}
        transition={{ duration: 1 }}
      >
        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </motion.div>

      {/* Stage Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3].map(i => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            animate={{
              backgroundColor: stage === i ? '#14B8A6' : '#6B7280'
            }}
          />
        ))}
      </div>
    </div>
  )
}
