'use client'

import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

interface SlideRightProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export default function SlideRight({ children, delay = 0, duration = 0.8 }: SlideRightProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -80
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{
        once: true,
        amount: 0.2
      }}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
}
