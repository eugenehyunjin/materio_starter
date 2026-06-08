'use client'

import { Box, Container, Typography } from '@mui/material'

import MarqueeRow from '@/components/motion/MarqueeRow'
import { FadeUp } from '@/components/motion'

const logos1 = [
  '/images/home/partners/partner_1.png',
  '/images/home/partners/partner_2.png',
  '/images/home/partners/partner_3.png',
  '/images/home/partners/partner_4.png',
  '/images/home/partners/partner_5.png',
  '/images/home/partners/partner_6.png',
  '/images/home/partners/partner_7.png',
  '/images/home/partners/partner_8.png'
]

const logos2 = [
  '/images/home/partners/partner_9.png',
  '/images/home/partners/partner_10.png',
  '/images/home/partners/partner_11.png',
  '/images/home/partners/partner_12.png',
  '/images/home/partners/partner_13.png',
  '/images/home/partners/partner_14.png',
  '/images/home/partners/partner_15.png',
  '/images/home/partners/partner_16.png'
]

const logos3 = [
  '/images/home/partners/partner_17.png',
  '/images/home/partners/partner_18.png',
  '/images/home/partners/partner_19.png',
  '/images/home/partners/partner_20.png',
  '/images/home/partners/partner_21.png',
  '/images/home/partners/partner_22.png',
  '/images/home/partners/partner_23.png',
  '/images/home/partners/partner_24.png',
  '/images/home/partners/partner_25.png',
  '/images/home/partners/partner_26.png',
  '/images/home/partners/partner_27.png'
]

export default function PartnerSection() {
  return (
    <Box
      sx={{
        py: 20,
        overflow: 'hidden'
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1400px' }}>
        <FadeUp>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '34px',
                md: '52px'
              },
              fontWeight: 700,
              mb: 6
            }}
          >
            비케이위너와 함께하는{' '}
            <Box component='span' sx={{ color: '#00A887' }}>
              파트너
            </Box>
          </Typography>
        </FadeUp>
        <MarqueeRow reverse={false} logos={logos1} />

        <Box sx={{ height: 20 }} />

        <MarqueeRow reverse logos={logos2} />

        <Box sx={{ height: 20 }} />

        <MarqueeRow reverse={false} logos={logos3} />
      </Container>
    </Box>
  )
}
