'use client'

import Link from 'next/link'
import Image from 'next/image'

import { PUBLIC_NAVIGATION } from '@/constants/navigation'

const PublicHeader = () => {
  return (
    <header className='fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm transition-all duration-300'>
      <div className='mx-auto flex h-24 items-center justify-between px-10 lg:px-10'>
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav className='hidden items-center gap-10 lg:flex'>
          {PUBLIC_NAVIGATION.map(menu => (
            <Link
              key={menu.href}
              href={menu.href}
              className='text-lg font-medium tracking-wide text-black transition-colors duration-200 hover:text-green-600'
            >
              {menu.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className='flex h-10 w-10 items-center justify-center text-black lg:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-7 w-7'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5' />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default PublicHeader
