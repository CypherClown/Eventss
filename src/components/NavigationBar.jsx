import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './elements/Button.jsx'

function NavigationBar() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <div>
        <div className={`fixed top-0 left-0 right-0 w-full h-[80px] bg-black/50 backdrop-blur-sm z-[9] transition-opacity duration-300 ${hasScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>
        <nav className={`flex flex-row flex-wrap fixed top-0 left-0 right-0 w-full z-[10] mx-auto  px-4 justify-between max-w-[1322px] mx-auto items-center ${hasScrolled ? 'navbar-scrolled' : ''}`}>
                    <ul>
                        <li
                            className=" items-center font-bold gap-[15px] flex flex-row font-[Poppins] logo max-md:fixed z-1 max-md:text-[20px] text-[36px] text-[#01C8FF]">
                            <Link to="/" className="flex items-center gap-[15px]">
                            <span><img src="./assets/logo.png" alt=""
                                    className="max-h-[66px] h-[100%] w-full max-w-[98px]" /></span><span className="flex gap-0">
                                <span className="text-[#2C49FE] font-[Poppins] text-[36px] max-sm:text-[20px]">Events</span>
                                <span className="text-[#01C8FF] font-[Poppins] text-[36px] max-sm:text-[20px]">Free</span>
                            </span>
                            </Link>
                        </li>
                    </ul>
                    <input 
                      type="checkbox" 
                      id="check" 
                      hidden 
                      checked={isMenuOpen}
                      onChange={toggleMenu}
                    />
                    <label 
                      htmlFor="check" 
                      className={`menu-icon right-[20px] top-[30px] fixed cursor-pointer z-[1001] ${isMenuOpen ? 'menu-open' : ''}`}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <ul className={`nav-links flex flex-row items-center flex-wrap gap-[64px] font-[Poppins] ${isMenuOpen ? 'menu-open' : ''}`}>
                        <li className="hover:font-[600]">
                            <Link 
                              to="/" 
                              className={`max-md:text-white ${location.pathname === '/' || location.pathname === '/events' ? 'text-white' : 'text-black'}`}
                            >
                              HOME
                            </Link>
                        </li>
                        <li className="hover:font-[600]">
                            <Link 
                              to="/events" 
                              className={`max-md:text-white ${location.pathname === '/' || location.pathname === '/events' ? 'text-white' : 'text-black'}`}
                            >
                              EVENTS
                            </Link>
                        </li>
                        <li className="hover:font-[600]">
                            <Link 
                              to="/feed" 
                              className={`max-md:text-white ${location.pathname === '/' || location.pathname === '/events' ? 'text-white' : 'text-black'}`}
                            >
                              FEED
                            </Link>
                        </li>
                        <li className="hover:font-[600]">
                            <Link 
                              to="/username" 
                              className={`max-md:text-white ${location.pathname === '/' || location.pathname === '/events' ? 'text-white' : 'text-black'}`}
                            >
                              USER NAME
                            </Link>
                        </li>
                        <li className="font-[600] text-white">
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