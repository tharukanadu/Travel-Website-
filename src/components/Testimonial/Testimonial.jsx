import React from 'react'
import Slider from 'react-slick'
import wommen from '../../assets/Testimonial/citywommen.avif'


const TestimonialData=[
    {
        id:1,
        name:"samual",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati iure molestiae laudantium",
        img:{wommen}
    },
    {
        id:2,
        name:"samual",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati iure molestiae laudantium",
        img:{wommen}
    },
    {
        id:3,
        name:"samual",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati iure molestiae laudantium",
        img:{wommen}
    },
    {
        id:4,
        name:"samual",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati iure molestiae laudantium",
        img:{wommen}
    },
]
function Testimonial() {
    const settings={
        dots: true,
        speed: 500,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
            breakpoint:10000,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
            },
        },
        {
            breakpoint:1024,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                initialSlide:2,
        },
    },
    {
        breakpoint:640,
        settings:{
            slidesToShow:1,
            slidesToScroll:1,
    },
},
        ]

    }
  return (
    <div className='py-10'>
      <div className="container">
        {/* header section */}
        <div className="mb-20 text-center max-w-[400px] mx-auto">
            <p className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Testimonial</p>
            <h1 className='text-3xl font-bold'>Testimonial</h1>
            <p className='text-xs text-gray-400'>{" "}Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati iure molestiae laudantium, consectetur animi sint recusandae optio mollitia. Beatae aperiam velit tempore hic ipsa sed ipsum ut temporibus nulla!</p>
        </div>
        {/* textimonianal section */}
        <Slider {...settings}>
            {
                TestimonialData.map(({id,name,text,img})=>{
                    return(
                        <div key={id} className='my-6'>
                            <div className='flex flex-col items-center justify-center gap-4 p-4 mx-4 text-center shadow-lg rounded-xl bg-primary'>
                            <img src={img} alt="" className='block mx-auto rounded-full'/>
                            <h1 className='text-xl font-bold'>{name}</h1>
                            <p className='text-sm text-gray-500'>{text}</p>
                        </div>
                        </div>
                        
                    )
                })
            }
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial
