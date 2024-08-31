import React from 'react'
import AboutMe from '../assets/AboutMe.jpg'
import ProfilePic from '../assets/ProfilePic.jpg'
import { ABOUT_CONTENT } from '../../constants'
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 '>
            <h2 className='my-16 text-center  text-4xl'>About
                <span className='text-neutral-500 ml-2 '>Me</span>
            </h2>
            <div className='flex flex-wrap  items-center lg:gap-0 gap-10 '>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2 lg:p-2 '>
                    <div className='flex items-center justify-center '>
                        <img className='rounded-xl h-[320px] w-[300px] object-cover' src={ProfilePic} alt="" />
                    </div>
                   
                </motion.div>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2 '>
                    <div className='flex justify-center lg:justify-start'>
                    <p className=' max-w-xl  '>{ABOUT_CONTENT}</p>
                    </div>
                    </motion.div>
            </div>

        </div>
    )
}

export default About