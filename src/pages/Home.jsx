import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import Special from '../components/Special.jsx'
import Participants from '../components/Participants.jsx'
import Explore from '../components/Explore.jsx'
import JoinUs from '../components/JoinUs.jsx'

function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <HeroSection />
      <Special />
      <Participants />
      <Explore />
      <JoinUs />
    </div>
  )
}

export default Home

