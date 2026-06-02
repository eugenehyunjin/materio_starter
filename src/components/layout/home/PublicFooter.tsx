import Image from 'next/image'

import { Box, Container, Stack, Typography } from '@mui/material'

export default function PublicFooter() {
  return (
    <Box
      component='footer'
      sx={{
        bgcolor: '#F5F5F5',
        color: '#111',
        pt: 10,
        pb: 6
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1300px' }}>
        <Image
          src='/images/logo/bk_large_ko.svg'
          alt='BKWINNER'
          width={250}
          height={50}
          priority
          className='h-auto w-[200px] lg:w-[200px]'
        />
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
            variant='body1'
            sx={{
              color: '#111',
              lineHeight: 1.5
            }}
          >
            주소: 부산 남구 전포대로 133 14층 117호(문현동, 위워크BIFC)
            <br />
            대표: 권두영
            <br />
            TEL : 051-911-0120 Fax: 051-955-2066 EMAIL : bkwinner@bkwinner.co.kr
          </Typography>

          <Typography
            variant='body1'
            sx={{
              color: '#111'
            }}
          >
            Copyright (c) 2026 BK Winner All rights. reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
