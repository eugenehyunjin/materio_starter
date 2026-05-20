import type { ReactNode } from 'react'

import PublicHeader from '@/components/layout/home/PublicHeader'
import PublicFooter from '@/components/layout/home/PublicFooter'

type Props = {
  children: ReactNode
}

export default function PublicLayout({ children }: Props) {
  return (
    <>
      <PublicHeader />

      <main className='pt-20'>{children}</main>

      <PublicFooter />
    </>
  )
}
