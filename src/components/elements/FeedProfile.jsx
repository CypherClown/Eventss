import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import ProfileCards from './ProfileCards.jsx'
import { textContent } from '../../data.jsx'

function Profile() {
  return (
    <div className='w-full h-full max-w-[1322px] mx-auto'>
      <div className='flex max-lg:flex-wrap md:flex-row gap-6 md:gap-[62px]'>
        <div className='profile-image w-full md:w-auto flex justify-center md:justify-start'>
          <img src="/assets/JhonCena.png" alt="Profile" className='max-w-[401px] w-full md:w-auto' />
        </div>
        <div className='profile-info w-full'>
          <div className="breadcrumb">
            <Link to="/" className='text-[#000000B2]'>{textContent.profile.breadcrumb.home}</Link>
            <span className='text-[#000000B2]'>{' > '}</span>
            <span className='text-[#000000B2]'>{textContent.profile.breadcrumb.feed}</span>
          </div>
          <div className="profile-name pt-4 flex flex-col lg:flex-row sm:items-center gap-4 sm:gap-8">
            <h1 className='text-[28px] sm:text-[36px] md:text-[48px] font-[Poppins] font-[600] text-center sm:text-left whitespace-nowrap'>{textContent.profile.name}</h1>
          </div>
          <div className="text-area max-w-[857px] w-full pt-4">
            <p className='text-[14px] sm:text-[15px] md:text-[16px] max-sm:text-center font-[Poppins] font-[400] text-[#666666]'>
              {textContent.profile.description}
            </p>
          </div>
          
          <div className="events pt-7">
            <p className='text-[14px] sm:text-[15px] md:text-[16px] font-[Poppins] font-[600] text-[#666666]'>
                Following Events
            </p>
            <div className="events-list flex sm:flex-row gap-4 pt-4 max-sm:flex-wrap">
              <ProfileCards
                image="/assets/bg-1.jpg"
                title="Augue etiam"
                description="Quis et id urna sagittis. Enim lacus, felis, libero sed nisl vitae blandit sociis."
              />
              <ProfileCards
                image="/assets/bg-2.jpg"
                title="Augue etiam"
                description="Quis et id urna sagittis. Enim lacus, felis, libero sed nisl vitae blandit sociis."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile