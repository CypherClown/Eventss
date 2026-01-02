import React from 'react'
import SpecialBox from './elements/SpecialBox.jsx'
import Container from '../common/components/Container.jsx'
import { specialBoxesData, textContent } from '../data.jsx'

function Special() {
  return (
    <div>
      <Container>
        <div className="flex flex-row max-md:flex-col gap-8 md:gap-[104px]">
        <div className="box-1 max-w-[624.3143920898438px] w-full h-full px-4 sm:px-6 md:px-0">
          <img src="/assets/board.png" alt="" className='w-full h-full object-cover rounded-lg md:rounded-none' />
        </div>
        <div className="box-2 flex flex-col gap-[10px] px-4 sm:px-6 md:px-0">
          <div className="head font-[Poppins] font-[700] text-[28px] sm:text-[36px] md:text-[48px] relative">
            <span >
              <span className='relative inline-block'>What m
                <img src="/assets/line-2.png" alt="" className="absolute top-[-21px] left-0 w-full h-auto" />
              </span>
              ake us special ?
            </span>
          </div>
          <p className='font-[Poppins] font-[400] text-[14px] sm:text-[15px] md:text-[16px] max-w-[633px] w-full text-[#000000B2]'>
            {textContent.special.description}
          </p>
          <div className="boxes flex flex-row gap-[40px] sm:gap-8 md:gap-[4px] mt-8 sm:mt-10 md:mt-[50px] flex-wrap justify-center items-center">
            {specialBoxesData.map((box) => (
              <SpecialBox
                key={box.id}
                title={box.title}
                description={box.description}
                icon={box.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
    </div>
  )
}

export default Special