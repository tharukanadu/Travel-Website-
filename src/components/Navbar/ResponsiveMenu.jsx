import React from 'react'
import { Link } from 'react-router-dom'

const navbarLinks=[
    {
        name:"Home",
        link:"/",
    },
    {
        name:"About",
        link:"/about",
    },
    {
        name:"Blog",
        link:"/blog",
    },
    {
        name:"Best Places",
        link:"/places",
    },
]

function ResponsiveMenu({showMenu,setShowMenu}) {
  return (
    <div className={`${showMenu ? "left-0" : "left-[100%]" }fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
      
      <div className="Navbar_card">
        {/* top section */}
        <div>
            <div className='flex items-center justify-start gap-4'>
            <div className='text-gray-500'>
            <h1> Hello user</h1>
            <h1 className='text-sm text-slate-500'>Premium user</h1>
            </div>
            </div>  
           
        </div>
        {/* navbar section */}
        <div className='mt-12 text-black'>
            <ul className='space-y-4 text-xl'>
                {navbarLinks.map(({name,link})=>(
                    <li>
                        <Link to={link}
                        onClick={()=>setShowMenu(false)}
                        className='inline-block mb-5'
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveMenu
