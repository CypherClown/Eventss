import React from 'react'

function SpecialBox({ title, description, icon }) {
  return (
    <div> 
      <div className="group max-w-[260px] cursor-pointer text-center flex flex-col relative rounded-[5px] hover:bg-[#2C49FE] px-[20px] pt-[45px] pb-[17px] transition-all duration-300 border-[1px] border-[#2C49FE] items-center justify-center max-h-[235px] w-full h-full">
        <div className="svg absolute top-[-20%] right-auto bg-white p-[22px] border-[2px] border-[#2C49FE] rounded-[50px]">
          {icon}
        </div>
        <p className='font-[Poppins] font-[500] text-[#2C49FE] text-[25px] group-hover:text-white transition-colors duration-300'>
          {title}
        </p>
        <p className='font-[Poppins] font-[400] text-[16px] text-[#2C49FE] group-hover:text-white transition-colors duration-300'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default SpecialBox