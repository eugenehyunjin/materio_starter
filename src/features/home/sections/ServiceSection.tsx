import { Box, Container, Typography } from '@mui/material'

import { FadeUp, ScaleUpText } from '@/components/motion'

const cards = [
  {
    image: '/images/home/section2/aptree.png'
  },
  {
    image: '/images/home/section2/blockchain.png'
  },
  {
    image: '/images/home/section2/aimonitoring.png'
  },
  {
    image: '/images/home/section2/software.png'
  }
]

export default function ServiceSection() {
  const positions = [
    {
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)'
    },
    {
      top: 180,
      left: 20
    },
    {
      top: 180,
      right: 20
    },
    {
      top: 420,
      left: '50%',
      transform: 'translateX(-50%)'
    }
  ]

  return (
    <Box
      sx={{
        position: 'relative',
        py: {
          xs: 15,
          md: 15
        }
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1300px'
        }}
      >
        {/* Title */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 12
          }}
        >
          <FadeUp>
            <Typography
              sx={{
                fontSize: {
                  xs: '34px',
                  md: '52px'
                },
                fontWeight: 700,
                color: '#111',
                lineHeight: 1.4
              }}
            >
              소비자의 <ScaleUpText delay={0.5}>생각</ScaleUpText>과 <ScaleUpText delay={0.7}>행동</ScaleUpText>
              을 연구분석하여
              <br />
              소비자 중심의 <ScaleUpText delay={0.9}>공동주택 생활 환경</ScaleUpText>을 만들어 갑니다.
            </Typography>
          </FadeUp>
        </Box>

        {/* Floating Cards */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '1300px',
            height: '1000px',
            mx: 'auto'
          }}
        >
          {cards.map((card, index) => (
            <FadeUp key={card.image}>
              <Box
                sx={{
                  position: 'absolute',
                  width: 385,
                  height: 385,

                  ...positions[index],

                  borderRadius: '28px',
                  overflow: 'hidden',

                  boxShadow: '0 20px 60px rgba(0,0,0,.22)',

                  transition: 'transform .8s cubic-bezier(.22,.61,.36,1), box-shadow .8s cubic-bezier(.22,.61,.36,1)',

                  '&:hover': {
                    transform: positions[index].transform
                      ? `${positions[index].transform} translateY(-16px)`
                      : 'translateY(-16px)',

                    boxShadow: '0 35px 80px rgba(0,0,0,.28)'
                  },

                  '&:hover .card-image': {
                    transform: 'scale(1.08)',
                    boxShadow: '0 35px 80px rgba(0,0,0,.28), 0 0 40px rgba(0,168,135,.12)'
                  }
                }}
              >
                <Box
                  className='card-image'
                  sx={{
                    width: '100%',
                    height: '100%',

                    backgroundImage: `url(${card.image})`,
                    backgroundSize: '125%',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',

                    transition: 'transform .8s cubic-bezier(.22,.61,.36,1)',

                    transform: 'scale(1)'
                  }}
                />
              </Box>
            </FadeUp>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
