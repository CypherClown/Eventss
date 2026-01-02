import React from 'react'
import { Link } from 'react-router-dom'
import { textContent } from '../data.jsx'

function EventsHeroSection() {
  return (
    <section className="events-hero-section">
      <img src="/assets/events-hero-bg.jpg" alt="" className="events-hero-bg-image" />
      <div className="events-hero-overlay"></div>
      <div className="events-hero-content text-white font-[Poppins] font-medium text-[16px] leading-[105%]">
        <div className="breadcrumb leading-[150%]">
          <Link to="/" className='text-white hover:underline'>{textContent.events.breadcrumb.home}</Link>
          <span className='text-white'>{' > '}</span>
          <span className='text-white'>{textContent.events.breadcrumb.events}</span>
        </div>
        <h1 className="text-[64px] font-bold leading-[150%]">
          {textContent.events.heading}
        </h1>
      </div>
    </section>
  )
}

export default EventsHeroSection