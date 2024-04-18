import React from 'react';
import { CircleCheck, CircleMinus, CircleX } from 'lucide-react';

const PricingSection = () => {
    return (
        <div className="relative min-h-[800px]">
            <div className='absolute w-1 h-1 -mt-20' id='pricing'></div>
            <div className="text-center">
                <span className='h-6 px-2 py-1 text-2xl font-medium text-orange-500 uppercase rounded-full bg-neutral-900 sm:text-3xl lg:text-4xl' >
                    Pricing
                </span>
                <h2 className="text-3xl tracking-wide mt-7 sm:text-5xl lg:text-6xl lg:mt-15">
                    Choose a <span className='text-transparent bg-gradient-to-bl from-orange-500 to-red-700 bg-clip-text'>Plan</span>
                </h2>
            </div>
            
            {/* Centering the content */}
            <div className="flex justify-center mt-10 lg:mt-20">
                <div className="flex flex-wrap justify-center w-full max-w-4xl">
                    <div className="w-full px-4 mb-8 sm:w-1/2 lg:w-1/3">
                        <div className="p-8 rounded-lg bg-neutral-900">
                            <h3 className="mb-4 text-2xl font-bold text-orange-500">Basic</h3>
                            <ul className="mb-6 text-base text-neutral-300">
                                <li><CircleCheck className="inline-block mr-2" /> Rich text editing</li>
                                <li><CircleCheck className="inline-block mr-2" /> Real-time collaboration</li>
                                <li><CircleCheck className="inline-block mr-2" /> Version history</li>
                                <li><CircleMinus className="inline-block mr-2" /> Cloud storage integration (Limited)</li>
                                <li><CircleMinus className="inline-block mr-2" /> Distraction-free writing mode (Not Included)</li>
                                <li><CircleMinus className="inline-block mr-2" /> Export to various formats (Not Included)</li>
                            </ul>
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-lg text-neutral-400">Price</span>
                                <span className="text-xl font-bold text-orange-500">₹99</span>
                            </div>
                            <button className="px-6 py-2 bg-orange-500 rounded-md text-neutral-900 hover:bg-orange-600 focus:outline-none focus:bg-orange-600">Choose Plan</button>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-8 sm:w-1/2 lg:w-1/3">
                        <div className="p-8 rounded-lg bg-neutral-900">
                            <h3 className="mb-4 text-2xl font-bold text-orange-500">Pro</h3>
                            <ul className="mb-6 text-lg text-neutral-300">
                                <li><CircleCheck className="inline-block mr-2" /> Rich text editing</li>
                                <li><CircleCheck className="inline-block mr-2" /> Real-time collaboration</li>
                                <li><CircleCheck className="inline-block mr-2" /> Version history</li>
                                <li><CircleCheck className="inline-block mr-2" /> Cloud storage integration</li>
                                <li><CircleMinus className="inline-block mr-2" /> Distraction-free writing mode (Limited)</li>
                                <li><CircleMinus className="inline-block mr-2" /> Export to various formats (Not Included)</li>
                            </ul>
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-lg text-neutral-400">Price</span>
                                <span className="text-xl font-bold text-orange-500">₹149</span>
                            </div>
                            <button className="px-6 py-2 bg-orange-500 rounded-md text-neutral-900 hover:bg-orange-600 focus:outline-none focus:bg-orange-600">Choose Plan</button>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-8 sm:w-1/2 lg:w-1/3">
                        <div className="p-8 rounded-lg bg-neutral-900">
                            <h3 className="mb-4 text-2xl font-bold text-orange-500">Premium</h3>
                            <ul className="mb-6 text-lg text-neutral-300">
                                <li><CircleCheck className="inline-block mr-2" /> Rich text editing</li>
                                <li><CircleCheck className="inline-block mr-2" /> Real-time collaboration</li>
                                <li><CircleCheck className="inline-block mr-2" /> Version history</li>
                                <li><CircleCheck className="inline-block mr-2" /> Cloud storage integration</li>
                                <li><CircleCheck className="inline-block mr-2" /> Distraction-free writing mode</li>
                                <li><CircleCheck className="inline-block mr-2" /> Export to various formats</li>
                            </ul>
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-lg text-neutral-400">Price</span>
                                <span className="text-xl font-bold text-orange-500">₹299</span>
                            </div>
                            <button className="px-6 py-2 bg-orange-500 rounded-md text-neutral-900 hover:bg-orange-600 focus:outline-none focus:bg-orange-600">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
