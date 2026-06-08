'use client'

import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { Box, Container, Typography } from '@mui/material'

import { FadeUp, ScaleUpText } from '@/components/motion'

const featureImages = [
  '/images/home/features/feature1.png',
  '/images/home/features/feature2.png',
  '/images/home/features/feature3.png',
  '/images/home/features/feature4.png',
  '/images/home/features/feature5.png',
  '/images/home/features/feature6.png',
  '/images/home/features/feature7.png',
  '/images/home/features/feature8.png',
  '/images/home/features/feature9.png',
  '/images/home/features/feature10.png',
  '/images/home/features/feature11.png',
  '/images/home/features/feature12.png',
  '/images/home/features/feature13.png',
  '/images/home/features/feature14.png',
  '/images/home/features/feature15.png',
  '/images/home/features/feature16.png',
  '/images/home/features/feature17.png',
  '/images/home/features/feature18.png',
  '/images/home/features/feature19.png',
  '/images/home/features/feature20.png',
  '/images/home/features/feature21.png',
  '/images/home/features/feature22.png',
  '/images/home/features/feature23.png'
]

const CARD_WIDTH = 277
const CARD_HEIGHT = 600
const GAP = 20
const STEP = CARD_WIDTH + GAP

export default function FeatureShowcaseSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === featureImages.length - 1 ? 0 : prev + 1))
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      sx={{
        position: 'relative',
        height: '1100px',
        overflow: 'hidden'
      }}
    >
      {/* Glow */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '540px',

          transform: 'translate(-50%, -50%)',

          width: '1500px',
          height: '700px',

          borderRadius: '50%',

          background: 'radial-gradient(circle, rgba(173,255,47,.35) 0%, rgba(34,197,94,.18) 45%, transparent 75%)',

          filter: 'blur(120px)',

          zIndex: 0
        }}
      />

      {/* Title */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1300px',
          position: 'relative',
          zIndex: 10
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mb: 20
          }}
        >
          <FadeUp>
            <Typography
              sx={{
                fontSize: {
                  xs: '34px',
                  md: '52px'
                },
                fontWeight: 700,
                color: '#111',
                lineHeight: 1.4
              }}
            >
              공동 주택 생활의 <ScaleUpText delay={0.5}>모든 경험</ScaleUpText>을 플랫폼으로{' '}
              <ScaleUpText delay={0.7}>연결</ScaleUpText> 합니다.
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '34px',
                  md: '36px'
                },
                fontWeight: 500,
                color: '#111',
                lineHeight: 1.4
              }}
            >
              비케이위너의 스마트 플랫폼은 입주민과 관리사무소 모두에게 새로운 경험을 제공합니다.
            </Typography>
          </FadeUp>
        </Box>
      </Container>

      {/* Carousel */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, -50%)',

          width: '100%',
          height: CARD_HEIGHT,

          zIndex: 1
        }}
      >
        {featureImages.map((image, index) => {
          let diff = index - current

          if (diff > featureImages.length / 2) {
            diff -= featureImages.length
          }

          if (diff < -featureImages.length / 2) {
            diff += featureImages.length
          }

          const x = diff * STEP
          const distance = Math.abs(diff)

          const blur = Math.min(distance * 0.8, 4)

          const opacity = Math.max(1 - distance * 0.18, 0.1)

          const scale = Math.max(1 - distance * 0.05, 0.75)

          const zIndex = 100 - distance

          return (
            <Box
              key={image}
              sx={{
                position: 'absolute',

                left: '50%',
                top: '540px',

                transform: 'translate(-50%, -50%)',

                width: `${CARD_WIDTH}px`,
                height: `${CARD_HEIGHT}px`
              }}
            >
              <motion.img
                src={image}
                alt='feature'
                animate={{
                  x,
                  scale,
                  opacity,
                  boxShadow:
                    distance === 0
                      ? '0px 30px 80px rgba(0,0,0,.32)'
                      : `0 10px ${Math.max(20 - distance * 2, 8)}px rgba(0,0,0,.08)`
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
                style={{
                  width: '100%',
                  height: '100%',

                  objectFit: 'cover',

                  borderRadius: '24px',

                  filter: `blur(${blur}px)`,

                  zIndex
                }}
              />
            </Box>
          )
        })}
        {/* Phone Background */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: '90%',

            transform: 'translate(-50%, -50%)',

            width: `${CARD_WIDTH}px`,
            height: `${CARD_HEIGHT}px`,

            backgroundColor: '#fff',

            borderRadius: '28px',

            zIndex: -1
          }}
        />

        {/* Phone Mockup */}
        <Box
          component='img'
          src='/images/home/features/mockup_phone2.png'
          alt='phone'
          sx={{
            position: 'absolute',
            left: '50%',
            top: '90%',

            transform: 'translate(-50%, -50%)',

            height: {
              xs: '560px',
              md: '618px'
            },

            zIndex: 25,

            pointerEvents: 'none'
          }}
        />
      </Box>
    </Box>
  )
}
