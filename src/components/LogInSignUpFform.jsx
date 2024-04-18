import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginSignupForm = ({ onClose }) => {
    const [formMode, setFormMode] = useState(''); 
    const formRef = useRef(null);

    const toggleFormMode = () => {
        setFormMode(prevMode => (prevMode === 'login' ? 'signup' : 'login')); 
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClose]);

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.3 }}
            className="fixed left-0 z-50 flex items-center justify-center w-full h-full top-[340px]"
        >
            <div ref={formRef} className="relative flex flex-col items-center justify-center w-full max-w-md p-8 bg-gray-900 rounded-md shadow-md">
                <button onClick={onClose} className="absolute text-gray-600 top-2 right-2 hover:text-gray-800 focus:outline-none">
                    <X size={24} />
                </button>
        
                {formMode === 'login' ? (
                    <LoginForm onToggleForm={toggleFormMode} />
                ) : (
                    <SignupForm onToggleForm={toggleFormMode} />
                )}
            </div>
        </motion.div>
    );
};

const LoginForm = ({ onToggleForm }) => {
    return (
        <>
            <h2 className="mb-6 text-xl font-bold text-white">Login</h2>
            <form className="w-full">
                
                <div className="w-full mb-4">
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 text-gray-800 placeholder-gray-500 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
                </div>
                <div className="w-full mb-6">
                    <input type="password" placeholder="Password" className="w-full px-4 py-2 text-gray-800 placeholder-gray-500 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">Sign In</button>
                    <button type="button" onClick={onToggleForm} className="text-blue-500 hover:underline">Don't have an account? Sign Up</button>
                </div>
            </form>
        </>
    );
};

const SignupForm = ({ onToggleForm }) => {
    return (
        <>
            <h2 className="mb-6 text-xl font-bold text-white">Sign Up</h2>
            <form className="w-full">
                {/* Signup form fields */}
                <div className="w-full mb-4">
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 text-gray-800 placeholder-gray-500 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-green-500" />
                </div>
                <div className="w-full mb-4">
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 text-gray-800 placeholder-gray-500 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-green-500" />
                </div>
                <div className="w-full mb-6">
                    <input type="password" placeholder="Password" className="w-full px-4 py-2 text-gray-800 placeholder-gray-500 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-green-500" />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">Sign Up</button>
                    <button type="button" onClick={onToggleForm} className="text-blue-500 hover:underline">Already have an account? Log In</button>
                </div>
            </form>
        </>
    );
};

export default LoginSignupForm;
