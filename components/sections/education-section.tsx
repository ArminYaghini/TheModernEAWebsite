
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { BookCard } from '@/components/ui/book-card'
import { WorkshopGrid } from '@/components/ui/workshop-grid'
import { KnowledgeNetwork } from '@/components/effects/knowledge-network'

import { BookOpen, Users, Calendar, Award } from 'lucide-react'

const workshops = [
  {
    title: 'Modern EA Operating System',
    duration: '2 days',
    level: 'Foundation',
    description: 'Core principles and practices for implementing modern enterprise architecture.',
    topics: ['Federated Governance', 'Continuous Architecture', 'Architecture as Code']
  },
  {
    title: 'Architecture Front Door',
    duration: '1 day',
    level: 'Intermediate',
    description: 'Creating seamless entry points for architectural engagement and decision-making.',
    topics: ['Intake Processes', 'Decision Frameworks', 'Stakeholder Alignment']
  },
  {
    title: 'Minimum Viable Architecture',
    duration: '1 day',
    level: 'Advanced',
    description: 'Identifying and implementing just enough architecture for maximum business value.',
    topics: ['Value-Stream Mapping', 'Risk Assessment', 'Iterative Design']
  },
  {
    title: 'Strategic Architecture',
    duration: '2 days',
    level: 'Executive',
    description: 'Aligning architectural decisions with business strategy and transformation goals.',
    topics: ['Business Alignment', 'Digital Strategy', 'ROI Measurement']
  },
  {
    title: 'Federated EA Implementation',
    duration: '3 days',
    level: 'Professional',
    description: 'Practical implementation of distributed architecture governance models.',
    topics: ['Domain Architecture', 'Guild Formation', 'Toolchain Integration']
  },
  {
    title: 'Architecture as Narrative',
    duration: '1 day',
    level: 'Communication',
    description: 'Storytelling techniques for effective architecture communication and buy-in.',
    topics: ['Visual Storytelling', 'Stakeholder Mapping', 'Change Communication']
  }
]



export function EducationSection() {
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
      className="relative min-h-screen py-20 gradient-knowledge"
      id="education"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.abacus.ai/images/5f890047-f093-49cf-810d-98ee1f706cfc.png"
          alt="Knowledge & Community Network"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Knowledge Network Animation */}
      <KnowledgeNetwork />

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
            <BookOpen className="w-8 h-8 text-purple-400" />
            <span className="micro-copy text-purple-300 uppercase tracking-wider">
              Knowledge & Community
            </span>
          </div>
          
          <div className="p-8 rounded-3xl bg-black/70 backdrop-blur-lg border border-white/20">
            <h2 className="section-header text-white mb-6">
              Master the
              <span className="text-purple-400">
                {' '}Modern EA{' '}
              </span>
              Approach
            </h2>
          </div>
          
          <p className="body-large text-gray-300 max-w-3xl mx-auto">
            Transform your organization with comprehensive education, hands-on workshops, 
            and a supportive community of enterprise architecture practitioners.
          </p>
        </motion.div>



        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Book Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-black/60 backdrop-blur-lg border border-white/20"
          >
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-mint-400" />
              <h3 className="text-2xl font-semibold text-white">The Field Guide</h3>
            </div>
            
            <BookCard
              title="The Modern EA Field Guide"
              subtitle="A Comprehensive Framework for Digital Transformation"
              publishDate="March 2026"
              description="The definitive guide to implementing modern enterprise architecture practices. Learn how to break free from legacy constraints and build architectures that enable true business agility."
              features={[
                '400+ pages of practical guidance',
                'Real-world case studies',
                'Implementation templates',
                'Digital transformation roadmaps'
              ]}
            />
          </motion.div>

          {/* Community Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-black/60 backdrop-blur-lg border border-white/20"
          >
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-semibold text-white">Community Impact</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">Global Reach</h4>
                <p className="text-gray-300 mb-4">
                  Join thousands of enterprise architects worldwide who are transforming 
                  their organizations with TheModernEA framework.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Fortune 500', 'Startups', 'Government', 'Non-profits'].map((type, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">Success Stories</h4>
                <p className="text-gray-300 mb-4">
                  "TheModernEA framework reduced our architecture review cycles from 6 weeks 
                  to 2 days while improving security and compliance."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-mint-500 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Global Tech Leader</div>
                    <div className="text-sm text-gray-400">Chief Enterprise Architect</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Workshops Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-black/60 backdrop-blur-lg border border-white/20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-mint-400" />
            <h3 className="text-2xl font-semibold text-white">Workshop Series</h3>
          </div>
          
          <WorkshopGrid workshops={workshops} />
        </motion.div>
      </motion.div>
    </section>
  )
}
