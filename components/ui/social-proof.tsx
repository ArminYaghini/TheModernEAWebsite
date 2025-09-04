
'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Building, Users } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Chief Enterprise Architect',
    company: 'Global Financial Corp',
    content: 'TheModernEA framework transformed our architecture practice from a bottleneck into an innovation accelerator.',
    rating: 5,
    industry: 'Financial Services'
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO',
    company: 'TechScale Solutions',
    content: 'The federated governance model reduced our review cycles by 80% while improving security and compliance.',
    rating: 5,
    industry: 'Technology'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Head of Digital Transformation',
    company: 'MedTech Innovations',
    content: 'Finally, an EA approach that works at the speed of business. Our teams love the embedded architecture model.',
    rating: 5,
    industry: 'Healthcare'
  }
]

const metrics = [
  { label: 'Organizations Served', value: '150+', icon: Building },
  { label: 'Professionals Trained', value: '2500+', icon: Users },
  { label: 'Success Rate', value: '95%', icon: Star },
  { label: 'Countries', value: '25+', icon: Building }
]

export function SocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      {/* Testimonials */}
      <div>
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          Trusted by Industry Leaders
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 cinematic-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="mb-4">
                <Quote className="w-8 h-8 text-orange-400 mb-2" />
                <p className="text-gray-300 italic">{testimonial.content}</p>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <div className="font-medium text-white">{testimonial.name}</div>
                <div className="text-sm text-orange-300">{testimonial.role}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
                <div className="text-xs text-gray-500 mt-1">{testimonial.industry}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <Icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
