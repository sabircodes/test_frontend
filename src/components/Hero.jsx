import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative max-h-screen overflow-y-hidden ">
    {/* Background Image */}
    <img
      src="https://res.cloudinary.com/dikrf4hki/image/upload/v1707284775/nbg_bwtabm.jpg"
      alt="fabric"
      className="w-full h-full object-container brightness-100 opacity-75 rounded-2xl "
    />

    {/* Overlay */}
    {/* <div className="absolute top-0 left-0 w-full h-full  opacity-5"></div> */}

    {/* Text Container */}
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center  mx-2 my-4 ">
      <div>
        <h1 className="text-5xl  lg:text-9xl md:text-9xl  font-bold  font-Noto tracking-widest pl-8 ">FABEENO</h1>
        <h3 className="mt-2  lg:text-3xl  lg:font-thin pl-8  ">QUALITY FABRIC</h3>
      </div>
    </div>


{/* 
    <div className='absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-md font-md tracking-wide'>
      <p className='text-lg font-thin' >
        Discover the essence of timeless sophistication with <span className='font-Noto text-sm'>Fabeeno</span>.
        <br/>
         We bring you exquisite Italian fabrics that blend tradition and elegance,
         <br/> 
         weaving a narrative of classic style for every purpose

      </p>
      <Link to={'/collections'}>
      <div className="mt-4 bg-primary  rounded-2xl px-4 py-2 font-bold max-w-sm text-center">
       Explore our  Collection
      </div>
      </Link>

    </div> */}
  </div>
  )
}

export default Hero
