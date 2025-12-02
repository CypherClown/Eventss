import React from 'react'

function Button({ text, className = '', ...props }) {
  return (
    <button className={`py-[11px] px-[28px] font-[Poppins] cursor-pointer ${className}`} {...props}>
      {text}
    </button>
  )
}

export default Button
