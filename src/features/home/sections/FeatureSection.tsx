import { Box, Container, Stack, Typography } from '@mui/material'

import { notoSerifKr } from '@/styles/fonts'
import FadeUp from '@/components/motion/FadeUp'

const FEATURES = [
  {
    title: '소비자 중심',
    desc: '입주민 중심의\n편리한 기능을 제공합니다.'
  },
  {
    title: '상생',
    desc: '관리자와 입주민 모두를 위한\n서비스를 제공합니다.'
  },
  {
    title: '스마트 라이프',
    desc: '스마트한 생활을 위한\n디지털 환경을 구축합니다.'
  }
]

export default function FeatureSection() {
  return (
    <Box
      sx={{
        '& .MuiTypography-root': {
          fontFamily: notoSerifKr.style.fontFamily
        },
        py: 18,
        background:
          'linear-gradient(102.22deg, #1E3A26 0.13%, #111C1A 99.87%), linear-gradient(119.36deg, #21314E 14%, #161B24 86%);',
        color: '#fff'
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1300px' }}>
        <Stack spacing={2} textAlign='left' mb={10}>
          <FadeUp>
            <Typography
              variant='h3'
              sx={{
                fontWeight: 500,
                fontSize: {
                  xs: '28px',
                  md: '36px',
                  lg: '40px'
                }
              }}
            >
              비케이위너가 만드는{' '}
              <Box
                component='span'
                className={notoSerifKr.className}
                sx={{
                  color: '#FFFA68',
                  fontWeight: 500
                }}
              >
                새로운 주거 문화
              </Box>
            </Typography>
          </FadeUp>
        </Stack>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {FEATURES.map((feature, index) => (
            <Box
              key={feature.title}
              className={notoSerifKr.className}
              sx={{
                position: 'relative',
                width: 450,
                height: 450,
                ...(index > 0 && {
                  ml: '-50px'
                }),

                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',

                textAlign: 'left',
                p: 10,
                background: 'rgba(255,255,255,0.02)',
                transition: 'all .6s ease',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  padding: '2px',
                  background: `
                      linear-gradient(
                        135deg,
                        rgba(191,247,232,0.9) 0%,
                        rgba(255,255,255,0.15) 35%,
                        rgba(255,255,255,0.05) 55%,
                        rgba(0,199,183,0.9) 100%
                      )
                    `,

                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  transition: 'all .6s ease',
                  transform: 'rotate(0deg)'
                },

                '&:hover': {
                  boxShadow: `
                      0 30px 60px rgba(0,0,0,.4),
                      0 0 40px rgba(0,228,211,.2)
                    `
                },

                '&:hover::before': {
                  transform: 'rotate(120deg)',
                  background: `
                      linear-gradient(
                        135deg,
                        rgba(191,247,232,0.9) 0%,
                        rgba(255,255,255,0.15) 35%,
                        rgba(255,255,255,0.05) 55%,
                        rgba(0,199,183,0.9) 100%
                      )
                    `,
                  transition: 'all .8s ease'
                }
              }}
            >
              <Stack spacing={2}>
                <FadeUp>
                  <Typography
                    variant='h4'
                    sx={{
                      fontWeight: 500,
                      fontSize: {
                        xs: '32px',
                        md: '32px',
                        lg: '36px'
                      }
                    }}
                  >
                    {feature.title}
                  </Typography>
                </FadeUp>
                <FadeUp>
                  <Typography
                    variant='body1'
                    sx={{
                      whiteSpace: 'pre-line',
                      lineHeight: 1.5,
                      fontSize: {
                        xs: '18px',
                        md: '22px',
                        lg: '22px'
                      }
                    }}
                  >
                    {feature.desc}
                  </Typography>
                </FadeUp>
              </Stack>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
