'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { Box, Container, Typography } from '@mui/material'

export default function CompanyHeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',

        pt: {
          xs: 15,
          md: 25
        }
      }}
    >
      {/* Green Glow */}
      <motion.div
        initial={{
          scale: 0,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 1.6,
          ease: [0.22, 0.61, 0.36, 1]
        }}
        style={{
          position: 'absolute',
          left: '100px',
          top: '160px',
          zIndex: 0
        }}
      >
        <Box
          sx={{
            width: '480px',
            height: '480px',

            borderRadius: '50%',

            background: 'radial-gradient(circle, rgba(205,240,225,.9) 30%, rgba(205,240,225,.6) 80%, transparent 90%)',

            filter: 'blur(60px)'
          }}
        />
      </motion.div>

      {/* Blue Glow */}
      <motion.div
        initial={{
          scale: 0,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 1.8,
          delay: 0.2,
          ease: [0.22, 0.61, 0.36, 1]
        }}
        style={{
          position: 'absolute',
          right: '250px',
          top: '300px',
          zIndex: 0
        }}
      >
        <Box
          sx={{
            width: '420px',
            height: '420px',

            borderRadius: '50%',

            background: 'radial-gradient(circle, rgba(200,224,251,.9) 30%, rgba(200,224,251,.5) 60%, transparent 80%)',

            filter: 'blur(100px)'
          }}
        />
      </motion.div>

      {/* Content */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1300px',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'inline-block',
            mb: 8
          }}
        >
          {/* Highlight Background */}
          <motion.div
            initial={{
              width: 0
            }}
            animate={{
              width: '100%'
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 0.61, 0.36, 1]
            }}
            style={{
              position: 'absolute',
              left: 0,
              bottom: '12px',

              height: '38px',

              background: 'linear-gradient(90deg, rgba(0, 227, 182, 0.8) 0%, rgba(142, 255, 101, 0.5) 100%)',

              zIndex: 0
            }}
          />
          <Typography
            sx={{
              position: 'relative',
              zIndex: 1,

              fontSize: {
                xs: '44px',
                md: '72px'
              },

              fontWeight: 800,
              color: '#000',

              lineHeight: 1.1
            }}
          >
            Why BK Winner?
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: {
              xs: '24px',
              md: '32px'
            },
            lineHeight: 1.9,
            color: '#222',
            fontWeight: 500
          }}
        >
          비케이위너는 소비자 중심의{' '}
          <Box component='span' sx={{ color: '#00A887', fontWeight: 700 }}>
            새로운 주거문화 서비스
          </Box>
          를 생각합니다.
          <br />
          우리는 기술보다{' '}
          <Box component='span' sx={{ color: '#00A887', fontWeight: 700 }}>
            사람
          </Box>
          을 먼저 생각합니다.
          <br />
          비케이위너는 소비자의{' '}
          <Box component='span' sx={{ color: '#00A887', fontWeight: 700 }}>
            행동
          </Box>
          과{' '}
          <Box component='span' sx={{ color: '#00A887', fontWeight: 700 }}>
            경험
          </Box>
          을 연구하며,
          <br />
          공동주택 생활을{' '}
          <Box component='span' sx={{ color: '#00A887', fontWeight: 700 }}>
            더 편리하게
          </Box>{' '}
          만드는 서비스를 만듭니다.
        </Typography>
      </Container>

      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1700px',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Box
          sx={{
            mt: 6,
            position: 'relative',
            minHeight: '640px'
          }}
        >
          {/* Left Image */}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: 0
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                filter: 'blur(35px)',
                scale: 1.12
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
                scale: 1
              }}
              transition={{
                duration: 2.2,
                delay: 0.8,
                ease: [0.22, 0.61, 0.36, 1]
              }}
              style={{
                position: 'absolute',
                left: 0,
                top: 0
              }}
            >
              <Image src='/images/company/sangseang_bg.png' alt='상생' width={840} height={640} />
            </motion.div>
          </Box>

          {/* Center Text */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              pointerEvents: 'none'
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 1,
                delay: 1.3
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',

                  fontSize: {
                    xs: '44px',
                    md: '64px'
                  },

                  fontWeight: 800,
                  color: '#000',
                  lineHeight: 1.3
                }}
              >
                비케이위너는 고객과 함께
                <br />
                상생하는 주거 문화를 만들어갑니다.
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
