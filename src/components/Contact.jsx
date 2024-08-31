import React from 'react'
import { FaGithub, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai"; // Gmail icon
import { motion } from "framer-motion"


const Contact = () => {
  return (
    <div
    className='border-b border-neutral-900 pb-20'>
        <motion.h1
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: -100 }}
         transition={{ duration: 1 }} 
        className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='rounded-2xl border-4 border-neutral-800 p-4'>
            <a href='https://github.com/Saumyasrivastava24' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='text-7xl text-white' />
            </a>
          </motion.div>
          
          <motion.div
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -100 }}
             transition={{ duration: 1 }}
          className='rounded-2xl border-4 border-neutral-800 p-4'>
            <a href='mailto:saumyasrivastav65@gmail.com'>
              <AiOutlineMail className='text-7xl text-red-400' />
            </a>
          </motion.div>
          
          <motion.div
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1 }}
          className='rounded-2xl border-4 border-neutral-800 p-4'>
            <a href='https://t.me/ssrivastava24' target='_blank' rel='noopener noreferrer'>
              <FaTelegramPlane className='text-7xl text-blue-400' />
            </a>
          </motion.div>
          
          <motion.div
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1 }}
          className='rounded-2xl border-4 border-neutral-800 p-4'>
            <a href='https://www.instagram.com/itssaumya_24/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='text-7xl text-pink-400' />
            </a>
          </motion.div>
        </div>
    </div>
  )
}

export default Contact;
