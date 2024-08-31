import logo from "../assets/InitialsLogo.png";
import { FaLinkedin, FaGithub, FaCoffee } from 'react-icons/fa'

import React from 'react'

const Navbar = () => {
  return (
    <div className='mb-14 flex items-center justify-between py-2'>
      <div className='flex flex-shrink-0 items-center '>
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/saumya-srivastava-b03ba423b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Saumyasrivastava24" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://buymeacoffee.com/saumyasrivastava" target="_blank" rel="noopener noreferrer">
          <FaCoffee />
        </a>
      </div>
    </div>

  )
}

export default Navbar