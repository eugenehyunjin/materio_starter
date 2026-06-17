'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'

const solutions = [
  {
    title: '전자투표 · 설문조사',
    icon: '/images/aptree/vote.png',
    image: '/images/aptree/mockup_vote.png',
    reverse: false,
    descriptions: [
      {
        text: '스마트폰만 있으면 ',
        bold: '언제 어디서든 바로 투표'
      },
      {
        text: '투표 독려 문자 발송기능으로 ',
        bold: '저조한 투표율 개선'
      },
      {
        text: '블록체인 기술로 ',
        bold: '안전한 투표 시스템'
      }
    ]
  },

  {
    title: '관리사무소 문의',
    icon: '/images/aptree/civil.png',
    image: '/images/aptree/mockup_civil.png',
    reverse: true,
    descriptions: [
      {
        text: '입주민은 스마트폰에서 ',
        bold: '간편하게 민원 요청'
      },
      {
        text: '관리소는 대면하지 않고 ',
        bold: '온라인으로 편리하게 답변'
      },
      {
        text: '비공개 접수 기능으로 ',
        bold: '조용하고 빠른 처리'
      },
      {
        text: '사진 등록으로 보다 ',
        bold: '쉬운 상황 설명'
      }
    ]
  },

  {
    title: '방문차량 예약',
    icon: '/images/aptree/car.png',
    image: '/images/aptree/mockup_car.png',
    reverse: false,
    descriptions: [
      {
        text: '관리사무소 방문 없이 ',
        bold: '앱으로 바로 예약'
      },
      {
        text: '방문 차량의 입·출차 내역을 ',
        bold: '한 눈에 빠르고 쉽게 확인'
      },
      {
        text: '언제 어디서나 쉽고 빠른 ',
        bold: '방문 예약 및 취소'
      }
    ]
  },

  {
    title: '관리비 조회',
    icon: '/images/aptree/bill.png',
    image: '/images/aptree/mockup_bill.png',
    reverse: true,
    descriptions: [
      {
        text: '관리비 조회는 기본, 카카오 페이로 ',
        bold: '앱에서 바로 납부'
      },
      {
        text: '한눈에 보기 쉬운 다양한 ',
        bold: '분석과 추이 그래프 제공'
      },
      {
        text: '관리비 내역 ',
        bold: 'PDF파일 저장 지원'
      }
    ]
  }
]

export default function AptreeSolutionSection() {
  return (
    <Box
      sx={{
        py: {
          xs: 0,
          md: 10
        },
        background: '#fff'
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1400px'
        }}
      >
        {solutions.map(solution => (
          <SolutionBlock key={solution.title} solution={solution} />
        ))}
      </Container>
    </Box>
  )
}

function SolutionBlock({ solution }: { solution: any }) {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  if (isMobile) {
    return <MobileSolutionBlock solution={solution} />
  }

  return <DesktopSolutionBlock solution={solution} />
}

function MobileSolutionBlock({ solution }: { solution: any }) {
  return (
    <Box
      sx={{
        py: 4,
        textAlign: 'center'
      }}
    >
      {/* 아이콘 */}
      <Box
        component='img'
        src={solution.icon}
        alt=''
        sx={{
          width: 90,
          height: 'auto',
          mx: 'auto'
        }}
      />

      {/* 제목 */}
      <Typography
        sx={{
          mt: 0,
          mb: 2,

          color: '#00A887',

          fontWeight: 700,

          fontSize: {
            xs: '26px',
            sm: '30px'
          }
        }}
      >
        {solution.title}
      </Typography>

      {/* 목업 */}
      <Image
        src={solution.image}
        alt={solution.title}
        width={611}
        height={700}
        style={{
          width: '100%',
          maxWidth: '300px',
          height: 'auto'
        }}
      />

      {/* 설명 */}
      <Box sx={{ mt: 2 }}>
        {solution.descriptions.map((item: any) => (
          <Typography
            key={item.bold}
            sx={{
              mb: 2,
              fontSize: '16px',
              lineHeight: 1.3
            }}
          >
            {item.text}

            <Box
              component='span'
              sx={{
                fontWeight: 800
              }}
            >
              {item.bold}
            </Box>
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

function DesktopSolutionBlock({ solution }: { solution: any }) {
  return (
    <Box
      sx={{
        minHeight: '700px',

        display: 'flex',

        flexDirection: solution.reverse ? 'row-reverse' : 'row',

        alignItems: 'center'
      }}
    >
      {/* 목업 */}
      <motion.div
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
          amount: 0.3
        }}
        transition={{
          duration: 0.8
        }}
        style={{
          flex: 1
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Image
            src={solution.image}
            alt={solution.title}
            width={611}
            height={700}
            style={{
              width: '100%',
              maxWidth: '611px',
              height: 'auto'
            }}
          />
        </Box>
      </motion.div>

      {/* 텍스트 */}
      <motion.div
        initial={{
          opacity: 0,
          x: solution.reverse ? -80 : 80
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true,
          amount: 0.3
        }}
        transition={{
          duration: 0.8,
          delay: 0.2
        }}
        style={{
          flex: 1
        }}
      >
        <Box
          sx={{
            textAlign: solution.reverse ? 'right' : 'left',

            display: 'flex',
            flexDirection: 'column',

            alignItems: solution.reverse ? 'flex-end' : 'flex-start'
          }}
        >
          <Image src={solution.icon} alt='' width={200} height={200} />

          <Typography
            sx={{
              mt: 2,
              mb: 2,

              color: '#00A887',

              fontWeight: 700,

              fontSize: '42px'
            }}
          >
            {solution.title}
          </Typography>

          {solution.descriptions.map((item: any) => (
            <Typography
              key={item.bold}
              sx={{
                mb: 2,
                fontSize: '25px'
              }}
            >
              {item.text}

              <Box
                component='span'
                sx={{
                  fontWeight: 800
                }}
              >
                {item.bold}
              </Box>
            </Typography>
          ))}
        </Box>
      </motion.div>
    </Box>
  )
}
