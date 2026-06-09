'use client'

import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { Box, Container, Typography } from '@mui/material'

const certificates = [
  '/images/company/certification_1.jpg',
  '/images/company/certification_2.jpg',
  '/images/company/certification_3.jpg',
  '/images/company/certification_4.jpg',
  '/images/company/certification_5.jpg',
  '/images/company/certification_6.jpg',
  '/images/company/certification_7.jpg',
  '/images/company/certification_1.jpg',
  '/images/company/certification_2.jpg',
  '/images/company/certification_3.jpg',
  '/images/company/certification_4.jpg',
  '/images/company/certification_5.jpg',
  '/images/company/certification_6.jpg',
  '/images/company/certification_7.jpg',
  '/images/company/certification_1.jpg',
  '/images/company/certification_2.jpg',
  '/images/company/certification_3.jpg',
  '/images/company/certification_4.jpg',
  '/images/company/certification_5.jpg',
  '/images/company/certification_6.jpg',
  '/images/company/certification_7.jpg'
]

const CARD_WIDTH = 350
const CARD_HEIGHT = 510
const GAP = 50
const STEP = CARD_WIDTH + GAP

export default function CompanyCertificationSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === certificates.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      sx={{
        position: 'relative',
        py: 24,
        overflow: 'hidden'
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '58%',

          transform: 'translate(-50%, -50%)',

          width: '1000px',
          height: '1000px',

          borderRadius: '50%',

          background: 'radial-gradient(circle, rgba(0,168,138,.18) 0%, rgba(0,168,138,.08) 50%, transparent 80%)',

          filter: 'blur(120px)',

          zIndex: 0
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1600px'
        }}
      >
        {/* TITLE */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 6
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '38px',
                md: '52px'
              },

              fontWeight: 700,
              mb: 3
            }}
          >
            지속적인 연구와 기술 개발의 성과
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: '18px',
                md: '24px'
              },

              color: '#111',

              lineHeight: 1.5,

              maxWidth: '900px',
              mx: 'auto'
            }}
          >
            비케이위너는 공동주택 생활 플랫폼 분야의
            <br />
            지속적인 연구개발과 기술 혁신을 통해 차별화된 경쟁력을 확보하고 있습니다.
          </Typography>
        </Box>
      </Container>

      {/* Certification Showcase */}
      <Box
        sx={{
          position: 'relative',
          height: '700px'
        }}
      >
        {certificates.map((image, index) => {
          let diff = index - current

          if (diff > certificates.length / 2) {
            diff -= certificates.length
          }

          if (diff < -certificates.length / 2) {
            diff += certificates.length
          }

          const distance = Math.abs(diff)

          const x = diff * STEP

          const scale = Math.max(1 - distance * 0.12, 0.72)

          const opacity = Math.max(1 - distance * 0.18, 0.1)

          const blur = Math.min(distance * 1.5, 6)

          const zIndex = 100 - distance

          return (
            <Box
              key={image}
              sx={{
                position: 'absolute',

                left: '50%',
                top: '50%',

                transform: 'translate(-50%, -50%)',

                width: CARD_WIDTH,
                height: CARD_HEIGHT
              }}
            >
              <motion.img
                src={image}
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
      </Box>
    </Box>
  )
}
