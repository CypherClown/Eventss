import React from 'react'
import ExploreCards from './elements/ExploreCards.jsx'
import Container from '../common/components/Container.jsx'
import { eventsData, textContent } from '../data.jsx'

function Explore() {
  return (
    <div>
      <Container className="flex flex-row max-md:flex-col gap-8 md:gap-[104px]">
        <div className="box">
          <p className='text-[28px] sm:text-[36px] md:text-[48px] font-[Poppins] font-[700] max-w-[338px]'>{textContent.explore.heading}</p>
          <p className='text-[14px] mt-3 mb-4 sm:text-[15px] md:text-[16px] font-[Poppins] font-[400] text-[#000000B2] max-w-[543px]'>{textContent.explore.description}</p>
          <p className='text-[14px] sm:text-[15px] md:text-[16px] font-[Poppins] font-[700]'>{textContent.explore.learnMore}</p>
        </div>
        <div className="box flex flex-col md:flex-row gap-[31px] justify-end w-full">
          {eventsData.map((event) => (
            <ExploreCards
              key={event.id}
              image={event.image}
              date={event.date}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Explore