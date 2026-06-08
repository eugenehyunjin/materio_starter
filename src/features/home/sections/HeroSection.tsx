import { Box, Container, Typography } from '@mui/material'

import { FadeUp, ScaleUpText } from '@/components/motion/index'

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        py: {
          xs: 4,
          md: 0
        }
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1800px'
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: {
              xs: 500,
              md: 750
            },
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.28)'
          }}
        >
          {/* Video */}
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
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          >
            <source src='/videos/main_visual.mp4' type='video/mp4' />
          </Box>

          {/* Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 100%)'
            }}
          />

          {/* Text Card */}
          <Box
            sx={{
              position: 'absolute',
              right: {
                xs: 20,
                md: 50
              },
              top: '60%',
              transform: 'translateY(-50%)',
              maxWidth: {
                xs: 'calc(100% - 40px)',
                md: 600
              },
              p: {
                xs: 3,
                md: 5
              }
            }}
          >
            <FadeUp>
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 700,
                  lineHeight: 1.4,
                  letterSpacing: '-0.04em',
                  fontSize: {
                    xs: '28px',
                    md: '38px',
                    lg: '48px'
                  }
                }}
              >
                <ScaleUpText delay={0.5}>
                  <Box
                    component='span'
                    sx={{
                      color: '#6BE39B',
                      fontSize: {
                        xs: '28px',
                        md: '38px',
                        lg: '54px'
                      }
                    }}
                  >
                    사람
                  </Box>
                </ScaleUpText>
                과{' '}
                <ScaleUpText delay={0.7}>
                  <Box
                    component='span'
                    sx={{
                      color: '#6BE39B',
                      fontSize: {
                        xs: '28px',
                        md: '38px',
                        lg: '54px'
                      }
                    }}
                  >
                    공간
                  </Box>
                </ScaleUpText>
                을 연결하는
                <br />
                공동주택 플랫폼 기업
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: '#fff',
                  fontWeight: 500,
                  lineHeight: 1.5,
                  letterSpacing: '-0.03em',
                  fontSize: {
                    xs: '20px',
                    md: '28px',
                    lg: '34px'
                  }
                }}
              >
                공동주택의{' '}
                <ScaleUpText delay={0.9}>
                  <Box
                    component='span'
                    sx={{
                      color: '#6BE39B',
                      fontWeight: 700,
                      fontSize: {
                        xs: '20px',
                        md: '28px',
                        lg: '40px'
                      }
                    }}
                  >
                    디지털 전환
                  </Box>
                </ScaleUpText>
                을 만듭니다.
              </Typography>
            </FadeUp>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
