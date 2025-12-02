import React from 'react'
import NavigationBar from './NavigationBar.jsx'
import Button from './elements/Button.jsx'
import Location from './elements/Location.jsx'

function HeroSection() {
  return (
    <div>
      
      <section
        className="relative w-full min-h-[400px] flex flex-col justify-center px-4 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/assets/hero-bg.jpg)',
            transform: 'scaleX(-1)'
          }}
        ></div>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.57)' }}></div>
        <NavigationBar className="z-10"/>
        <div className="relative z-2 text-white mx-auto font-[Poppins] md:mt-[173px] mt-[100px] max-w-[1322px] w-full px-4 md:px-0">
          <h1 className='text-[32px] md:text-[64px] leading-[150%] font-[700] max-w-[1044px] w-full'>Sed tortor in <span className="relative inline-block">
              quisque morbi
              <img src="/assets/underline.png" alt="" className="absolute bottom-[-8px] left-0 w-full h-auto" />
          </span> scelerisque etiam eu.
          </h1>
          <p className="text-[16px] md:text-[20px] leading-[100%] max-w-[765px] w-full font-normal font-[Yantramanav] mt-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,
          </p>
          <div className="btns mt-[33px]">
          <Button text="Get Started" className="rounded-4xl font-[600] bg-[#2C49FE]"/>
          <Button text="Learn More" className="rounded-4xl font-[400]"/>
        </div>
        <Location />
        </div>
        
      </section>
    </div>
  )
}

export default HeroSection