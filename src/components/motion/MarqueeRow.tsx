import { Box } from '@mui/material'

interface MarqueeRowProps {
  reverse?: boolean
  logos: string[]
}

export default function MarqueeRow({ reverse = false, logos }: MarqueeRowProps) {
  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',

          animation: `${reverse ? 'marqueeReverse' : 'marquee'} 60s linear infinite`,

          '@keyframes marquee': {
            '0%': {
              transform: 'translateX(-25%)'
            },
            '100%': {
              transform: 'translateX(-75%)'
            }
          },

          '@keyframes marqueeReverse': {
            '0%': {
              transform: 'translateX(-50%)'
            },
            '100%': {
              transform: 'translateX(0)'
            }
          }
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <Box
            key={index}
            sx={{
              width: 220,
              height: 100,

              mx: 5,

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              component='img'
              src={logo}
              alt='partner'
              sx={{
                maxWidth: '100%',
                maxHeight: 60,
                objectFit: 'contain',
                transition: 'all .3s ease',

                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
