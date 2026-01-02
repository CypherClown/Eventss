import React from 'react'
import Container from '../common/components/Container.jsx'
import EventsHeroSection from '../components/EventsHeroSection.jsx'
import EventsCard from '../components/elements/EventsCard.jsx'
import { textContent } from '../data.jsx'

function Events() {
  return (
    <div className="flex flex-col min-h-screen">
      <EventsHeroSection />
      <Container className="">
        <div className="heading flex flex-col items-center justify-center">
          <img src="/assets/divider-2.png" alt="" className="w-full max-w-[189px] h-full object-cover" />
          <p className="text-[28px] sm:text-[36px] md:text-[48px] font-[Poppins] font-[700]">
            {textContent.events.heading}
          </p>
        </div>
        <div className="events-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
          <EventsCard />
          <EventsCard /> 
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />
        </div>
        
         
      </Container>
    </div>
  )
}

export default Events

