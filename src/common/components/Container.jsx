import React from 'react'

function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto max-w-[1322px] w-full pt-8 pb-8 md:pt-[137px] md:pb-[73px] px-4 sm:px-6 md:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default Container

