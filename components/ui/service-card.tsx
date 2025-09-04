
'use client'

import { motion } from 'framer-motion'
import { LucideIcon, ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Service {
  id: string
  title: string
  icon: LucideIcon
  description: string
  deliverables: string[]
  duration: string
  color: string
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-8 rounded-3xl bg-black/40 backdrop-blur-lg border border-white/20 cinematic-shadow hover:border-orange-400/50 transition-all duration-300"
    >
      {/* Service Icon */}
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Service Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
        <div className="flex items-center gap-2 text-orange-300">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{service.duration}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6">{service.description}</p>

      {/* Deliverables */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-white mb-4">Key Deliverables</h4>
        <div className="space-y-3">
          {service.deliverables.map((deliverable, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
              <span className="text-gray-300 text-sm">{deliverable}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Button
        className="w-full bg-orange-600 hover:bg-orange-700 text-white group"
        onClick={() => window.open(`mailto:services@modernea.com?subject=Service Inquiry: ${service.title}`, '_blank')}
      >
        Learn More
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </motion.div>
  )
}
