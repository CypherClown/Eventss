import React from 'react'
import ExploreCards from './elements/ExploreCards.jsx'

function Explore() {
  const events = [
    {
      id: 1,
      image: './assets/explore-1.png',
      date: '09/23/2021',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in '
    },
    {
      id: 2,
      image: './assets/explore-2.png',
      date: '09/23/2021',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in '
    }
  ]

  return (
    <div>
      <div className="flex flex-row max-md:flex-col mx-auto max-w-[1322px] w-full pt-8 pb-8 md:pt-[137px] md:pb-[73px] px-4 sm:px-6 md:px-8 gap-8 md:gap-[104px]">
        <div className="box">
          <p className='text-[28px] sm:text-[36px] md:text-[48px] font-[Poppins] font-[700] max-w-[338px]'>Explore our latest events</p>
          <p className='text-[14px] mt-3 mb-4 sm:text-[15px] md:text-[16px] font-[Poppins] font-[400] text-[#000000B2] max-w-[543px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.</p>
          <p className='text-[14px] sm:text-[15px] md:text-[16px] font-[Poppins] font-[700]'>LEARN MORE</p>
        </div>
        <div className="box grid grid-cols-1 md:grid-cols-2 gap-[31px] w-full">
          {events.map((event) => (
            <ExploreCards
              key={event.id}
              image={event.image}
              date={event.date}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explore