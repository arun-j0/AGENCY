import React from 'react';
import { MailIcon, User, MessageSquare } from 'lucide-react';

const ContactUsSection = () => {
  return (
    <div className="flex justify-center sm:mb-0">
        <div className='absolute w-1 h-1 -mt-10 ' id='contact'></div>
      <div className="relative mt-8  md:min-h-[800px] w-full max-w-4xl px-5">
        <div className="text-center">
          <span className="h-6 px-2 py-1 text-2xl font-medium text-orange-500 uppercase rounded-full bg-neutral-900 sm:text-3xl lg:text-4xl">contact us</span>
          <h2 className="mt-5 text-3xl sm:text-5xl lg:text-6xl lg:mt-10">Get in touch with us</h2>
        </div>
        <div className="flex flex-col mt-10 lg:mt-20">
          <div className="flex flex-col mb-6">
            <label className="mb-1 text-xl" htmlFor="name">Your Name</label>
            <div className="flex items-center">
              <div className="flex items-center justify-center h-10 p-2 mr-4 text-orange-700 rounded-full bg-neutral-900">
                <User />
              </div>
              <input type="text" id="name" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label className="mb-1 text-xl" htmlFor="email">Your Email</label>
            <div className="flex items-center">
              <div className="flex items-center justify-center h-10 p-2 mr-4 text-orange-700 rounded-full bg-neutral-900">
                <MailIcon />
              </div>
              <input type="email" id="email" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label className="mb-1 text-xl" htmlFor="message">Message</label>
            <div className="flex items-center">
              <div className="flex items-center justify-center h-10 p-2 mr-4 text-orange-700 rounded-full bg-neutral-900">
                <MessageSquare />
              </div>
              <textarea id="message" className="w-full h-40 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"></textarea>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <button className="inline-block px-6 py-2 text-white transition duration-300 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
