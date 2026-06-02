import AppPreviewSection from '@/features/home/sections/AppPreviewSection'
import CtaSection from '@/features/home/sections/CtaSection'
import FeatureSection from '@/features/home/sections/FeatureSection'
import IntroSection from '@/features/home/sections/IntroSection'
import ServiceSection from '@/features/home/sections/ServiceSection'

export default function CompanyPage() {
  return (
    <>
      <ServiceSection />
      <FeatureSection />
      <AppPreviewSection />
      <CtaSection />
      <IntroSection />
    </>
  )
}
