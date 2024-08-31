import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa"
import { SiMongodb, SiHtml5, SiCss3, SiJavascript, SiRust, SiElectron } from "react-icons/si"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  animate: {
    y: [0, -15], 
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  }
});

const Skills = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 px-28'>
      <h2 className='my-20 text-center text-4xl'>Skills</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiHtml5 className='text-7xl text-orange-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiCss3 className='text-7xl text-blue-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiJavascript className='text-7xl text-yellow-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-green-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-7xl text-green-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiRust className='text-7xl text-orange-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaGitAlt className='text-7xl text-red-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaGithub className='text-7xl text-white' />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiElectron className='text-7xl text-blue-400' />
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
