import React, { useEffect, useState } from 'react'
import Button from './elements/Button.jsx'

function NavigationBar() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
        <div className={`fixed top-0 left-0 right-0 w-full h-[80px] bg-black/50 backdrop-blur-sm z-[9] transition-opacity duration-300 ${hasScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>
        <nav className="flex flex-row flex-wrap fixed top-0 left-0 right-0 w-full z-[10] mx-auto  px-4 justify-between max-w-[1322px] mx-auto items-center">
                    <ul>
                        <li
                            className=" items-center font-bold gap-[15px] flex flex-row font-[Poppins] logo max-md:fixed z-1 max-md:text-[20px] text-[36px] text-[#01C8FF]">
                            <span><img src="./assets/logo.png" alt=""
                                    className="max-h-[66px] h-[100%] w-full max-w-[98px]" /></span><span className="flex gap-0">
                                <span className="text-[#2C49FE] font-[Poppins] text-[36px] max-sm:text-[20px]">Events</span>
                                <span className="text-[#01C8FF] font-[Poppins] text-[36px] max-sm:text-[20px]">Free</span>
                            </span>
                        </li>
                    </ul>
                    <input type="checkbox" id="check" hidden />
                    <label htmlFor="check" className="menu-icon right-[20px] top-[30px] fixed">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <ul className="nav-links text-white flex flex-row items-center flex-wrap gap-[64px] font-[Poppins]">
                        <li className="hover:font-[600]">HOME</li>
                        <li className="hover:font-[600]">EVENTS</li>
                        <li className="hover:font-[600]">FEED</li>
                        <li className="hover:font-[600]">USER NAME</li>
                        <li className="font-[600]">
                            <Button
                                text="Log Out"
                                className="rounded-4xl bg-[#2C49FE]"
                            />
                        </li>
                    </ul>
                </nav>
    </div>
  )
}

export default NavigationBar