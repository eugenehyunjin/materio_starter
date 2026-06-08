import { Box } from '@mui/material'

import CtaSection from '@/features/home/sections/CtaSection'
import HeroSection from '@/features/home/sections/HeroSection'
import ServiceSection from '@/features/home/sections/ServiceSection'
import PartnerSection from '@/features/home/sections/PartnerSection'
import FeatureSection from '@/features/home/sections/FeatureSection'

export const metadata = {
  title: '비케이위너㈜',
  description: '아파트 생활 플랫폼'
}

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',

          '&::before': {
            content: '""',
            position: 'absolute',

            left: '-400px',
            bottom: '100px',

            width: '1200px',
            height: '1200px',

            background: 'radial-gradient(circle, rgba(205,240,225,.9) 10%, rgba(205,240,225,.4) 50%, transparent 80%)',

            filter: 'blur(110px)',
            pointerEvents: 'none',
            zIndex: 0
          },

          '&::after': {
            content: '""',
            position: 'absolute',

            right: '-400px',
            top: '600px',

            width: '1300px',
            height: '1300px',

            background:
              'radial-gradient(circle at 100% 20%, rgba(200,224,251,.9) 20%, rgba(200,224,251,.5) 60%, transparent 80%)',

            filter: 'blur(100px)',
            pointerEvents: 'none',
            zIndex: 0
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 1
          }}
        >
          <HeroSection />
          <ServiceSection />
        </Box>
      </Box>
      <FeatureSection />
      <PartnerSection />
      <CtaSection />
    </>
  )
}
