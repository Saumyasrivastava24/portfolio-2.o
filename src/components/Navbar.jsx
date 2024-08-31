import logo from "../assets/InitialsLogo.png";
import {FaLinkedin, FaGithub,FaInstagram } from 'react-icons/fa'

import React from 'react'

const Navbar = () => {
  return (
    <div className=' mb-20 flex items-center justify-between py-2'>
        <div className='flex flex-shrink-0 items-center '>
         <img className="mx-2  w-20 " src={logo} alt="logo" /> 
         </div>
         <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub/>
          <FaInstagram  />
         </div>
    </div>
    
  )
}

export default Navbar