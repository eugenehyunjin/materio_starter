'use client'

import Image from 'next/image'

import { Box, Typography } from '@mui/material'

const items = [
  {
    value: '서비스 문의',
    icon: '/images/contact/contact_service.png'
  },
  {
    value: '도입상담',
    icon: '/images/contact/contact_consulting.png'
  },
  {
    value: '파트너십 제안',
    icon: '/images/contact/contact_partner.png'
  },
  {
    value: '기타문의',
    icon: '/images/contact/contact_etc.png'
  }
]

export default function ContactCategorySection({ value, onChange }: any) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 3,
        mb: 8
      }}
    >
      {items.map(item => (
        <Box
          key={item.value}
          onClick={() => onChange(item.value)}
          sx={{
            cursor: 'pointer',

            border: value === item.value ? '1px solid #00A887' : '1px solid #E5E7EB',

            borderRadius: '24px',

            p: 4,

            textAlign: 'center',

            background: value === item.value ? '#F0FDFA' : '#fff',

            transition: '.3s',

            '&:hover': {
              background: '#F0FDFA',
              border: '1px solid #00A887',
              transform: 'translateY(-6px)',
              boxShadow: '0 20px 40px rgba(0,0,0,.08)'
            }
          }}
        >
          <Image src={item.icon} alt='' width={120} height={120} />

          <Typography
            sx={{
              mt: 2,
              fontWeight: 700,
              fontSize: 22
            }}
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}
