
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ParticleField } from '@/components/effects/particle-field'
import { TypewriterText } from '@/components/effects/typewriter-text'
import { GeometricShapes } from '@/components/effects/geometric-shapes'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-deep-blue"
      id="hero"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="relative w-full h-full">
          <Image
            src="https://cdn.abacus.ai/images/b88524d5-9cf6-4c54-a43b-4d8ac27de423.png"
            alt="Digital Enterprise Landscape"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        </div>
      </motion.div>

      {/* Particle Field */}
      <ParticleField count={300} />

      {/* Geometric Shapes */}
      <GeometricShapes />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="micro-copy text-blue-300 uppercase tracking-wider">
              Modern Enterprise Architecture
            </span>
          </div>
          
          <TypewriterText
            text="TheModernEA"
            className="hero-text text-white mb-4"
            delay={1000}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-2xl text-gray-300 mb-6 font-light tracking-wide"
          >
            Redefining Enterprise Architecture for the Modern World
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="body-large text-gray-300 max-w-3xl mx-auto mb-8 text-balance"
          >
            A revolutionary framework that transforms enterprise architecture through 
            four foundational pillars: Agility, Integration, Security, and Velocity. 
            Designed for the digital-first organization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white border-0 cinematic-shadow group px-8 py-4"
              onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore the Framework
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4"
              onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { label: 'Enterprise Transformations', value: '200+' },
            { label: 'Architecture Domains', value: '4' },
            { label: 'Success Rate', value: '90%' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 cinematic-shadow"
            >
              <div className="text-3xl font-bold text-red-400 mb-2">{stat.value}</div>
              <div className="micro-copy text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
    </section>
  )
}
