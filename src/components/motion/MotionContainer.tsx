'use client'

import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

interface MotionContainerProps {
  children: ReactNode
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function MotionContainer({ children }: MotionContainerProps) {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='visible'
      viewport={{
        once: true,
        amount: 0.1
      }}
    >
      {children}
    </motion.div>
  )
}
