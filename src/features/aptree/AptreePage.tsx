import AptreeProblemSection from './sections/AptreeProblemSection'
import AptreeAppDownSection from './sections/AptreeAppDownSection'
import AptreeSolutionSection from './sections/AptreeSolutionSection'

import CtaSection from '@/features/home/sections/CtaSection'

export default function AptreePage() {
  return (
    <>
      <AptreeProblemSection />
      <AptreeSolutionSection />
      <AptreeAppDownSection />
      <CtaSection />
    </>
  )
}
