import { Box, Container, Stack, Typography } from '@mui/material'

import GlassButton from '@/components/common/button/GlassButton'
import { notoSerifKr } from '@/styles/fonts'
import FadeUp from '@/components/motion/FadeUp'

export default function ServiceSection() {
  return (
    <Box
      sx={{
        py: 50,
        backgroundImage: 'url(/images/home/section/service_section_bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1300px' }}>
        <Stack spacing={3} maxWidth={800}>
          <FadeUp>
            <Typography
              variant='h3'
              sx={{
                fontWeight: 500,
                color: '#111',
                fontSize: {
                  xs: '28px',
                  md: '36px',
                  lg: '40px'
                }
              }}
            >
              <Box className={notoSerifKr.className}>일상을 연결하는 스마트 서비스</Box>
            </Typography>
          </FadeUp>
          <FadeUp>
            <Typography
              variant='h5'
              className={notoSerifKr.className}
              sx={{
                color: '#111',
                lineHeight: 1.5,
                fontSize: {
                  xs: '22px',
                  md: '22px',
                  lg: '22px'
                }
              }}
            >
              <Box className={notoSerifKr.className}>
                입주민과 관리사무소를 연결하며
                <br />더 편리한 주거환경을 만들어갑니다.
              </Box>
            </Typography>
          </FadeUp>
          <FadeUp>
            <GlassButton sx={{ width: 180 }}>회사 소개 바로가기</GlassButton>
          </FadeUp>
        </Stack>
      </Container>
    </Box>
  )
}
