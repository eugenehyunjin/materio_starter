'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { Box, Container, Typography } from '@mui/material'

const histories = [
  {
    year: '2026',
    events: [
      {
        month: '예정',
        title: '커뮤니티 시설 예약 추가 예정'
      },
      {
        month: '',
        title: '홈닷 ERP 추가 예정'
      },
      {
        month: '05',
        title: '관리사무소 앱 리뉴얼 런칭'
      },
      {
        month: '01',
        title: '입주자 앱 리뉴얼 런칭'
      }
    ]
  },

  {
    year: '2025',
    events: [
      {
        month: '09',
        title: '25년 기술평가 우수기업 인증서 T-5',
        description: '한국기술신용평가'
      },
      {
        month: '07',
        title: '기업부설연구소 인정',
        description: '한국산업기술진흥협회 KOITA'
      },
      {
        month: '01',
        title: '에스노텍스 런칭'
      }
    ]
  },

  {
    year: '2024',
    events: [
      {
        month: '12',
        title: '연구개발전담부서 인정',
        description: '한국산업기술진흥협회 KOITA'
      },
      {
        month: '05',
        title: '한국환경공단 업무 제휴',
        description: 'E-순환거버넌스'
      }
    ]
  },
  {
    year: '2023',
    events: [
      {
        month: '12',
        title: '벤처기업확인서',
        description: '혁신성장유형'
      },
      {
        month: '04',
        title: '대한민국 우수기업 대상 우수플랫폼 대상 2년 연속 수상'
      },
      {
        month: '02',
        title: '기업부설 연구소 설립',
        description: '한국산업기술진흥협회 KOITA'
      }
    ]
  },
  {
    year: '2022',
    events: [
      {
        month: '10',
        title: '혁신스타트업 기업 선정',
        description: '신용보증기금'
      },
      {
        month: '09',
        title: '22년 기술평가 우수기업 인증서 T-4(우수)',
        description: '한국인터넷진흥원'
      },
      {
        month: '07',
        title: '블록체인 민감분야 확산 사업 선정',
        description: '한국인터넷진흥원'
      }
    ]
  },
  {
    year: '2021',
    events: [
      {
        month: '06',
        title: '블록체인 특구연계사업 선정',
        description: '한국인터넷 진흥원'
      },
      {
        month: '05',
        title: '아파트 통함 관리 플랫폼 개발 - 아파트리'
      }
    ]
  },
  {
    year: '2020',
    events: [
      {
        month: '09',
        title: '블록체인을 활용한 개인정보 보호 시스템 특허 등록',
        description: '특허번호: 10-2163274'
      }
    ]
  },
  {
    year: '2019',
    events: [
      {
        month: '04',
        title: '비케이위너 주식회사 설립'
      }
    ]
  }
]

export default function CompanyHistorySection() {
  return (
    <Box
      sx={{
        py: 24,
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFCF 90%, #FFFFFF 100%)'
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1400px'
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12
          }}
        >
          {/* LEFT */}
          <Box>
            <Box
              sx={{
                position: 'sticky',
                top: 140
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 1,
                  mb: 4
                }}
              >
                <Image
                  src='/images/logo/bkwinner_logo_kr.png'
                  alt='BKWINNER'
                  width={350}
                  height={50}
                  priority
                  className='h-auto w-[350px] lg:w-[350px]'
                />

                <Typography
                  component='span'
                  sx={{
                    fontSize: {
                      xs: '42px',
                      md: '48px'
                    },
                    fontWeight: 500,
                    lineHeight: 1.0,
                    mb: 2
                  }}
                >
                  가 걸어온 길
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: '24px',
                  color: '#111',
                  lineHeight: 1.8,
                  maxWidth: 600,
                  mt: 4
                }}
              >
                공동 주택 관리 서비스의 전문성과 안정성을 높이기 위해
                <br />
                끊임없는 기술 개발과 연구를 이어가고 있습니다.
              </Typography>
            </Box>
          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              position: 'relative',
              pl: 10,

              '&::before': {
                content: '""',
                position: 'absolute',
                left: '12px',
                top: 0,
                bottom: 0,
                width: '1px',
                background: '#ccc'
              }
            }}
          >
            {histories.map((history, index) => (
              <motion.div
                key={history.year}
                initial={{
                  opacity: 0,
                  y: 80
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  amount: 0.2
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    mb: 18,

                    '&:hover .year': {
                      color: '#00A88A'
                    },

                    '&:hover .history-card': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 20px 50px rgba(0,168,138,.15)'
                    }
                  }}
                >
                  {/* DOT */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '-72px',
                      top: '17px',

                      width: '10px',
                      height: '10px',

                      borderRadius: '50%',

                      backgroundColor: '#00A88A',

                      boxShadow: '0 0 0 rgba(0,168,138,.4)',

                      animation: 'pulse 2.5s infinite',

                      '@keyframes pulse': {
                        '0%': {
                          boxShadow: '0 0 0 0 rgba(0,168,138,.5)'
                        },
                        '70%': {
                          boxShadow: '0 0 0 18px rgba(0,168,138,0)'
                        },
                        '100%': {
                          boxShadow: '0 0 0 0 rgba(0,168,138,0)'
                        }
                      }
                    }}
                  />

                  {/* YEAR */}
                  <Typography
                    className='year'
                    sx={{
                      fontSize: '42px',
                      fontWeight: 400,
                      letterSpacing: '-0.08em',
                      lineHeight: 1,
                      mb: 2,
                      mt: 4,
                      background: 'linear-gradient(180deg, #7FE8C8 0%, #00A88A 45%, #006551 100%)',

                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',

                      transition: 'all .35s ease'
                    }}
                  >
                    {history.year}
                  </Typography>

                  {/* History Items */}
                  <Box sx={{ mt: 4 }}>
                    {history.events.map(event => (
                      <Box
                        key={`${history.year}-${event.month}-${event.title}`}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          mb: 1.5,

                          transition: 'all .3s ease',

                          '&:hover': {
                            transform: 'translateX(10px)'
                          },

                          '&:hover .event-title': {
                            color: '#00A88A'
                          }
                        }}
                      >
                        {/* Month */}
                        <Typography
                          sx={{
                            minWidth: '60px',
                            fontSize: '24px',
                            fontWeight: 600,

                            color: '#111',

                            lineHeight: 1.4
                          }}
                        >
                          {event.month}
                        </Typography>

                        {/* Content */}
                        <Box>
                          <Typography
                            className='event-title'
                            sx={{
                              fontSize: '20px',
                              fontWeight: 400,
                              color: '#111',

                              lineHeight: 1.4,

                              transition: '.3s'
                            }}
                          >
                            {event.title}
                          </Typography>

                          {event.description && (
                            <Typography
                              sx={{
                                fontSize: '20px',
                                color: '#111'
                              }}
                            >
                              ({event.description})
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
