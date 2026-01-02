import React from 'react'

function ProfileCards({ image, title, description }) {
  return (
    <div className='profile-card w-full flex flex-row gap-2 justify-center items-center p-[13px] rounded-[20px] max-h-[138px] shadow-lg w-1/2 overflow-hidden hover:shadow-lg transition-all duration-300'>
      <div className="img flex items-center justify-center overflow-hidden max-w-[114px] max-h-[114px] w-full h-full">
        <img src={image} alt={title} className='w-[114px] h-[114px] object-cover rounded-[20px]' />
      </div>
      <div className="info flex flex-col">
        <div className="title">
            <h3 className='text-[16px] font-[Poppins] font-[700]'>{title}</h3>
        </div>
        <div className="description pt-[5px]">   
            <p className='text-[12px] font-[Poppins] font-[400] text-[#000000B2]'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCards

