import React from 'react'

const Support = () => {
  const faqList = [
    {
      title: 'SoundRequest는 뭐하는 앱인가요?',
      text: '몰라 나보고 묻지마'
    },
    {
      title: '어떻게 하면 프로젝트에 기여할 수 있을까요?',
      text: 'Github에 방문하여주세요'
    }
  ]

  const infoList = [
    {
      title: 'Discord',
      text: '디스코드 서버에 가입하여 도움을 받으세요!',
      link: 'https://github.com/SoundRequest',
      linktitle: '{준비중}'
    },
    {
      title: 'source',
      text: 'Github 레포에서 소스코드를 확인하실 수 있습니다',
      link: 'https://github.com/SoundRequest',
      linktitle: 'Github'
    },
    {
      title: 'ApiDocs',
      text: '개발자들을 위한 APi문서',
      link: 'https://github.com/SoundRequest',
      linktitle: '{준비중}'
    }
  ]

  return (
    <div className='text-center'>
      <div class='grid grid-flow-row grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto'>
        {infoList.map((item, index) => (
          <InfoCard {...item} key={index} />
        ))}
      </div>

      <div className='text-2xl font-bold my-8'>FAQ</div>
      {faqList.map((item, index) => (
        <QnA {...item} key={index} />
      ))}
    </div>
  )
}

const InfoCard = ({ title, text, link, linktitle }) => {
  return (
    <div className="flex justify-center">
      <div class='w-full rounded overflow-hidden border'>
        <div class='px-6 py-4'>
          <div class='font-bold text-xl mb-2'>{title}</div>
          <p class='text-gray-200 text-base'>{text}</p>
          <div className='mt-4'>
            <a href={link}>{linktitle}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

const QnA = ({ title, text }) => {
  return (
    <>
      <div className='text-left mb-4'>
        <div className='text-lg mb-1'>{title}</div>
        <div>{text}</div>
      </div>
    </>
  )
}

export default Support
