// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  metadataBase: new URL('https://bkwinner.co.kr'),

  title: '비케이위너 홈페이지',
  description: '공동주택 DX 플랫폼 전문 기업',

  openGraph: {
    title: '비케이위너',
    description: '공동주택 DX 플랫폼 전문 기업',
    url: 'https://bkwinner.co.kr',
    siteName: '비케이위너',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/images/og/bkwinner-og.png',
        width: 1200,
        height: 630,
        alt: '비케이위너'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: '비케이위너',
    description: '공동주택 DX 플랫폼 전문 기업',
    images: ['/images/og/bkwinner-og.png']
  }
}

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <html id='__next' lang='ko' dir={direction}>
      <body className='flex is-full min-bs-full flex-auto flex-col'>{children}</body>
    </html>
  )
}

export default RootLayout
