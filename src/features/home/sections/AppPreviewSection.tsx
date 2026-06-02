import Image from 'next/image'

import Link from 'next/link'

import { Box, Container, Stack, Typography } from '@mui/material'

import { notoSerifKr } from '@/styles/fonts'
import GlassButton from '@/components/common/button/GlassButton'
import { FadeUp } from '@/components/motion'

export default function AppPreviewSection() {
  return (
    <Box
      sx={{
        '& .MuiTypography-root': {
          fontFamily: notoSerifKr.style.fontFamily
        },
        position: 'relative',
        overflow: 'hidden',
        py: 20,
        background: 'linear-gradient(136.75deg, #FFFFFF 17.02%, #DCF998 82.98%)'
      }}
    >
      {/* Background Image Layer */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bottom: -220,
          left: 50,
          minWidth: '800px',
          maxWidth: '2100px',
          backgroundImage: 'url(/images/home/section/app_preview_section.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1300px'
        }}
      >
        <Stack
          spacing={3}
          sx={{
            minHeight: 600,
            justifyContent: 'flex-start',
            alignItems: 'flex-end'
          }}
        >
          <Box
            sx={{
              textAlign: 'right',
              maxWidth: 800
            }}
          >
            <FadeUp>
              <Image
                src='/images/logo/aptree_logo.png'
                alt='APTREE'
                width={200}
                height={1}
                priority
                style={{
                  width: '200px',
                  height: 'auto'
                }}
              />
              <Typography
                variant='h3'
                sx={{
                  fontWeight: 500,
                  fontSize: {
                    xs: '24px',
                    md: '36px',
                    lg: '40px'
                  },
                  mb: 4,
                  color: '#111'
                }}
              >
                공동 주택 생활을 위한 스마트 플랫폼
              </Typography>
            </FadeUp>
            <FadeUp>
              <Typography
                variant='body1'
                sx={{
                  color: '#111',
                  lineHeight: 1.5,
                  fontSize: {
                    xs: '16px',
                    md: '18px',
                    lg: '22px'
                  }
                }}
              >
                입주민 서비스부터 관리사무소 운영까지,
                <br />
                공동 주택 관리의 새로운 기준을 만들어갑니다.
              </Typography>
            </FadeUp>
          </Box>
          <FadeUp>
            <Link href='/company' style={{ textDecoration: 'none' }}>
              <GlassButton>
                <Box
                  component='span'
                  sx={{
                    color: '#00A887',
                    mr: 0.5
                  }}
                >
                  아파트리
                </Box>
                소개 바로가기
              </GlassButton>
            </Link>
          </FadeUp>
        </Stack>
      </Container>
    </Box>
  )
}
