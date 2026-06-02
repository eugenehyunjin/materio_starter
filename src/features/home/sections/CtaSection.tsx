import { Box, Container, Stack, Typography } from '@mui/material'

import GlassButton from '@/components/common/button/GlassButton'
import { notoSerifKr } from '@/styles/fonts'
import FadeUp from '@/components/motion/FadeUp'

export default function CtaSection() {
  return (
    <Box
      sx={{
        '& .MuiTypography-root': {
          fontFamily: notoSerifKr.style.fontFamily
        },
        py: 18,
        background: 'radial-gradient(81.67% 313.6% at 18.33% 30.8%, #111C1A 0%, #326742 100%)',
        color: '#fff'
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1300px' }}>
        <FadeUp>
          <Stack spacing={4} alignItems='flex-start'>
            <Typography
              variant='h3'
              sx={{
                fontWeight: 500,
                lineHeight: 1.5,
                fontSize: {
                  xs: '28px',
                  md: '36px',
                  lg: '40px'
                }
              }}
            >
              더 나은 주거 문화를 위해,
              <br />
              일상 가까이의 스마트 서비스를 만듭니다.
            </Typography>

            <GlassButton sx={{ color: '#fff', width: 100 }}>Contact Us</GlassButton>
          </Stack>
        </FadeUp>
      </Container>
    </Box>
  )
}
