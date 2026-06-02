'use client'

import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export default function FadeIn({ children, delay = 0, duration = 0.8 }: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      viewport={{
        once: true,
        amount: 0.2
      }}
      transition={{
        duration,
        delay
      }}
    >
      {children}
    </motion.div>
  )
}
