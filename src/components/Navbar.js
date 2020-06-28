import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className='flex items-center justify-between flex-wrap bg-transparency p-6'>
      <Link className='flex items-center flex-shrink-0 text-white mr-6' to='/'>
        <img src={Logo} alt='logo' className='fill-current h-12 w-12 mr-2' />
        <span className='font-semibold text-xl tracking-tight'>
          SoundRequest
        </span>
      </Link>
      <div className='block lg:hidden'>
        <button
          onClick={() => {
            setOpen(!open)
          }}
          className='flex items-center px-3 py-2 border rounded  border-white hover:text-white hover:border-white'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      {open || !isMobile ? (
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-md lg:flex-grow'>
            <Link
              to='/Blog'
              className='block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4'>
              블로그
            </Link>
            <Link
              to='/Support'
              className='block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4'>
              지원
            </Link>
          </div>
          <div>
            <Link
              to='/Downloads'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0'>
              Downloads
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  )
}

export default Navbar
