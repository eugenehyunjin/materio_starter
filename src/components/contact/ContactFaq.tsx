'use client'

import { useState } from 'react'

import AddIcon from '@mui/icons-material/Add'

import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography, Link } from '@mui/material'

import faqList from '@/data/contact/faq'

const faqCategories = [
  {
    key: 'all',
    name: '전체'
  },
  {
    key: 'service',
    name: '서비스 문의'
  },
  {
    key: 'consulting',
    name: '도입문의'
  },
  {
    key: 'partner',
    name: '파트너십 제안'
  },
  {
    key: 'etc',
    name: '기타 문의'
  }
]

export default function ContactFaq() {
  const [category, setCategory] = useState('all')

  const filteredFaq = category === 'all' ? faqList : faqList.filter(faq => faq.category === category)

  return (
    <Box
      sx={{
        mt: 15
      }}
    >
      {/* 제목 */}

      <Typography
        sx={{
          fontSize: {
            xs: '36px',
            md: '54px'
          },
          fontWeight: 800,

          textAlign: 'center',

          mb: 1
        }}
      >
        FAQ
      </Typography>

      <Typography
        sx={{
          textAlign: 'center',

          color: '#111',

          mb: 3,

          fontSize: '18px'
        }}
      >
        궁금한 내용을 빠르게 확인해보세요.
      </Typography>

      {/* 카테고리 */}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',

          gap: 2,

          mb: 6
        }}
      >
        {faqCategories.map(categoryItem => (
          <Button
            key={categoryItem.key}
            onClick={() => setCategory(categoryItem.key)}
            sx={{
              px: 3,
              py: 1.2,

              borderRadius: '999px',

              fontWeight: 700,

              backgroundColor: category === categoryItem.key ? '#00A887' : '#fff',

              color: category === categoryItem.key ? '#fff' : '#111',

              border: category === categoryItem.key ? 'none' : '1px solid #ddd',

              '&:hover': {
                backgroundColor: category === categoryItem.key ? '#00A887' : '#f5f5f5'
              }
            }}
          >
            {categoryItem.name}
          </Button>
        ))}
      </Box>

      {/* FAQ */}

      <Box
        sx={{
          maxWidth: '1000px',
          mx: 'auto'
        }}
      >
        {filteredFaq.map((faq, index) => (
          <Accordion
            key={index}
            disableGutters
            elevation={0}
            sx={{
              mb: 2,

              borderRadius: '16px !important',

              overflow: 'hidden',

              border: '1px solid #E5E7EB',

              '&:before': {
                display: 'none'
              }
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon />}
              sx={{
                minHeight: '72px',

                px: 3,

                '& .MuiAccordionSummary-content': {
                  margin: '0'
                }
              }}
            >
              <Typography
                sx={{
                  fontSize: '22px',
                  fontWeight: 700
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                backgroundColor: '#F0FDFA',

                px: 3,
                py: 3
              }}
            >
              <Typography
                sx={{
                  lineHeight: 1.5,
                  color: '#111',
                  fontSize: '18px',
                  fontWeight: 600
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* 전체 FAQ */}

      <Box
        sx={{
          mt: 5,

          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Link href='https://aptree.co.kr/home/faq.php' target='_blank' rel='noopener noreferrer'>
          <Button
            variant='outlined'
            size='large'
            sx={{
              px: 6,
              py: 1.8,
              borderRadius: '14px',
              borderColor: '#00A887',
              color: '#00A887',
              fontWeight: 700,
              '&:hover': {
                borderColor: '#00A887',
                backgroundColor: 'rgba(0,168,135,.05)'
              }
            }}
          >
            아파트리 FAQ 바로가기
          </Button>
        </Link>
      </Box>
    </Box>
  )
}
