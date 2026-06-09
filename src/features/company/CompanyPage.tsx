import CompanyHeroSection from './sections/CompanyHeroSection'
import CompanyHistorySection from './sections/CompanyHistorySection'
import CompanyCertificationSection from './sections/CompanyCertificationSection'

// import CompanyCultureSection from './sections/CompanyCultureSection'

import CtaSection from '@/features/home/sections/CtaSection'

export default function CompanyPage() {
  return (
    <>
      <CompanyHeroSection />

      <CompanyHistorySection />

      <CompanyCertificationSection />

      {/* <CompanyCultureSection /> */}

      <CtaSection />
    </>
  )
}
