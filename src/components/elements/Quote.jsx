import React from 'react'
import { textContent } from '../../data.jsx'

function Quote() {
  return (
    <div>
      <div className="quote-container flex flex-col md:flex-row justify-between gap-8 mt-[134px]">
        <div className="text flex flex-col gap-4">
            <div className="quote">
                <img src="/assets/quote.png" alt="quote" />
            </div>
            <div className="text text-[#666666] text-[14px] sm:text-[15px] md:text-[16px] font-[Poppins] font-[400] max-w-[642px] w-full">
                <p className=''>
                {textContent.quote.text}
                </p>
            </div>
        </div>
      <div className="image">
        <img src="/assets/party.png" alt="quote" />
      </div>
      </div>
    </div>
  )
}

export default Quote