
'use client'

import { motion } from 'framer-motion'
import { Clock, BookOpen, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Workshop {
  title: string
  duration: string
  level: string
  description: string
  topics: string[]
}

interface WorkshopGridProps {
  workshops: Workshop[]
}

const levelColors = {
  'Foundation': 'from-green-400 to-emerald-500',
  'Intermediate': 'from-blue-400 to-cyan-500',
  'Advanced': 'from-purple-400 to-indigo-500',
  'Executive': 'from-red-400 to-pink-500',
  'Professional': 'from-orange-400 to-yellow-500',
  'Communication': 'from-teal-400 to-green-500'
}

export function WorkshopGrid({ workshops }: WorkshopGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {workshops.map((workshop, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 cinematic-shadow hover:border-white/20 transition-all duration-300"
        >
          {/* Level Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${levelColors[workshop.level as keyof typeof levelColors]} text-white text-xs font-medium`}>
              {workshop.level}
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              {workshop.duration}
            </div>
          </div>

          {/* Title */}
          <h4 className="text-xl font-semibold text-white mb-3 line-clamp-2">
            {workshop.title}
          </h4>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            {workshop.description}
          </p>

          {/* Topics */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <BookOpen className="w-4 h-4" />
              <span>Key Topics:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {workshop.topics.slice(0, 3).map((topic, topicIndex) => (
                <span
                  key={topicIndex}
                  className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full"
                >
                  {topic}
                </span>
              ))}
              {workshop.topics.length > 3 && (
                <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded-full">
                  +{workshop.topics.length - 3} more
                </span>
              )}
            </div>
          </div>



          {/* CTA */}
          <Button
            size="sm"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => window.open(`mailto:workshops@modernea.com?subject=Workshop Inquiry: ${workshop.title}`, '_blank')}
          >
            <Users className="w-4 h-4 mr-2" />
            Enroll Now
          </Button>
        </motion.div>
      ))}
    </div>
  )
}
