import { Box, Container, Typography } from '@mui/material'

import FadeUp from '@/components/motion/FadeUp'
import { notoSerifKr } from '@/styles/fonts'

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        backgroundColor: '#fff'
      }}
    >
      {/* Background Video */}
      <Box
        component='video'
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        poster='/images/home/section/hero_poster.jpg'
        disablePictureInPicture
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src='/videos/main_visual.mp4' type='video/mp4' />
      </Box>

      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.35))',
          zIndex: 1
        }}
      />

      {/* Content */}
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          maxWidth: '1300px'
        }}
      >
        <Box
          sx={{
            maxWidth: 900,
            mt: 'auto',
            textAlign: 'right',
            mb: 30
          }}
        >
          <FadeUp>
            <Typography
              component='div'
              sx={{
                lineHeight: 1.3,
                textAlign: 'right',
                textShadow: '0 4px 20px rgba(0,0,0,0.35)'
              }}
            >
              {/* 첫 번째 줄 */}
              <Box
                className={notoSerifKr.className}
                component='div'
                sx={{
                  fontWeight: 500,
                  letterSpacing: '-0.04em'
                }}
              >
                <Box
                  component='span'
                  sx={{
                    fontSize: {
                      xs: '40px',
                      md: '40px',
                      lg: '48px'
                    }
                  }}
                >
                  비케이위너
                </Box>

                <Box
                  component='span'
                  sx={{
                    fontSize: {
                      xs: '40px',
                      md: '40px',
                      lg: '40px'
                    },
                    ml: 0.5
                  }}
                >
                  는
                </Box>
              </Box>

              {/* 두 번째 줄 */}
              <Box
                className={notoSerifKr.className}
                component='div'
                sx={{
                  fontWeight: 500,
                  fontSize: {
                    xs: '40px',
                    md: '40px',
                    lg: '40px'
                  },
                  mt: 1,
                  letterSpacing: '-0.03em'
                }}
              >
                더 나은 주거 문화를 생각합니다
              </Box>
            </Typography>
          </FadeUp>
        </Box>
      </Container>
    </Box>
  )
}
