import React from 'react'
import { statisticsData, textContent } from '../data.jsx'

function Participants() {

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(/assets/blueoverlay.jpg)] min-h-[400px] md:min-h-[513px]"></div>
      <div className="absolute inset-0 bg-[#2C49FECC] min-h-[400px] md:min-h-[513px]"></div>
      <div className="relative z-[1] w-full flex flex-col items-center justify-center py-[50px] min-h-[400px] md:min-h-[513px]">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-white text-center font-[Poppins] font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] mb-3 md:mb-4">
            {textContent.participants.heading}
          </h2>
          <p className="text-white text-center font-[Poppins] text-[12px] sm:text-[14px] md:text-[16px] max-w-[800px] mx-auto mb-8 md:mb-12">
            {textContent.participants.description}
          </p>
          <div className="flex flex-row flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[120px] xl:gap-[190px]">
            {statisticsData.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center justify-center min-w-[120px] sm:min-w-[140px]">
                <div className="mb-3 md:mb-4 text-white">
                  {stat.icon}
                  </div>
                <div className="text-white font-[Poppins] font-[700] text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] mb-1 md:mb-2">
                {stat.number}
              </div>
                <div className="text-white font-[Poppins] text-[12px] sm:text-[14px] md:text-[14px] uppercase tracking-wider text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Participants
