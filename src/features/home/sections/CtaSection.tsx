'use client'

import { useRef } from 'react'

import Link from 'next/link'

import { Box, Container, Stack, Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'

import GlassButton from '@/components/common/button/GlassButton'
import FadeUp from '@/components/motion/FadeUp'

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: {
          xs: 12,
          md: 20
        },
        color: '#fff'
      }}
    >
      {/* Background Parallax */}
      <motion.div
        style={{
          y,
          position: 'absolute',
          inset: '-50px 0',
          zIndex: 0
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '130%',

            backgroundImage: "url('/images/home/section/cta_bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',

            backgroundRepeat: 'no-repeat'
          }}
        />
      </motion.div>

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.08)',
          zIndex: 1
        }}
      />

      {/* Content */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1300px',
          position: 'relative',
          zIndex: 2
        }}
      >
        <FadeUp>
          <Stack spacing={4} alignItems='center'>
            <Typography
              variant='h3'
              sx={{
                fontWeight: 700,
                lineHeight: 1.5,
                fontSize: {
                  xs: '28px',
                  md: '36px',
                  lg: '40px'
                }
              }}
            >
              공동주택의{' '}
              <Box component='span' sx={{ color: '#6BE39B' }}>
                디지털 혁신
              </Box>
              을 시작하세요.
            </Typography>

            <Stack
              direction={{
                xs: 'column',
                sm: 'row'
              }}
              spacing={2}
            >
              <Link
                href='/contact'
                style={{
                  textDecoration: 'none'
                }}
              >
                <GlassButton sx={{ color: '#fff' }}>문의하기</GlassButton>
              </Link>
              <Link
                href='/files/bkwinner_introduction.pdf'
                download
                target='_blank'
                style={{
                  textDecoration: 'none'
                }}
              >
                <GlassButton sx={{ color: '#fff' }}>서비스 소개서 다운로드</GlassButton>
              </Link>
            </Stack>
          </Stack>
        </FadeUp>
      </Container>
    </Box>
  )
}
