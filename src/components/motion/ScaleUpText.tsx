'use client'

import type { ReactNode } from 'react'

import { Typography } from '@mui/material'
import { motion } from 'framer-motion'

interface ScaleUpTextProps {
  children: ReactNode
  delay?: number
  color?: string
  fontSize?: {
    xs?: string
    md?: string
    lg?: string
  }
}

export default function ScaleUpText({
  children,
  delay = 0,
  color = '#00A887',
  fontSize = {
    xs: '28px',
    md: '38px',
    lg: '54px'
  }
}: ScaleUpTextProps) {
  return (
    <motion.span
      initial={{
        opacity: 0,
        scale: 0.7
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      viewport={{
        once: true,
        amount: 0.8
      }}
      transition={{
        duration: 0.5,
        delay
      }}
      style={{
        display: 'inline-block'
      }}
    >
      <Typography
        component='span'
        sx={{
          color,
          fontSize,
          fontWeight: 700
        }}
      >
        {children}
      </Typography>
    </motion.span>
  )
}
