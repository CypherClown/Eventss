import React, { useState } from 'react'
import Button from './Button.jsx'
import { textContent } from '../../data.jsx'

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    aboutMe: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="w-full">
      <h2 className="font-[Poppins] font-[700] text-[35px] leading-[100%] mb-6">{textContent.form.title}</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder={textContent.form.firstName}
            className="font-[Poppins] font-[400] text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] max-w-[279px] w-full"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={textContent.form.lastName}
            className="font-[Poppins] font-[400] text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] max-w-[279px] w-full"
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={textContent.form.email}
          className="font-[Poppins] font-[400] text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] max-w-[574px] w-full"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={textContent.form.password}
            className="font-[Poppins] font-[400] text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] max-w-[279px] w-full"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder={textContent.form.confirmPassword}
            className="font-[Poppins] font-[400] text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] max-w-[279px] w-full"
          />
        </div>
        <textarea
          name="aboutMe"
          value={formData.aboutMe}
          onChange={handleChange}
          placeholder={textContent.form.aboutMe}
          rows={4}
          className="font-[Poppins] font-[400] text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] max-w-[574px] w-full max-h-[124px] resize-none overflow-y-auto"
        />
        <Button text={textContent.form.signUp} type="submit" className="rounded-4xl max-w-[574px] text-white font-[600] bg-[#2C49FE]"/>    
      </form>
    </div>
  )
}

export default Form