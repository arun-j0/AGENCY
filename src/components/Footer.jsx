import React from 'react';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiFillPhone, AiFillInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="py-3 mt-5 mb-5">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <p className="py-2 font-medium text-center text-white md:text-left">&copy; 2024 Arun Kumar. All rights reserved.</p>
        <p className="py-2 font-medium text-center text-white md:text-left">
          Designed by <span className='font-bold text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text'>Arun Kumar</span>
        </p>
        <div className="flex justify-center py-2 space-x-4 md:justify-end">
          <a href="mailto:arun2310kumar2002@gmail.com" className="text-white hover:text-gray-400" target='_blank' rel='noreferrer'><AiOutlineMail /></a>
          <a href="https://github.com/arun-j0" className="text-white hover:text-gray-400" target='_blank' rel='noreferrer'><AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/arunakj" className="text-white hover:text-gray-400" target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
          <a href="tel:9488265355" className="text-white hover:text-gray-400" target='_blank' rel='noreferrer'><AiFillPhone /></a> 
          <a href="https://www.instagram.com/the._.thunder._.bolt" className="text-white hover:text-gray-400" target='_blank' rel='noreferrer'><AiFillInstagram /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
