import AppPreviewSection from '@/features/home/sections/AppPreviewSection'
import CtaSection from '@/features/home/sections/CtaSection'
import FeatureSection from '@/features/home/sections/FeatureSection'
import HeroSection from '@/features/home/sections/HeroSection'
import ServiceSection from '@/features/home/sections/ServiceSection'

export const metadata = {
  title: '비케이위너㈜',
  description: '아파트 생활 플랫폼'
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <FeatureSection />
      <AppPreviewSection />
      <CtaSection />
    </>
  )
}
