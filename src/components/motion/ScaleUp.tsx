'use client'

import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

interface ScaleUpProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export default function ScaleUp({ children, delay = 0, duration = 0.7 }: ScaleUpProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9
      }}
      whileInView={{
        opacity: 1,
        scale: 1
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
