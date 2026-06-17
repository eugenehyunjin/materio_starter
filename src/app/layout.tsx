// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Next Imports
import Script from 'next/script'

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
    title: '비케이위너㈜',
    description: '공동주택 DX 플랫폼 전문 기업',
    url: 'https://bkwinner.co.kr',
    siteName: '비케이위너',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/images/og/bkwinner_og.png',
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
    images: ['/images/og/bkwinner_og.png']
  }
}

const RootLayout = ({ children }: ChildrenType) => {
  const direction = 'ltr'

  return (
    <html id='__next' lang='ko' dir={direction}>
      <head>
        {/* Google Tag Manager */}
        <Script id='gtm-script' strategy='afterInteractive'>
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KPRCD4TN');
          `}
        </Script>
      </head>

      <body className='flex is-full min-bs-full flex-auto flex-col'>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-KPRCD4TN'
            height='0'
            width='0'
            style={{
              display: 'none',
              visibility: 'hidden'
            }}
          />
        </noscript>

        {children}
      </body>
    </html>
  )
}

export default RootLayout
