
'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react'

const contactDetails = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@modernea.com',
    description: 'General inquiries and partnership opportunities'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    description: 'Direct line for urgent matters'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Global Remote',
    description: 'Serving organizations worldwide'
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: '< 24 hours',
    description: 'We respond to all inquiries quickly'
  }
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-white mb-2">Get in Touch</h3>
        <p className="text-gray-400">
          Ready to transform your enterprise architecture? We're here to help guide your journey.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-black/30 hover:bg-black/40 transition-colors"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium">{detail.title}</h4>
                <p className="text-orange-300 font-medium">{detail.value}</p>
                <p className="text-gray-400 text-sm mt-1">{detail.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Additional Info */}
      <div className="p-6 rounded-2xl bg-black/40 border border-orange-400/30">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-6 h-6 text-orange-400" />
          <h4 className="text-white font-semibold">Global Expertise</h4>
        </div>
        <p className="text-gray-300 text-sm">
          Our team has successfully transformed enterprise architectures across 6 continents, 
          working with organizations from Fortune 500 companies to innovative startups.
        </p>
      </div>
    </div>
  )
}
