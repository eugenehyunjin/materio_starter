'use client'

import Image from 'next/image'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'

const problems = [
  { image: '/images/aptree/problem_vote.png' },
  { image: '/images/aptree/problem_civil.png' },
  { image: '/images/aptree/problem_bill.png' },
  { image: '/images/aptree/problem_car.png' }
]

export default function AptreeProblemSection() {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  if (isMobile) {
    return <MobileProblemSection />
  }

  return <DesktopProblemSection />
}

function DesktopProblemSection() {
  const { scrollYProgress } = useScroll()

  const problemOpacity = useTransform(scrollYProgress, [0.05, 0.3, 0.6], [1, 0, 0])

  const problemScale = useTransform(scrollYProgress, [0.05, 0.3], [1, 0.7])

  const messageOpacity = useTransform(scrollYProgress, [0.22, 0.3, 0.6], [0, 1, 1])

  const HEADER_HEIGHT = 80

  return (
    <Box
      sx={{
        position: 'relative',
        height: '310vh'
      }}
    >
      <Box
        sx={{
          position: 'sticky',
          top: `${HEADER_HEIGHT}px`,
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',

            width: '1300px',
            height: '900px',

            borderRadius: '50%',

            background: 'radial-gradient(circle, rgba(0,168,138,.15) 0%, rgba(0,168,138,.08) 60%, transparent 90%)',

            filter: 'blur(110px)',

            zIndex: 0
          }}
        />

        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1100px',
            position: 'relative',
            zIndex: 1
          }}
        >
          <motion.div
            style={{
              opacity: problemOpacity,
              scale: problemScale
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: '64px',
                fontWeight: 800,
                mb: 10
              }}
            >
              아직도 이런 방식으로
              <br />
              공동주택을 관리하시나요?
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                gap: 4,
                maxWidth: '1100px',
                mx: 'auto'
              }}
            >
              {problems.map((problem, index) => (
                <ProblemCardDesktop
                  key={problem.image}
                  problem={problem}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </Box>
          </motion.div>

          <motion.div
            style={{
              opacity: messageOpacity
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  fontWeight: 800,
                  lineHeight: 1.3,
                  fontSize: '92px'
                }}
              >
                비케이위너는
                <br />
                이렇게{' '}
                <Box component='span' sx={{ color: '#00A887' }}>
                  해결합니다.
                </Box>
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  )
}

function MobileProblemSection() {
  return (
    <Box
      sx={{
        py: 10
      }}
    >
      <Container maxWidth='sm'>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '26px',
            fontWeight: 800,
            lineHeight: 1.4,
            mb: 6
          }}
        >
          아직도 이런 방식으로
          <br />
          공동주택을 관리하시나요?
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          {problems.map(problem => (
            <Box
              key={problem.image}
              sx={{
                overflow: 'hidden',
                borderRadius: '20px',
                boxShadow: '0 15px 40px rgba(0,0,0,.12)'
              }}
            >
              <Image
                src={problem.image}
                alt=''
                width={700}
                height={500}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </Box>
          ))}
        </Box>

        <Typography
          sx={{
            mt: 8,
            textAlign: 'center',
            fontSize: '34px',
            fontWeight: 800,
            lineHeight: 1.4
          }}
        >
          비케이위너는
          <br />
          이렇게{' '}
          <Box
            component='span'
            sx={{
              color: '#00A887'
            }}
          >
            해결합니다.
          </Box>
        </Typography>
      </Container>
    </Box>
  )
}

function ProblemCardDesktop({
  problem,
  index,
  scrollYProgress
}: {
  problem: {
    image: string
  }
  index: number
  scrollYProgress: any
}) {
  const start = 0.08 + index * 0.04

  const end = 0.32 + index * 0.04

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0])

  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9])

  return (
    <motion.div
      style={{
        opacity,
        scale
      }}
    >
      <Box
        sx={{
          overflow: 'hidden',
          borderRadius: '32px',
          filter: 'grayscale(100%)',
          boxShadow: '0 25px 60px rgba(0,0,0,.12)'
        }}
      >
        <Image
          src={problem.image}
          alt=''
          width={700}
          height={500}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
      </Box>
    </motion.div>
  )
}
