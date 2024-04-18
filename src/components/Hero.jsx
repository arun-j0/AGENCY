import React from 'react';
import { motion } from 'framer-motion';
import hero1 from "../assets/hero/hero1.mp4";
import hero2 from "../assets/hero/hero2.mp4";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='flex flex-col items-center mt-[-60px] cursor-pointer'
    >
      <h1 className='text-4xl tracking-wide text-center sm:text-6xl lg:text-7xl'>
        Empower your words with{' '}
        <span className='text-transparent bg-gradient-to-t from-orange-500 to-red-800 bg-clip-text'>
          MyWord
        </span>{' '}
        – where creativity knows no bounds
      </h1>
      <p className='max-w-4xl mt-10 text-lg text-center text-neutral-500'>
        Empower your writing journey with MyWord - where innovation meets
        simplicity. Every word has the power to inspire and captivate,
        enhancing your creativity effortlessly and amplifying your voice!
      </p>
      <div className='flex justify-center my-8'>
        <a
          href=''
          className='px-3 py-2 text-white rounded-md bg-gradient-to-r from-orange-500 to-orange-800'
        >
          Start Free Trial
        </a>
        <a
          href=''
          className='px-3 py-2 mx-3 text-white border rounded-md'
        >
          View Plans
        </a>
      </div>
      <div className='flex justify-center mt-4'>
        <motion.video
          autoPlay
          loop
          muted
          className='w-[40%] mx-2 my-2 border border-orange-700 rounded-lg shadow-orange-400'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <source src={hero1} type='video/mp4' />
          Your Browser does not support Video tag
        </motion.video>
        <motion.video
          autoPlay
          loop
          muted
          className='w-[40%] mx-2 my-2 border border-orange-700 rounded-lg shadow-orange-400'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <source src={hero2} type='video/mp4' />
          Your Browser does not support Video tag
        </motion.video>
      </div>
      <span className='' id='features'></span>
    </motion.div>
  );
};

export default Hero;
