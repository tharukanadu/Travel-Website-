import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/logo.jpeg"
// import { FaCaretDown } from "react-icons/fa";
// import { HiMenuAlt1 , HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from '../Navbar/ResponsiveMenu'

const DropdownLink = [
    {
        name:"Our services",
        link:"/#services"
    },
    {
        name:"Top Brands",
        link:"/#mobile brands"
    },
    {
        name:"Location",
        link:"/#location"
    },
]
function Navbar() {
    const [showMenu,setShowMenu]=useState(false);

    const toggleMenu = ()=>{
        setShowMenu(!showMenu);
    }
  return (
    <div>
      <div className="fz-[99999] ixed top-0 right-0 w-full text-black bg-white shadow-md ">
        <div className='text-white bg-gradient-to-r from-primary to-secondary '>
        <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between">
                <p>20% off on next booking</p>
                <p>Mobile no. +94761071621</p>
            </div>
        </div>
        </div>
      <div className="container py-3 sm:py-0">
        <div className="flex items-center justify-between">
            {/* logo section */}
            <div>
                <Link to="/" onClick={()=> window.scrollTo(0,0)}>
                    <img src={logo} className='h-16 rounded-s-xl' alt="" />
                </Link>
            </div>
            {/* NavLink section */}
            <div className='hidden sm:block'>
                <ul className='flex items-center gap-6'>
                    <li className='py-4'>
                        <NavLink activeClassName="active" to="/" onClick={()=> window.scrollTo(0,0)}>Home</NavLink>
                    </li>
                    <li className='py-4'>
                        <NavLink activeClassName="active" to="/blogs" onClick={()=> window.scrollTo(0,0)}>Blog</NavLink>
                    </li>
                    <li className='py-4'>
                        <NavLink activeClassName="active" to="/places" onClick={()=> window.scrollTo(0,0)}>Best Places</NavLink>
                    </li>
                    <li className='py-4'>
                        <NavLink activeClassName="active" to="/about" onClick={()=> window.scrollTo(0,0)}>About</NavLink>
                    </li>
                    {/* Dropdown section */}
                    <li className='relative py-4 group cursor-pointer:'>
                        <div className="flex items-center dropdown group">
                            <span>Quick Links</span>
                            {/* <span>
                            
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                            </span> */}
                        </div>
                        <div className='absolute -left-9 z-[999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2'>
                            <ul>
                                {DropdownLink.map((data)=>{
                                    return(
                                    <li key={data.name}>
                                        <a className="inline-block w-full p-2 rounded-md hover:bg-primary" href={data.link}>{data.name}</a>
                                    </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            {/* book now button */}
            <div className='flex items-center gap-4'>
                <button className='px-3 py-1 text-white transition-all rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:bg-gradient-to-r hover:bg-primary duration-600'>Book Now</button>
                {/* Mobile Hamburger Menu */}
                {/* <div className='block md:hidden'>
                    {showMenu?(
                        <HiMenuAlt1 onClick={toggleMenu} className="transition-all cursor-pointer size-[30]"/>
                    ):(
                        <HiMenuAlt3  onClick={toggleMenu} className="transition-all cursor-pointer size-[30]"/>
                    )}
                </div> */}
            </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
      </div>
    </div>
  )
}

export default Navbar
