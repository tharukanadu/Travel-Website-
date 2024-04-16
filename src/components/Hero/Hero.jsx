import React from 'react'

function Hero() {
    const [priceValue,setPriceValue]=React.useState(40);
  return (
    <div className='h-full bg-black/20'>
        <div className="flex items-center justify-center h-full p-4 bg-primary/10">
            <div className="container grid grid-cols-1 gap-4">
                {/* text content section */}
                <div data-aos="fade-up" className='text-white'>
                    <p>Our Packages</p>
                    <p data-aos="fade-up" data-aos-delay="300" className='font-bold'>Search your Destination</p>
                </div>
                {/* form section */}
                <div className='relative p-4 space-y-4 bg-white rounded-md'>
                    <div className="grid grid-cols-1 py-3 sm:grid-cols-3">
                        <div>
                            <label htmlFor="destination" className='opacity-70'>Search your Destination</label>
                            <input type="text" name="destination" placeholder='Sri Lanka' className='w-full p-2 my-2 bg-gray-100 rounded-full range accent-primary focus:outline-primary focus:outline outline-1' />
                        </div>
                        <div>
                            <label htmlFor="destination" className='opacity-70'>Date</label>
                            <input type="date" name='destination' id='destination' className='w-full p-2 my-2 bg-gray-100 rounded-full placeholder-slate-400 focus:outline-primary focus:outline outline-1' />
                        </div>
                        <div>
                            <label htmlFor="destination" className='block opacity-70'>
                                <div className="flex items-center justify-between w-full">
                                    <p>Max Price</p>
                                    <p className="text-xl font-bold">${priceValue}</p>
                                </div>
                            </label>
                            <div className="flex items-center justify-center p-2 bg-gray-100 rounded-full">
                                <input type="range" name='destination' id='destination' className='w-full h-2 my-2 rounded-full appearance-none bg-gradient-to-r from-primary to-secondary' min="150" max="1000" step="10" value={priceValue} onChange={(e)=>setPriceValue(e.target.value)} />
                            </div>
                        </div>
                    </div>
                      {/* button section */}
            <button className='absolute px-4 py-2 text-white duration-200 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105 -bottom-5 left-1/2'>Search Now</button>
                </div>
            </div>
          
        </div>
    </div>
  )
}

export default Hero
