import { Box, Button, Container, Stack, Typography } from '@mui/material'

export default function HeroSection() {
  return (
    <Box
      sx={{
        py: {
          xs: 14,
          md: 24
        },
        bgcolor: '#f8fafc'
      }}
    >
      <Container maxWidth='xl'>
        <Stack spacing={4} alignItems='center' textAlign='center'>
          <Typography
            sx={{
              fontSize: {
                xs: 42,
                md: 72
              },
              fontWeight: 800,
              lineHeight: 1.2
            }}
          >
            스마트한 아파트
            <br />
            생활 플랫폼
          </Typography>

          <Typography
            sx={{
              maxWidth: 800,
              color: '#666',
              fontSize: {
                xs: 16,
                md: 20
              },
              lineHeight: 1.8
            }}
          >
            입주민과 관리사무소를 연결하는 차세대 아파트 통합 플랫폼 서비스를 제공합니다.
          </Typography>

          <Button
            variant='contained'
            size='large'
            sx={{
              mt: 2,
              borderRadius: '999px',
              px: 5,
              height: 56,
              fontSize: 16
            }}
          >
            서비스 문의하기
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
