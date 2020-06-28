import React from 'react'
import NotMatchImg from '../assets/404.svg'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="mt-24">
      <img src={NotMatchImg} alt='404' className='w-64 h-64 mx-auto' />
      <div className='text-center text-xl mb-4'>페이지를 찾을 수 없습니다</div>
      <div className='text-center'>
        <Link to='/' className='hover:text-gray-300'>
          메인으로 가기
        </Link>
      </div>
    </div>
  )
}
