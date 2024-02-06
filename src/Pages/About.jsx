import React from 'react'

const About = () => {
  return (
    <div className="flex  mt-10  px-2  justify-evenly " >
      <div className="">
        <img className="lg: w-full lg:h-screen -z-2 relative lg: -top-8 lg:-left-20 opacity-50" src="./src/assets/hand.jpeg" />
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-full  opacity-50"></div> */}
      <div className='flex flex-col px-8 mx-2 w-full absolute z-4'>
        <h2 className='font-extrabold text-2xl mt-5 lg:text-8xl text-white font-Noto text-center'>About Us</h2>
        <p className=' text-center  text-white border-2 shadow-md  shadow-gray-300 px-2 mt-8 py-2 lg:py-8 lg:font-semibold lg:text-2xl     lg:tracking-wide lg:max-w-screen-md m-auto'>Welcome to <span className='font-Noto font-semibold tracking-wider'>FABEENO</span>,
        where luxury meets perfection. Our meticulously curated collection of premium fabrics redefines opulence.Each thread undergoes rigorous quality checks, ensuring an unparalleled standard.Discover a world of sophistication with our versatile range – because at <span className='font-Noto font-semibold tracking-wider'> FABEENO </span> , excellence is woven into every fiber.</p>
      </div>
      
    </div>
  )
}

export default About