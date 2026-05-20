import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'

const items = [
  {
    title: '입주민 서비스',
    description: '편리한 모바일 기반 입주민 서비스 제공'
  },
  {
    title: '관리사무소',
    description: '효율적인 아파트 운영 관리 시스템'
  },
  {
    title: '커뮤니티',
    description: '입주민 소통 중심의 커뮤니티 기능'
  }
]

export default function IntroSection() {
  return (
    <Box
      sx={{
        py: 16
      }}
    >
      <Container maxWidth='xl'>
        <Grid container spacing={4}>
          {items.map(item => (
            <Grid item xs={12} md={4} key={item.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  borderRadius: 4,
                  border: '1px solid #eee',
                  height: '100%'
                }}
              >
                <Stack spacing={2}>
                  <Typography
                    variant='h5'
                    sx={{
                      fontWeight: 700
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#666',
                      lineHeight: 1.8
                    }}
                  >
                    {item.description}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
