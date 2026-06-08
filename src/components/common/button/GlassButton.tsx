'use client'

import type { ElementType } from 'react'

import type { ButtonProps } from '@mui/material'
import { Button } from '@mui/material'

type Props<C extends ElementType = 'button'> = ButtonProps<C> & {
  blur?: number
}

export default function GlassButton({ children, blur = 8, sx, ...props }: Props) {
  return (
    <Button
      variant='outlined'
      {...props}
      sx={{
        minWidth: 150,
        maxWidth: 250,
        height: 44,
        px: 3,
        borderRadius: '999px',
        color: '#111',

        border: '1px solid rgba(255,255,255,0.65)',

        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,

        boxShadow: `
          inset -20px 0 30px rgba(255,255,255,0.28)
        `,

        textTransform: 'none',

        fontSize: '0.95rem',
        fontWeight: 500,
        letterSpacing: '-0.02em',

        transition: 'all 0.3s ease',

        '&:hover': {
          border: '1px solid rgba(255,255,255,0.65)',

          boxShadow: `
            inset 20px 0 50px rgba(255,255,255,0.45)
          `
        },

        ...sx
      }}
    >
      {children}
    </Button>
  )
}
