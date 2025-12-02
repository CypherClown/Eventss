import React from 'react'
import Form from './elements/Form.jsx'

function JoinUs() {
  return (
    <div>
      <div className="flex flex-row max-md:flex-col mx-auto max-w-[1322px] w-full pt-8 pb-8 md:pt-[137px] md:pb-[73px] px-4 sm:px-6 md:px-8 gap-8 md:gap-[104px]">
        <div className=" w-1/2">
            <img src="./assets/joinus.png" alt="" className='w-full h-full' />
        </div>
        <div className="box w-1/2">
        <h1 className='text-[28px] sm:text-[36px] md:text-[48px] font-[Poppins] font-[700] max-w-[338px]'>Join Us</h1>
        <p className='text-[14px] mt-3 mb-4 sm:text-[15px] md:text-[16px] max-w-[543px] font-[Poppins] font-[400] text-[#000000B2] max-w-[543px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.</p>
        <Form />
        </div>
      </div>
    </div>
  )
}

export default JoinUs