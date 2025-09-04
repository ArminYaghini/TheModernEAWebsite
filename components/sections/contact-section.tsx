
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ContactForm } from '@/components/ui/contact-form'
import { PortalBreathing } from '@/components/effects/portal-breathing'
import { ContactInfo } from '@/components/ui/contact-info'

import { Mail, MapPin, Phone, Calendar } from 'lucide-react'

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1])

  return (
    <section 
      ref={ref}
      className="relative min-h-screen py-20 gradient-partnership"
      id="contact"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.abacus.ai/images/b8af5640-b28e-47a9-a5c9-6f45da24453b.png"
          alt="Partnership Gateway"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
      </div>

      {/* Portal Breathing Animation */}
      <PortalBreathing />

      <motion.div 
        style={{ opacity, scale }}
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
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <span className="micro-copy text-orange-300 uppercase tracking-wider">
              Partnership Gateway
            </span>
          </div>
          
          <div className="p-8 rounded-3xl bg-black/70 backdrop-blur-lg border border-white/20">
            <h2 className="hero-text text-white mb-6">
              Let's Build the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Future Together
              </span>
            </h2>
          </div>
          
          <p className="body-large text-gray-300 max-w-3xl mx-auto">
            Ready to transform your enterprise architecture? Connect with our team 
            to explore how TheModernEA framework can accelerate your digital transformation journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 cinematic-shadow">
              <h3 className="text-2xl font-semibold text-white mb-2">Start Your Journey</h3>
              <p className="text-gray-400 mb-8">
                Tell us about your transformation goals and we'll get back to you within 24 hours.
              </p>
              
              <ContactForm 
                onSubmit={setFormSubmitted}
                submitted={formSubmitted}
              />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ContactInfo />
            
            {/* Quick Actions */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-400/20">
              <h4 className="text-xl font-semibold text-white mb-4">Quick Connect</h4>
              
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://calendly.com/modernea', '_blank')}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left"
                >
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Book a Strategy Call</div>
                    <div className="text-sm text-gray-400">30-minute consultation</div>
                  </div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('mailto:hello@modernea.com?subject=Partnership Inquiry', '_blank')}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left"
                >
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email Us Directly</div>
                    <div className="text-sm text-gray-400">hello@modernea.com</div>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>



        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center pt-20 border-t border-white/10"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">TheModernEA</h3>
            <p className="text-gray-400">Transforming Enterprise Architecture for the Digital Age</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-gray-500">
            <span>© 2025 TheModernEA Framework. All rights reserved.</span>
            <div className="flex gap-6">
              <button 
                onClick={() => window.open('mailto:privacy@modernea.com', '_blank')}
                className="hover:text-gray-300 transition-colors"
              >
                Privacy
              </button>
              <button 
                onClick={() => window.open('mailto:terms@modernea.com', '_blank')}
                className="hover:text-gray-300 transition-colors"
              >
                Terms
              </button>
              <button 
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-gray-300 transition-colors"
              >
                Back to Top
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
