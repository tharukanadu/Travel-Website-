import React from 'react'
import logo from '../../assets/logo.jpeg'
import footervid from '../../assets/footer/footervid.mp4'
import { Link } from 'react-router-dom'

const FooterLinks= [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];
function Footer() {
  return (
    <div className='relative py-10 overflow-hidden'>
      <video autoPlay loop muted 
      className='absolute top-0 right-0 object-cover w-full h-full overflow-hidden z-[-1]'>
        <source src={footervid}/>
      </video>
      <div className="container">
        <div className="grid py-5 rounded-t-xl bg-white/80 md:grid-cols-3 ackdrop-blur-sm">
          <div className='px-4 py-8'>
            <h1 className='flex items-center gap-3 text-xl font-bold text-justify sm:text-3xl sm:text-left'>
              <img src={logo} alt="" className='max-h-[60px]'/>
              {/* travelleGo */}
            </h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat ea placeat, enim nulla dolorem veritatis provident, consectetur temporibus dolore quas sapiente similique! Ipsam in beatae quo aut, repellendus maiores.</p>
            <br />
            <div className="flex items-center gap-3 mt-3">
              <p>Panadura,Sri lanka</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <p>+94761071621</p>
            </div>
            {/* social media */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          {/* links */}
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            {/* first col link */}
          
            {/* first link */}
             <div>
                <div className="px-4 py-8">
                  <h1 className="mb-3 text-xl font-bold text-justify sm:text-left">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* second link */}
              <div>
                <div className="px-4 py-8">
                  <h1 className="mb-3 text-xl font-bold text-justify sm:text-left">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* third link */}
              <div>
                <div className="px-4 py-8">
                  <h1 className="mb-3 text-xl font-bold text-justify sm:text-left">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </div>
        </div>
        {/* footer copyrightsection */}
        <div>
          <div className='py-5 text-center text-white border-t-2 border-gray-300/50 bg-primary '>
            @copyright 2024 All rights resourse || Mode with by TC
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
