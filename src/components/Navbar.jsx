import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png';
import LoginSignupForm from './LogInSignUpFform'; 

const Navbar = () => {
    const [mobnav, setMobnav] = useState(false);
    const [showLoginSignupForm, setShowLoginSignupForm] = useState(false); 

    const handleNav = () => {
        setMobnav(!mobnav);
    }

    const handleMenuItemClick = () => {
        setMobnav(false); 

    }

    const toggleLoginSignupForm = () => {
        setShowLoginSignupForm(!showLoginSignupForm); 
    }

    return (
        <nav className='sticky top-0 z-50 py-3 border-b backdrop-blur-lg border-neutral-700/80'>
            <div className='container relative px-4 mx-auto text-sm' >
                <div className='flex items-center justify-between'>
                    <div className='flex items-center flex-shrink-0'>
                    <a href="#home"><img className='w-10 h-10 mr-2' src={logo} alt="logo" /> </a>
                        <span className='text-xl tracking-tight'>MyWord</span>
                    </div>
                    <ul className='hidden space-x-12 lg:flex ml-14 '>
                        <li>
                            <a href="#features" onClick={handleMenuItemClick}>Features</a>
                        </li>
                        <li>
                            <a href="#pricing" onClick={handleMenuItemClick}>Pricing</a>
                        </li>
                        <li>
                            <a href="#testimonials" onClick={handleMenuItemClick}>Testimonial</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={handleMenuItemClick}>Contact Us</a>
                        </li>
                    </ul>
                    <div className='items-center justify-center hidden space-x-2 lg:flex'>
                        <button onClick={toggleLoginSignupForm} className='px-3 py-2 border rounded-md'>Sign Up</button>
                        <button onClick={toggleLoginSignupForm} className='px-3 py-2 text-white rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Log In</button>
                    </div>
                    <div className='flex-col justify-end lg:hidden md:flex'>
                        <button onClick={handleNav}>
                            {mobnav ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobnav && (
                    <div className='fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 lg:hidden bg-neutral-900'>
                        <ul>
                            <li className='py-4'>
                                <a href="#features" onClick={handleMenuItemClick}>Features</a>
                            </li>
                            <li className='py-4'>
                                <a href="#pricing" onClick={handleMenuItemClick}>Pricing</a>
                            </li>
                            <li className='py-4'>
                                <a href="#testimonials" onClick={handleMenuItemClick}>Testimonials</a>
                            </li>
                            <li className='py-4'>
                                <a href="#contact" onClick={handleMenuItemClick}>Contact Us</a>
                            </li>
                        </ul>
                        <div className='flex space-x-6'>
                            <button onClick={toggleLoginSignupForm} className='px-3 py-2 border rounded-md'>Sign Up</button>
                            <button onClick={toggleLoginSignupForm} className='px-3 py-2 text-white rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Log In</button>
                        </div>
                    </div>
                )}
                {showLoginSignupForm && <LoginSignupForm onClose={toggleLoginSignupForm} />} 
            </div>
        </nav>
    );
}

export default Navbar;
