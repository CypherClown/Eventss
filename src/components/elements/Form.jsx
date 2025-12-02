import React from 'react'
import Button from './Button.jsx'

function Form() {
  return (
    <div className="w-full">
      <h2 className="font-[Poppins] font-[700] text-[35px] leading-[100%] mb-6">Sign Up</h2>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="font-[Poppins] font-[400] text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] max-w-[279px] w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="font-[Poppins] font-[400] text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] max-w-[279px] w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="font-[Poppins] font-[400] text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] max-w-[574px] w-full"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="password"
            placeholder="Password"
            className="font-[Poppins] font-[400] text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] max-w-[279px] w-full"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="font-[Poppins] font-[400] text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] max-w-[279px] w-full"
          />
        </div>
        <textarea
          placeholder="About Me"
          rows={4}
          className="font-[Poppins] font-[400] text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] max-w-[574px] w-full max-h-[124px] resize-none overflow-y-auto"
        />
        <Button text="Sign Up" className="rounded-4xl text-white font-[600] bg-[#2C49FE]"/>    
      </form>
    </div>
  )
}

export default Form