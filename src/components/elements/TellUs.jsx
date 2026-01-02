import React from 'react'
import { textContent } from '../../data.jsx'

function TellUs() {
  return (
    <div>
        <div className="tell-us-container flex flex-col items-center justify-center mt-[55px]">
        <img src="/assets/divider.png" alt="tell us" />
        <p className='text-[28px] sm:text-[36px] md:text-[48px] font-[Poppins] font-[600]'>
          {textContent.tellUs.title}
        </p>
        <p className='text-[14px] sm:text-[15px] md:text-[16px] font-[Poppins] font-[400] max-w-[719px] text-center w-full text-[#000000B2]'>
        {textContent.tellUs.description}        </p>
        </div>
    </div>
  )
}
export default TellUs