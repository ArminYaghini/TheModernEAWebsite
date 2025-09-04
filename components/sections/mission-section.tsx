
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { TransformationAnimation } from '@/components/effects/transformation-animation'
import { ProgressIndicator } from '@/components/ui/progress-indicator'
import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react'

export function MissionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], ['50px', '-50px'])

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center py-20 gradient-transformation"
      id="mission"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.abacus.ai/images/cd86ced1-38d6-453c-8b59-c0902ba4f03e.png"
          alt="Legacy System Transformation"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          style={{ opacity, y }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
                <span className="micro-copy text-orange-300 uppercase tracking-wider">
                  The Challenge
                </span>
              </div>
              
              <h2 className="section-header text-white mb-6">
                <span className="text-red-400">Legacy EA</span> vs 
                <span className="text-teal-400"> Modern EA</span>
              </h2>
              
              <p className="body-large text-gray-300 mb-8">
                Enterprise architecture has been trapped in outdated paradigms—slow documentation cycles, 
                rigid governance, and disconnected from business velocity. Organizations struggle with 
                fragmented systems that resist digital transformation.
              </p>
            </motion.div>

            {/* Legacy Problems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                'Siloed architecture decisions slow innovation',
                'Manual governance creates bottlenecks',
                'Security treated as an afterthought',
                'Technology debt accumulates faster than resolution'
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-red-900/20 border border-red-500/20"
                >
                  <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0" />
                  <span className="text-gray-300">{problem}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Transformation Visual */}
          <div className="relative">
            <TransformationAnimation />
            
            {/* Modern Solution */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 backdrop-blur-sm border border-teal-400/20 cinematic-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-teal-400" />
                <span className="micro-copy text-teal-300 uppercase tracking-wider">
                  The Solution
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">
                Modern EA Operating System
              </h3>
              
              <p className="body-large text-gray-300 mb-6">
                A federated, automated, and security-first approach that embeds 
                architectural thinking directly into development workflows.
              </p>
              
              <div className="flex items-center gap-4">
                <ProgressIndicator progress={85} label="Transformation Rate" />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
                >
                  See How <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
