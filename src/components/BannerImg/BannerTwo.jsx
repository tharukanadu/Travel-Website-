import React from 'react'
import gif from '../../assets/Banner/tenor.gif'



function BannerTwo() {
  return (
    <div className='min-h-[550px] bg-gray-100'>
      <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0'>
        <div className="container">
            <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2">
                {/* image section */}
                <div data>
                    <img src={gif} alt="" className='max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover'/>
                </div>
                {/* text content section */}
                <div>
                    <h1 data-aos="fade-up" className='text-3xl font-bold sm:text-4xl'>
                        Explore all corners of the world with us
                    </h1>
                    <p className='text-sm leading-8 tracking-wide text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur tempora nostrum qui hic? Et sed ducimus voluptate unde placeat iusto quia vero? Aspernatur eligendi quo error nostrum hic labore.</p>
                    <div>
                        <div className='space-y-6'>
                            <div className="flex">
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default BannerTwo
