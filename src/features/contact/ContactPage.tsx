'use client'

import { useState } from 'react'

import { Box, Container, Typography } from '@mui/material'

import ContactCategorySection from '@/components/contact/ContactCategorySection'
import ContactDialog from '@/components/contact/ContactDialog'
import ContactFaq from '@/components/contact/ContactFaq'
import CtaSection from '@/features/home/sections/CtaSection'

export default function ContactPage() {
  const [type, setType] = useState('')
  const [open, setOpen] = useState(false)

  const handleSelect = (value: string) => {
    setType(value)
    setOpen(true)
  }

  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1200px',
          py: 15
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            fontSize: {
              xs: '35px',
              md: '72px'
            },
            mb: 8
          }}
        >
          무엇을 도와드릴까요?
        </Typography>

        <ContactCategorySection value={type} onChange={handleSelect} />

        <ContactDialog open={open} onClose={() => setOpen(false)} inquiryType={type} />

        <ContactFaq />
      </Container>
      {/* CTA */}
      <CtaSection />
    </Box>
  )
}
