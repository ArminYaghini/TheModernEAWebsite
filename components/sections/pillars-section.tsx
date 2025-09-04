
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { PillarCard } from '@/components/ui/pillar-card'
import { ConnectingBridges } from '@/components/effects/connecting-bridges'
import { PillarParticles } from '@/components/effects/pillar-particles'
import { Zap, Link, Shield, Gauge } from 'lucide-react'

const pillars = [
  {
    id: 'agility',
    title: 'Agility',
    icon: Zap,
    color: 'from-yellow-400 to-orange-500',
    particleColor: '#FbbF24',
    description: 'Embed architecture decisions within development sprints. Continuous architecture that evolves with business needs.',
    features: [
      'Architecture as Code',
      'Sprint-embedded decisions', 
      'Real-time compliance checking',
      'Iterative design evolution'
    ],
    delay: 0
  },
  {
    id: 'integration',
    title: 'Integration', 
    icon: Link,
    color: 'from-blue-400 to-cyan-500',
    particleColor: '#06B6D4',
    description: 'Federated governance model that distributes architectural authority while maintaining coherence.',
    features: [
      'Domain-driven architecture',
      'Cross-functional collaboration',
      'Shared capability platforms',
      'API-first design principles'
    ],
    delay: 0.2
  },
  {
    id: 'security',
    title: 'Security',
    icon: Shield, 
    color: 'from-green-400 to-emerald-500',
    particleColor: '#10B981',
    description: 'Security-first design with automated policy enforcement and continuous threat modeling.',
    features: [
      'Zero Trust architecture',
      'Policy as Code enforcement', 
      'Automated threat modeling',
      'Continuous security validation'
    ],
    delay: 0.4
  },
  {
    id: 'velocity',
    title: 'Velocity',
    icon: Gauge,
    color: 'from-red-400 to-pink-500', 
    particleColor: '#EF4444',
    description: 'AI-augmented architecture with automated discovery, analysis, and optimization recommendations.',
    features: [
      'AI-powered system analysis',
      'Automated documentation',
      'Predictive impact modeling',
      'Performance optimization'
    ],
    delay: 0.6
  }
]

export function PillarsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  return (
    <section 
      ref={ref}
      className="relative min-h-screen py-20 gradient-pillars"
      id="pillars"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.abacus.ai/images/988e133c-ba01-4c60-aded-6c27dfdf84f3.png"
          alt="Four Pillars of Modern EA"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Pillar Particles */}
      <PillarParticles />

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm" />
            </div>
            <span className="micro-copy text-red-300 uppercase tracking-wider">
              The Framework
            </span>
          </div>
          
          <h2 className="hero-text text-white mb-6">
            Four Pillars of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
              Modern EA
            </span>
          </h2>
          
          <p className="body-large text-gray-300 max-w-3xl mx-auto">
            Each pillar represents a fundamental shift in how enterprise architecture 
            operates in the modern digital landscape. Together, they create an 
            unstoppable foundation for transformation.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: pillar.delay,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
            >
              <PillarCard
                pillar={pillar}
                isSelected={selectedPillar === pillar.id}
                onClick={() => setSelectedPillar(
                  selectedPillar === pillar.id ? null : pillar.id
                )}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Connecting Bridges */}
        <ConnectingBridges progress={scrollYProgress} />

        {/* Selected Pillar Details */}
        {selectedPillar && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 cinematic-shadow"
          >
            {(() => {
              const pillar = pillars.find(p => p.id === selectedPillar)
              if (!pillar) return null
              
              const Icon = pillar.icon
              return (
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{pillar.title}</h3>
                        <p className="text-gray-400">Core Pillar</p>
                      </div>
                    </div>
                    
                    <p className="body-large text-gray-300 mb-8">{pillar.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pillar.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pillar.color}`} />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative h-64 lg:h-full">
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <Image
                        src="https://cdn.abacus.ai/images/a9cdcd2f-846d-4859-9b3c-4c057424900e.png"
                        alt={`${pillar.title} visualization`}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-20`} />
                    </div>
                  </div>
                </div>
              )
            })()}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
