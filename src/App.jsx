import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer.jsx'
import HeroSection from './components/HeroSection.jsx'
import Special from './components/Special.jsx'
import Participants from './components/Participants.jsx'
import Explore from './components/Explore.jsx'
import JoinUs from './components/JoinUs.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className="App flex flex-col min-h-screen mx-auto">
      <HeroSection />
      <Special />
      <Participants />
      <Explore />
      <JoinUs />
      <Footer className="mx-auto w-full" />
      </div>
    </>
  )
}

export default App
