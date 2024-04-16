import React from 'react'
import BlogCard from './BlogCard'
import india from '../../assets/blog/indiatips.jpeg'
import brige from '../../assets/blog/bridge.jpeg'
import waterfall from '../../assets/blog/waterfall.jpeg'

const BlogData=[
    {
        id:1,
        image:india,
        title:"the best pace to visit india",
        description : "lorem",
        author:"jhone cena" ,
        date:"April 22 2024" 
    },
    {
        id:1,
        image:brige,
        title:"the best pace to visit india",
        description : "lorem",
        author:"jhone cena" ,
        date:"April 22 2024" 
    },
    {
        id:1,
        image:waterfall,
        title:"the best pace to visit india",
        description : "lorem",
        author:"jhone cena" ,
        date:"April 22 2024" 
    },
   
]
function BlogComp() {
  return (
    <div>
      <div data-aos="fade-up" className='container'>
        <h1 className='py-2 pl-2 my-8 text-3xl font-bold border-l-8 border-primary/50'>Our latest Blog</h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {BlogData.map((item, index)=>(
                <BlogCard key={index} {...item}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BlogComp
