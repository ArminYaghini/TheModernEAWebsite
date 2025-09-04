
'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface CounterAnimationProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
}

export function CounterAnimation({ 
  end, 
  suffix = '', 
  duration = 2, 
  className = '' 
}: CounterAnimationProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      const controls = animate(count, end, {
        duration,
        ease: "easeOut"
      })
      return controls.stop
    }
  }, [count, end, duration, inView])

  return (
    <motion.div ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.div>
  )
}
