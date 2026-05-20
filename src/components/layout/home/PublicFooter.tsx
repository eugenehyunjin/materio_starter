import { Box, Container, Divider, Stack, Typography } from '@mui/material'

export default function PublicFooter() {
  return (
    <Box
      component='footer'
      sx={{
        bgcolor: '#111',
        color: '#fff',
        pt: 10,
        pb: 6,
        mt: 10
      }}
    >
      <Container maxWidth='xl'>
        <Stack spacing={3}>
          <Typography
            variant='h5'
            sx={{
              fontWeight: 700
            }}
          >
            APTREE
          </Typography>

          <Typography
            variant='body2'
            sx={{
              opacity: 0.7,
              lineHeight: 1.8
            }}
          >
            부산광역시 동구 중앙대로 000
            <br />
            TEL : 051-000-0000
            <br />
            EMAIL : contact@aptree.co.kr
          </Typography>

          <Divider
            sx={{
              borderColor: 'rgba(255,255,255,0.1)'
            }}
          />

          <Typography
            variant='caption'
            sx={{
              opacity: 0.5
            }}
          >
            © 2026 APTREE. All Rights Reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
