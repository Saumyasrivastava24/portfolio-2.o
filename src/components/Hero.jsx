import React from 'react'
import { HERO_CONTENT } from '../../constants'
import ProfilePic from '../assets/ProfilePic.jpg'
import AboutMe from '../assets/AboutMe.jpg'

import { motion } from "framer-motion"

const container = (delay) => ({
  hidden :{x:100 , opacity:0},
  visible : {
    x:0,
    opacity:1,
    transition:{
      duration:0.5,
      delay:delay
    },
  },
  });

const Hero = () => {
  return (
    <div className='border-b  border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 
                variants={container(0)}
                initial='hidden'
                animate='visible'
                className='pb-10 text-6xl font-thin tracking-tight lg:text-6xl lg:mt-16'>Saumya Srivastava </motion.h1>
                <motion.span  variants={container(0.5)}
                initial='hidden'
                animate='visible'className='bg-gradient-to-tr from-pink-300 to via-slate-500 to-purple-500 bg-clip-text text-2xl tracking tight text-transparent'>Full Stack Developer</motion.span>
                <motion.p  variants={container(1)}
                initial='hidden'
                animate='visible' className='my-2 max-w-xl py-6  font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                </div></div>
                <div className='w-full  lg:w-1/2 lg:p-8'>
                <div className='flex  h-[350px] justify-center'>
                    <motion.img 
                    initial={{x:100 , opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:1, delay:1.2}}
                    className='rounded h-[350px] w-[250px] object-cover' src={AboutMe} alt="" /></div></div>
        </div>
    </div>
  )
}

export default Hero