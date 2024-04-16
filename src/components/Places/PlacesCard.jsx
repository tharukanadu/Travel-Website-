import React from 'react'

function PlacesCard({img,title,location,description,price,type}) {
  return (
    <div className='transition-all duration-500 shadow-lg cursor-pointer hover:shadow-xl'>
      <div className='overflow-hidden'>
        <img src={img} alt="" className='mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110'/>
        </div>   
        <div className='p-3 space-y-2'>
          <h1 className='text-xl font-bold line-text-xl'>{title}</h1>
          <div className="flex items-center gap-2 opacity-70">
            <span>{location}</span>
          </div>
          <p className='line-clamp-2'>{description}</p>
          <div className="flex items-center justify-between border-t-2 y-3 !mt-3">
            <div className='opacity-70'>
              <p>{type}</p>
            </div>
            <div>
              <p className='text-2xl font-bold'>${price}</p>
            </div>
          </div>
          </div>   
    </div>
  )
}

export default PlacesCard
