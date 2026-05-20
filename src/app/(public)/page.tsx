import HeroSection from '@/features/home/components/HeroSection'
import IntroSection from '@/features/home/components/IntroSection'

export const metadata = {
  title: 'APTREE',
  description: '아파트 생활 플랫폼'
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
    </>
  )
}
