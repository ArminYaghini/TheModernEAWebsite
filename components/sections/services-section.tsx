
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ServiceCard } from '@/components/ui/service-card'
import { ProcessTimeline } from '@/components/ui/process-timeline'
import { ConsultationPortal } from '@/components/effects/consultation-portal'
import { Button } from '@/components/ui/button'
import { ArrowRight, Briefcase, Users2, Target, Zap } from 'lucide-react'

const services = [
  {
    id: 'assessment',
    title: 'EA Maturity Assessment',
    icon: Target,
    description: 'Comprehensive evaluation of your current enterprise architecture capabilities and transformation readiness.',
    deliverables: ['Current state analysis', 'Capability gap assessment', 'Transformation roadmap', 'ROI projections'],
    duration: '2-4 weeks',
    color: 'from-orange-400 to-red-500'
  },
  {
    id: 'transformation',
    title: 'Digital Transformation',
    icon: Zap,
    description: 'End-to-end transformation services implementing TheModernEA framework across your organization.',
    deliverables: ['Framework implementation', 'Team training', 'Process optimization', 'Governance setup'],
    duration: '3-6 months',
    color: 'from-red-400 to-pink-500'
  },
  {
    id: 'coaching',
    title: 'Executive Coaching',
    icon: Users2,
    description: 'Strategic guidance for C-level executives on architecture-driven business transformation.',
    deliverables: ['Strategic alignment', 'Leadership coaching', 'Decision frameworks', 'Change management'],
    duration: '6-12 months',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    id: 'advisory',
    title: 'Architecture Advisory',
    icon: Briefcase,
    description: 'Ongoing advisory services to ensure sustainable implementation and continuous improvement.',
    deliverables: ['Monthly reviews', 'Architecture governance', 'Team mentoring', 'Best practice updates'],
    duration: 'Ongoing',
    color: 'from-blue-400 to-cyan-500'
  }
]

const processSteps = [
  {
    title: 'Discovery',
    description: 'Deep dive into your current architecture landscape and business objectives.',
    duration: '1-2 weeks'
  },
  {
    title: 'Strategy',
    description: 'Develop a tailored implementation strategy aligned with your transformation goals.',
    duration: '1 week'
  },
  {
    title: 'Implementation',
    description: 'Execute the transformation plan with hands-on support and continuous guidance.',
    duration: '3-6 months'
  },
  {
    title: 'Optimization',
    description: 'Continuous improvement and optimization of your new architecture capabilities.',
    duration: 'Ongoing'
  }
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], ['30px', '-30px'])

  return (
    <section 
      ref={ref}
      className="relative min-h-screen py-20 gradient-partnership"
      id="services"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.abacus.ai/images/7f117490-4a04-4796-b4c0-3d728b8a7b82.png"
          alt="Partnership Gateway"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Consultation Portal Effect */}
      <ConsultationPortal />

      <motion.div 
        style={{ opacity, y }}
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
            <Briefcase className="w-8 h-8 text-orange-400" />
            <span className="micro-copy text-orange-300 uppercase tracking-wider">
              Professional Services
            </span>
          </div>
          
          <div className="p-8 rounded-3xl bg-black/70 backdrop-blur-lg border border-white/20">
            <h2 className="section-header text-white mb-6">
              Transform Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                {' '}Organization{' '}
              </span>
              Today
            </h2>
          </div>
          
          <p className="body-large text-gray-300 max-w-3xl mx-auto">
            Partner with us to implement TheModernEA framework and accelerate 
            your digital transformation journey with expert guidance and proven methodologies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12 p-8 rounded-3xl bg-black/60 backdrop-blur-lg border border-white/20">
            <h3 className="text-3xl font-semibold text-white mb-4">Our Proven Process</h3>
            <p className="body-large text-gray-300 max-w-2xl mx-auto">
              A structured approach that ensures successful transformation outcomes 
              with measurable business value at every stage.
            </p>
          </div>
          
          <ProcessTimeline steps={processSteps} />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-3xl bg-black/70 backdrop-blur-lg border border-orange-400/30 cinematic-shadow"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Begin Your Transformation?
            </h3>
            
            <p className="body-large text-gray-300 mb-8">
              Schedule a consultation to discuss how TheModernEA framework 
              can accelerate your organization's digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4"
                onClick={() => window.open('mailto:info@modernea.com?subject=Service Inquiry', '_blank')}
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
