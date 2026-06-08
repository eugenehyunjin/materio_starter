'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { PUBLIC_NAVIGATION } from '@/constants/navigation'

const PublicHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full
        bg-white
        transition-all duration-100
      `}
      style={{
        boxShadow: isScrolled ? '0 8px 30px rgba(0,0,0,0.15)' : 'none'
      }}
    >
      <div className='mx-auto flex h-20 items-center justify-between px-10 lg:px-10'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/images/logo/bk_large_ko.svg'
            alt='BKWINNER'
            width={250}
            height={50}
            priority
            className='h-auto w-[200px] lg:w-[200px]'
          />
        </Link>

        <nav className='hidden items-center gap-10 lg:flex'>
          {PUBLIC_NAVIGATION.map(menu => (
            <Link
              key={menu.href}
              href={menu.href}
              className='text-lg font-bold tracking-wide text-black transition-colors duration-200 hover:text-green-600'
            >
              {menu.label}
            </Link>
          ))}
        </nav>

        <button className='flex h-10 w-10 items-center justify-center text-black lg:hidden'>...</button>
      </div>
    </header>
  )
}

export default PublicHeader
