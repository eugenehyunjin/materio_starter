'use client'

import Image from 'next/image'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Box, Button, Container, Typography } from '@mui/material'

import { FaApple } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

const mockups = [
  {
    image: '/images/aptree/down/mockup_1.png',
    width: 240,
    offsetY: -50
  },
  {
    image: '/images/aptree/down/mockup_2.png',
    width: 240,
    offsetY: 50
  },
  {
    image: '/images/aptree/down/mockup_3.png',
    width: 240,
    offsetY: -20
  },
  {
    image: '/images/aptree/down/mockup_4.png',
    width: 240,
    offsetY: 60
  },
  {
    image: '/images/aptree/down/mockup_5.png',
    width: 240,
    offsetY: -70
  },
  {
    image: '/images/aptree/down/mockup_6.png',
    width: 240,
    offsetY: 40
  }
]

export default function AptreeAppDownSection() {
  const { scrollYProgress } = useScroll()

  return (
    <Box
      sx={{
        position: 'relative',
        height: '180vh',
        background: 'radial-gradient(circle, rgba(0,168,138,.15) 0%, rgba(0,168,138,.08) 60%, transparent 90%)'
      }}
    >
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        {/* 배경 목업 영역 */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2vw',
            px: 4
          }}
        >
          {mockups.map((mockup, index) => (
            <MockupColumn key={mockup.image} mockup={mockup} index={index} scrollYProgress={scrollYProgress} />
          ))}
        </Box>

        {/* 오버레이 */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(255,255,255,.2) 0%, rgba(255,255,255,.75) 45%, rgba(255,255,255,.88) 100%)'
          }}
        />

        {/* 중앙 컨텐츠 */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.4
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
        >
          <Container
            maxWidth='md'
            sx={{
              position: 'relative',
              zIndex: 10,
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box textAlign='center'>
              <Typography
                sx={{
                  fontSize: {
                    xs: '42px',
                    md: '72px'
                  },
                  fontWeight: 800,
                  lineHeight: 1.2
                }}
              >
                지금 바로
                <br />
                <Box
                  component='span'
                  sx={{
                    background: 'linear-gradient(90deg, #88E267 0%, #00A887 100%)',

                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',

                    display: 'inline-block'
                  }}
                >
                  아파트리
                </Box>
                를 시작해보세요
              </Typography>

              <Typography
                sx={{
                  mt: 4,
                  color: '#111',
                  fontWeight: 700,
                  fontSize: {
                    xs: '18px',
                    md: '26px'
                  }
                }}
              >
                입주민과 관리사무소를 위한
                <br />
                스마트 공동주택 플랫폼
              </Typography>

              <Box
                sx={{
                  mt: 8,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 4,
                  flexWrap: 'wrap'
                }}
              >
                <AppDownloadCard
                  title='아파트리 입주민 앱'
                  icon='/images/aptree/down/user_app.png'
                  qr='/images/aptree/down/qr_resident.png'
                  iosUrl='https://apps.apple.com/kr/app/%EC%95%84%ED%8C%8C%ED%8A%B8%EB%A6%AC/id1510705927'
                  androidUrl='https://play.google.com/store/apps/details?id=kr.co.apatree.app'
                />

                <AppDownloadCard
                  title='아파트리 관리소 앱'
                  icon='/images/aptree/down/manager_app.jpg'
                  qr='/images/aptree/down/qr_admin.png'
                  iosUrl='https://apps.apple.com/kr/app/아파트리-관리소/id1521404914'
                  androidUrl='https://play.google.com/store/apps/details?id=kr.co.apatree.manager'
                />
              </Box>
            </Box>
          </Container>
        </motion.div>
      </Box>
    </Box>
  )
}

function MockupColumn({
  mockup,
  index,
  scrollYProgress
}: {
  mockup: {
    image: string
    width: number
    offsetY: number
  }
  index: number
  scrollYProgress: any
}) {
  const fromTop = index % 2 === 0

  const y = useTransform(
    scrollYProgress,
    [0.65, 0.85],
    [fromTop ? -600 + mockup.offsetY : 600 + mockup.offsetY, mockup.offsetY]
  )

  const opacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1])

  const blur = index === 0 || index === 5 ? 'blur(2px)' : index === 1 || index === 4 ? 'blur(1px)' : 'none'

  return (
    <motion.div
      style={{
        y,
        opacity,
        filter: blur
      }}
    >
      <Box
        sx={{
          width: `${mockup.width}px`
        }}
      >
        <Image
          src={mockup.image}
          alt=''
          width={500}
          height={1200}
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

function AppDownloadCard({
  title,
  icon,
  qr,
  iosUrl,
  androidUrl
}: {
  title: string
  icon: string
  qr: string
  iosUrl: string
  androidUrl: string
}) {
  return (
    <Box
      sx={{
        width: 340,

        p: 3,

        borderRadius: '24px',

        background: '#fff',

        backdropFilter: 'blur(3px)',

        border: '1px solid rgba(255,255,255,.6)',

        boxShadow: '0 15px 40px rgba(0,0,0,.25)'
      }}
    >
      {/* 헤더 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 3
        }}
      >
        <Image
          src={icon}
          alt={title}
          width={56}
          height={56}
          style={{
            borderRadius: '10px',
            border: '1.5px solid #88E267'
          }}
        />

        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 800
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* QR + 다운로드 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <Image src={qr} alt={title} width={110} height={110} />

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5
          }}
        >
          <Button
            component='a'
            href={androidUrl}
            target='_black'
            fullWidth
            startIcon={<IoLogoGooglePlaystore size={22} />}
            sx={{
              py: 1.6,
              px: 1.6,
              borderRadius: '14px',

              background: '#fff',

              color: '#111',

              border: '1px solid #ddd',

              fontWeight: 700,
              transition: 'all .3s ease',

              justifyContent: 'center',
              '&:hover': {
                background: '#fafafa',
                transform: 'translateY(-1px)',
                boxShadow: '0 7px 20px rgba(0,0,0,.18)'
              }
            }}
          >
            <Box
              sx={{
                textAlign: 'left'
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: 1.2
                }}
              >
                Google Play
              </Typography>
            </Box>
          </Button>
          <Button
            component='a'
            href={iosUrl}
            target='_black'
            fullWidth
            startIcon={<FaApple size={22} />}
            sx={{
              py: 1.6,
              px: 1.6,
              borderRadius: '14px',

              background: 'rgba(0,0,0,.38)',
              color: '#fff',

              fontWeight: 700,

              justifyContent: 'center',
              transition: 'all .3s ease',
              textAlign: 'center',

              '&:hover': {
                background: 'rgba(0,0,0,.58)',
                transform: 'translateY(-1px)',
                boxShadow: '0 7px 20px rgba(0,0,0,.18)'
              }
            }}
          >
            <Box
              sx={{
                textAlign: 'center'
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: 1.2
                }}
              >
                App Store
              </Typography>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
