
'use client'

import { motion } from 'framer-motion'
import { BookOpen, Calendar, FileText, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BookCardProps {
  title: string
  subtitle: string
  publishDate: string
  description: string
  features: string[]
}

export function BookCard({ title, subtitle, publishDate, description, features }: BookCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-8 rounded-3xl bg-gradient-to-br from-mint-500/10 to-purple-500/10 backdrop-blur-sm border border-mint-400/20 cinematic-shadow"
    >
      {/* Book Cover Mockup */}
      <div className="relative w-48 h-64 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-purple-600 to-mint-500 p-6 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
        <div className="absolute inset-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
          <div className="p-4 h-full flex flex-col justify-between">
            <div>
              <BookOpen className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white font-bold text-lg leading-tight">{title}</h4>
            </div>
            <div className="text-white/80 text-sm font-medium">TheModernEA</div>
          </div>
        </div>
        
        {/* Book spine */}
        <div className="absolute -right-2 top-0 w-4 h-full bg-gradient-to-b from-purple-700 to-mint-600 rounded-r-2xl shadow-lg" />
      </div>

      {/* Book Details */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-mint-300 mb-2">{subtitle}</p>
        
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">Publication: {publishDate}</span>
        </div>
      </div>

      <p className="text-gray-300 mb-6 text-center">{description}</p>

      {/* Features */}
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FileText className="w-5 h-5 text-mint-400" />
            <span className="text-gray-300">{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          className="flex-1 bg-mint-600 hover:bg-mint-700 text-white"
          onClick={() => window.open('mailto:book@modernea.com?subject=Book Pre-order', '_blank')}
        >
          <Award className="w-4 h-4 mr-2" />
          Pre-order Now
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
          onClick={() => window.open('mailto:preview@modernea.com?subject=Sample Chapters', '_blank')}
        >
          Sample Chapters
        </Button>
      </div>
    </motion.div>
  )
}
