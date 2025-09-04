
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckCircle, Send, User, Mail, Building, MessageSquare } from 'lucide-react'

interface ContactFormProps {
  onSubmit: (submitted: boolean) => void
  submitted: boolean
}

export function ContactForm({ onSubmit, submitted }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    interest: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      onSubmit(true)
      
      // Reset form after success animation
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          message: '',
          interest: ''
        })
      }, 2000)
    }, 1000)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center p-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="w-8 h-8 text-white" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-300">
          Thank you for your interest. We'll get back to you within 24 hours.
        </p>
        
        {/* Celebration Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full"
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{
              scale: [0, 1, 0],
              x: Math.cos((i / 8) * Math.PI * 2) * 100,
              y: Math.sin((i / 8) * Math.PI * 2) * 100,
            }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Name Field */}
        <div className="relative">
          <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="pl-12 bg-black/30 border-white/20 text-white placeholder:text-gray-400"
            required
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="pl-12 bg-black/30 border-white/20 text-white placeholder:text-gray-400"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Company Field */}
        <div className="relative">
          <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Company"
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            className="pl-12 bg-black/30 border-white/20 text-white placeholder:text-gray-400"
            required
          />
        </div>

        {/* Role Field */}
        <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
          <SelectTrigger className="bg-black/30 border-white/20 text-white">
            <SelectValue placeholder="Your Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ceo">CEO/CTO</SelectItem>
            <SelectItem value="architect">Enterprise Architect</SelectItem>
            <SelectItem value="manager">IT Manager</SelectItem>
            <SelectItem value="director">Director</SelectItem>
            <SelectItem value="consultant">Consultant</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Interest */}
      <Select value={formData.interest} onValueChange={(value) => setFormData(prev => ({ ...prev, interest: value }))}>
        <SelectTrigger className="bg-black/30 border-white/20 text-white">
          <SelectValue placeholder="Primary Interest" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="assessment">EA Maturity Assessment</SelectItem>
          <SelectItem value="transformation">Digital Transformation</SelectItem>
          <SelectItem value="coaching">Executive Coaching</SelectItem>
          <SelectItem value="advisory">Architecture Advisory</SelectItem>
          <SelectItem value="workshops">Workshops</SelectItem>
          <SelectItem value="book">Book Information</SelectItem>
        </SelectContent>
      </Select>

      {/* Message Field */}
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <Textarea
          placeholder="Tell us about your transformation goals..."
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="pl-12 min-h-[120px] bg-black/30 border-white/20 text-white placeholder:text-gray-400"
          required
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 group"
      >
        {isSubmitting ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          />
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>
    </form>
  )
}
