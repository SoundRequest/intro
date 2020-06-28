import React from 'react'

const Downloads = () => {
  return (
    <div className='text-center'>
      <div className='text-3xl font-bold mb-2'>Downloads</div>
      <div className='text-lg mb-12'>
        운영체제에 맞는 다운로드를 선택해주세요
      </div>
      <div className='mx-auto'>
        <a
          class='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-4'
          href='#'>
          <svg
            class='fill-current w-4 h-4 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'>
            <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
          </svg>
          윈도우 인스톨러
        </a>
        <a
          class='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-4'
          href='#'>
          <svg
            class='fill-current w-4 h-4 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'>
            <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
          </svg>
          맥 OS (준비중)
        </a>
        <a
          class='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-4'
          href='#'>
          이전버전 다운로드
        </a>
      </div>
    </div>
  )
}

export default Downloads
