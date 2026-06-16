import { useState } from 'react'

import Image from 'next/image'

import Link from 'next/link'

import { Box, Stack, Typography, Select, MenuItem, FormControl } from '@mui/material'

const footerLinkStyle = {
  cursor: 'pointer',
  transition: 'all .25s ease',

  '&:hover': {
    opacity: 0.7
  }
}

const awards = [
  {
    image: '/images/home/awards/award_1.png',
    year: '2023-2026',
    title: '벤처기업인증'
  },
  {
    image: '/images/home/awards/award_2.png',
    year: '2022,2023',
    title: '기술평가 우수기업 인증',
    description: '(T-4 등급)'
  },
  {
    image: '/images/home/awards/award_3.png',
    year: '2025',
    title: '기술평가 우수기업 인증',
    description: '(T-4 등급)'
  },
  {
    image: '/images/home/awards/award_4.png',
    year: '2025-2026',
    title: '기업부설연구소 인증'
  },
  {
    image: '/images/home/awards/award_5.png',
    year: '2022-2023',
    title: '대한민국 우수기업대상',
    description: '2년 연속 수상'
  }
]

export default function PublicFooter() {
  const [familySite, setFamilySite] = useState('')

  return (
    <Box
      component='footer'
      sx={{
        bgcolor: '#F5F5F5',
        py: 8,
        borderTop: '1px solid #EAEAEA'
      }}
    >
      <Box
        component='footer'
        sx={{
          width: '100%',
          py: 2,
          px: 12
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 8
          }}
        >
          {/* 좌측 로고 */}
          <Link
            href='/'
            style={{
              textDecoration: 'none'
            }}
          >
            <Box sx={{ minWidth: 180 }}>
              <Image src='/images/logo/logo_gray.png' alt='BK Winner' width={170} height={31} />
            </Box>
          </Link>
          {/* 중앙 메뉴 + 회사정보 */}
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                gap: 10,
                mb: 4
              }}
            >
              <Stack spacing={1}>
                <Link
                  href='/about'
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#006551',
                      ...footerLinkStyle
                    }}
                  >
                    회사소개
                  </Typography>
                </Link>
                <Link
                  href='/aptree'
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#006551',
                      ...footerLinkStyle
                    }}
                  >
                    서비스 소개
                  </Typography>
                </Link>
                <Link
                  href='/contact'
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#006551',
                      ...footerLinkStyle
                    }}
                  >
                    문의하기
                  </Typography>
                </Link>
              </Stack>

              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 4,
                    mb: 2
                  }}
                >
                  <Link
                    href='/privacy'
                    style={{
                      textDecoration: 'none'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#111',
                        fontWeight: 700,
                        ...footerLinkStyle
                      }}
                    >
                      개인정보처리방침
                    </Typography>
                  </Link>
                  <Link
                    href='/terms'
                    style={{
                      textDecoration: 'none'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#111',
                        ...footerLinkStyle
                      }}
                    >
                      이용약관
                    </Typography>
                  </Link>
                </Box>

                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#111',
                    lineHeight: 1.8
                  }}
                >
                  대표 : 권두영
                  <br />
                  주소 : 부산 남구 전포대로 133 14층 117호(문현동, 위워크BIFC)
                  <br />
                  Tel : 051-911-0120 &nbsp;&nbsp;&nbsp; Fax : 051-955-2066 &nbsp;&nbsp;&nbsp; E-mail :
                  contact@bkwinner.co.kr
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    fontSize: '15px',
                    color: '#000'
                  }}
                >
                  Copyright (c) 2026 BK Winner All rights. reserved
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              minWidth: 260,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 3
            }}
          >
            {/* 수상 이력 */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                gap: 1.5,
                flexWrap: 'wrap'
              }}
            >
              {awards.map((award, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 110,

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                    textAlign: 'center',

                    transition: '.3s ease',

                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  {/* 아이콘 */}
                  <Box
                    sx={{
                      width: 50,
                      height: 50,

                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',

                      mb: 1
                    }}
                  >
                    <Image src={award.image} alt={award.title} width={45} height={45} />
                  </Box>

                  {/* 년도 */}
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 700,
                      lineHeight: 1.2
                    }}
                  >
                    {award.year}
                  </Typography>

                  {/* 메인 텍스트 */}
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#111',
                      lineHeight: 1.3,
                      mt: 0.5
                    }}
                  >
                    {award.title}
                  </Typography>

                  {/* 부가 텍스트 */}
                  <Typography
                    sx={{
                      fontSize: '11px',
                      color: '#777',
                      lineHeight: 1.3,
                      mt: 0.3
                    }}
                  >
                    {award.description}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* 패밀리 사이트 */}
            <FormControl
              size='small'
              sx={{
                width: '30%',
                mt: 1,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  fontSize: '13px',

                  '& fieldset': {
                    borderColor: '#ddd'
                  },

                  '&:hover fieldset': {
                    borderColor: '#00A887'
                  },

                  '&.Mui-focused fieldset': {
                    borderColor: '#00A887'
                  }
                },

                '& label.Mui-focused': {
                  color: '#00A887'
                }
              }}
            >
              <Select
                displayEmpty
                value={familySite}
                onChange={e => {
                  const value = e.target.value

                  if (!value) return

                  window.open(value, '_blank', 'noopener,noreferrer')
                  setFamilySite('')
                }}
              >
                <MenuItem value='' disabled>
                  패밀리 사이트
                </MenuItem>

                <MenuItem value='https://aptree.co.kr'>아파트리</MenuItem>
                <MenuItem value='https://bkwinner.co.kr'>BK Winner</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
