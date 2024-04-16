import React from 'react'
import nathural from "../assets/nature.mp4"
import Hero from '../components/Hero/Hero'
import Places from '../components/Places/Places'
import Banner from '../components/BannerImg/Banner'
import bannerImd from '../assets/Banner/wommenbanner.avif'
import Blog from './Blog'

function Home() {
  return (
    <div>
     <div>
      <div className='relative h-[700px]'>
        <video  autoPlay loop muted className='absolute top-0 right-0 h-[700px] w-full object-cover z-[-1]'>
          <source src={nathural} type='video/mp4'/>
        </video>
        <Hero/>
      </div>
      <Places/>
      <Banner img={bannerImd}/>
      <Blog/>
     </div>
    </div>
  )
}

export default Home
