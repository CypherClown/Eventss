import React from 'react'

function ExploreCards({ image, date, title, description }) {
  return (
    <div className='max-w-[339px] w-full min-h-[354px] px-[11px] py-[15px] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300'>
      <img src={image} alt={title} className='w-full h-[173px] object-cover' />
      <div className='px-4 py-4 flex flex-col gap-2'>
        <p className='text-[12px] sm:text-[13px] md:text-[14px] font-[Poppins] font-[400] text-[#000000B2]'>{date}</p>
        <p className='text-[14px] sm:text-[15px] md:text-[16px] font-[Poppins] font-[700]'>{title}</p>
        <p className='text-[14px] sm:text-[15px] md:text-[16px] font-[Poppins] font-[400] text-[#000000B2]'>{description}</p>
      </div>
    </div>
  )
}

export default ExploreCards