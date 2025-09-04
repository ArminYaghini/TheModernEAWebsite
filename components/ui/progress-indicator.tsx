
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ProgressIndicatorProps {
  progress: number
  label: string
  color?: string
}

export function ProgressIndicator({ 
  progress, 
  label, 
  color = 'from-teal-500 to-blue-500' 
}: ProgressIndicatorProps) {
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayProgress(progress)
    }, 500)

    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div className="flex items-center gap-4">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">{label}</span>
          <span className="text-sm font-medium text-white">{displayProgress}%</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${color} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${displayProgress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  )
}
