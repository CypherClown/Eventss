import React from 'react'
import Form from './elements/Form.jsx'
import Container from '../common/components/Container.jsx'
import { textContent } from '../data.jsx'

function JoinUs() {
  return (
    <div>
      <Container className="flex flex-row max-md:flex-col gap-8 md:gap-[104px]">
        <div className=" max:md:w-1/2">
            <img src="./assets/joinus.png" alt="" className='w-full max-h-[533.7595825195312px] max-w-[536.302001953125px] h-full ' />
        </div>
        <div className="box max-md:w-full md:w-1/2">
        <div className="relative max-w-[180px]">
          <img src="/assets/join-us-line.png" alt="" className="absolute top-[-9px] w-[90%]" />
          <h1 className='text-[28px] sm:text-[36px] md:text-[48px] font-[Poppins] max-w-[205px] font-[700] max-w-[338px]'>{textContent.joinUs.heading}</h1>
        </div>
        <p className='text-[14px] mt-3 mb-4 sm:text-[15px] md:text-[16px] max-w-[543px] font-[Poppins] font-[400] text-[#000000B2] max-w-[543px]'>{textContent.joinUs.description}</p>
        <Form />
        </div>
      </Container>
    </div>
  )
}

export default JoinUs