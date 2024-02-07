import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className='grid grid-cols-2 lg:grid-cols-3 mb-3 mx-4 mt-4 border px-5 border-gray-950  shadow-2xl shadow-gray-950 '>
      {/* Logo */}
      <Link to={'/'} className="flex justify-start items-center gap-1.5 w-full">
        {/* Icon */}
        <img src="https://res.cloudinary.com/dikrf4hki/image/upload/v1707284774/logo_mgmnnn.png" className=" w-22  h-20 rounded-full" alt="Navbar Icon" />

        {/* <span className='font-bold text-xl text-primary font-Noto'>FABEENO</span> */}
      </Link>

      {/* Responsive Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden bg-primary flex items-center justify-center py-2 my-8 mx-8 rounded-exl focus:outline-none focus:shadow-outline max-w-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </button>

      {/* Menu Items */}
      <div className={`lg:flex gap-2 m-auto py-2 px-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link to={'/collections'}><div>Our Collection</div></Link>
        <div className="border border-l border-gray-200" />
        <Link to={'/contact'}><div>Contact us</div></Link>
        <div className="border border-l border-gray-200" />
        <Link to={'/partners'}><div>Our Partners</div></Link>



      </div>

      {/* User Icon */}
      <Link to={user ? '/account' : '/login'} className={`flex items-center justify-end  text-white rounded-full py-2 px-3 max-w-sm `}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        {!!user && <div>{user.name}</div>}
      </Link>
    </header>


  )
}

export default Navbar
