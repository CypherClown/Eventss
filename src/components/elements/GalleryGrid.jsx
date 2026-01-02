import React from 'react'
import { textContent } from '../../data.jsx'

function GalleryGrid() {
  return (
    <div className='gallery flex flex-col gap-4 mt-[55px]'>
      <div className="gallery flex flex-col items-center">
        <img src="/assets/divider.png" alt="gallery" />
        <p className='text-[28px] sm:text-[36px] md:text-[48px] font-[Poppins] font-[600]'>
          {textContent.gallery.title}
        </p>
        <div className="gallery-grid">
          <img src="/assets/GridImages/1.png" alt="gallery" className="gallery-item item-1" />
          <img src="/assets/GridImages/2.png" alt="gallery" className="gallery-item item-2" />
          <img src="/assets/GridImages/3.png" alt="gallery" className="gallery-item item-3" />
          <img src="/assets/GridImages/4.png" alt="gallery" className="gallery-item item-4" />
          <img src="/assets/GridImages/6.png" alt="gallery" className="gallery-item item-6" />
          <img src="/assets/GridImages/5.png" alt="gallery" className="gallery-item item-5" />
        </div>
      </div>
      
    </div>
  )
}

export default GalleryGrid