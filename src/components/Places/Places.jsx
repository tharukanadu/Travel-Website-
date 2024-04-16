import React from 'react'
import PlacesCard from './PlacesCard'
import usa from '../../assets/places/usa.jpeg'
import japan from '../../assets/places/japn.jpeg'
import canada from '../../assets/places/canada.webp'
import korea from '../../assets/places/Korea.jpg'
import india from '../../assets/places/india.jpg'





function Places() {
    const PlacesData=[
        {
            img:usa,
            title:"Boat tour",
            location:"usa",
            description:"A foreign national traveling to the United States for tourism needs a visitor visa (B-2) unless qualifying for entry under the Visa Waiver Program. Tourism is a short visit for vacation, for visiting family and friends, or for medical treatment.",
            price:100,
            type:"Cultural Relax",
        },
        {
          img:japan,
          title:"Boat tour",
          location:"japan",
          description:"A foreign national traveling to the United States for tourism needs a visitor visa (B-2) unless qualifying for entry under the Visa Waiver Program. Tourism is a short visit for vacation, for visiting family and friends, or for medical treatment.",
          price:100,
          type:"Cultural Relax",
      },
      {
        img:canada,
        title:"Boat tour",
        location:"canada",
        description:"A foreign national traveling to the United States for tourism needs a visitor visa (B-2) unless qualifying for entry under the Visa Waiver Program. Tourism is a short visit for vacation, for visiting family and friends, or for medical treatment.",
        price:100,
        type:"Cultural Relax",
    },
    {
      img:korea,
      title:"Boat tour",
      location:"korea",
      description:"A foreign national traveling to the United States for tourism needs a visitor visa (B-2) unless qualifying for entry under the Visa Waiver Program. Tourism is a short visit for vacation, for visiting family and friends, or for medical treatment.",
      price:100,
      type:"Cultural Relax",
  },
  {
    img:india,
    title:"Boat tour",
    location:"india",
    description:"A foreign national traveling to the United States for tourism needs a visitor visa (B-2) unless qualifying for entry under the Visa Waiver Program. Tourism is a short visit for vacation, for visiting family and friends, or for medical treatment.",
    price:100,
    type:"Cultural Relax",
},
    ]
  return (
    <div className='py-10 bg-gray-50'>
      <div className='container'> 
        <h1 className='py-2 pl-2 my-8 text-3xl font-bold border-l-8 border-primary/50'>
            Best Places to visit
        </h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {
                PlacesData.map((item,index)=>(<PlacesCard key={index}{...item}/>
            ))
            }
        </div>
      </div>
    </div>
  )
}

export default Places
