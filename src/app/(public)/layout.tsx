'use client'

import type { ReactNode } from 'react'

import { ThemeProvider, CssBaseline } from '@mui/material'

import { publicTheme } from '@/styles/publicTheme'

import PublicHeader from '@/components/layout/home/PublicHeader'
import PublicFooter from '@/components/layout/home/PublicFooter'

type Props = {
  children: ReactNode
}

export default function PublicLayout({ children }: Props) {
  return (
    <ThemeProvider theme={publicTheme}>
      <CssBaseline />

      <PublicHeader />

      <main>{children}</main>

      <PublicFooter />
    </ThemeProvider>
  )
}
