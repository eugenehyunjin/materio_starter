'use client'

import Image from 'next/image'

import { Box, Dialog, DialogContent, IconButton, Typography } from '@mui/material'

import ContactForm from './ContactForm'

interface Props {
  open: boolean
  onClose: () => void
  inquiryType: string
}

const inquiryIcons: Record<string, string> = {
  '서비스 문의': '/images/contact/contact_service.png',
  도입상담: '/images/contact/contact_consulting.png',
  '파트너십 제안': '/images/contact/contact_partner.png',
  기타문의: '/images/contact/contact_etc.png'
}

export default function ContactDialog({ open, onClose, inquiryType }: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='md'
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '32px',
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,.18)'
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          py: 3,
          px: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(136,226,103,.12) 0%, rgba(0,168,135,.12) 80%, #fff 100%)'
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16
          }}
        >
          ✕
        </IconButton>

        <Image src={inquiryIcons[inquiryType]} alt={inquiryType} width={72} height={72} />

        <Typography
          sx={{
            mt: 2,

            fontSize: '32px',

            fontWeight: 800,

            color: '#111'
          }}
        >
          {inquiryType}
        </Typography>
      </Box>

      <DialogContent
        sx={{
          p: 5
        }}
      >
        <ContactForm inquiryType={inquiryType} />
      </DialogContent>
    </Dialog>
  )
}
