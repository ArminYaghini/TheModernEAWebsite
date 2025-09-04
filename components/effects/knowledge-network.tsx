
'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Node {
  x: number
  y: number
  radius: number
  color: string
  pulse: number
}

export function KnowledgeNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createNodes = () => {
      const nodeCount = 20
      nodesRef.current = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 3,
        color: ['#8B5CF6', '#10F2C5', '#3B82F6'][Math.floor(Math.random() * 3)],
        pulse: Math.random() * Math.PI * 2
      }))
    }

    const drawNetwork = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update pulse
      nodesRef.current.forEach(node => {
        node.pulse += 0.02
      })

      // Draw connections
      nodesRef.current.forEach((nodeA, indexA) => {
        nodesRef.current.slice(indexA + 1).forEach(nodeB => {
          const dx = nodeA.x - nodeB.x
          const dy = nodeA.y - nodeB.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const alpha = 0.3 * (1 - distance / 200)
            ctx.save()
            ctx.globalAlpha = alpha
            ctx.strokeStyle = '#FFFFFF'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodeA.x, nodeA.y)
            ctx.lineTo(nodeB.x, nodeB.y)
            ctx.stroke()
            ctx.restore()

            // Data flow particles
            if (Math.random() > 0.98) {
              const t = Math.random()
              const particleX = nodeA.x + (nodeB.x - nodeA.x) * t
              const particleY = nodeA.y + (nodeB.y - nodeA.y) * t
              
              ctx.save()
              ctx.globalAlpha = 0.8
              ctx.fillStyle = nodeA.color
              ctx.beginPath()
              ctx.arc(particleX, particleY, 2, 0, Math.PI * 2)
              ctx.fill()
              ctx.shadowBlur = 10
              ctx.shadowColor = nodeA.color
              ctx.fill()
              ctx.restore()
            }
          }
        })
      })

      // Draw nodes
      nodesRef.current.forEach(node => {
        const pulseRadius = node.radius + Math.sin(node.pulse) * 2
        
        ctx.save()
        ctx.globalAlpha = 0.8
        ctx.fillStyle = node.color
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2)
        ctx.fill()
        
        // Glow effect
        ctx.shadowBlur = 20
        ctx.shadowColor = node.color
        ctx.fill()
        
        // Core
        ctx.globalAlpha = 1
        ctx.fillStyle = '#FFFFFF'
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 0.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
    }

    const animate = (time: number) => {
      drawNetwork(time)
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createNodes()
    animate(0)

    const handleResize = () => {
      resizeCanvas()
      createNodes()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 2 }}
    />
  )
}
