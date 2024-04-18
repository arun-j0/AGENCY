import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Star, StarOff } from 'lucide-react';

function TestimonialSection() {
 
  const generateRating = () => {
    return Math.random() < 0.5 ? <Star size={24} /> : <StarOff size={24} />;
  };

  const testimonials = [
    {
      content: "MyWord transformed my writing process; its clean interface and powerful features make writing a joy",
      author: "John Doe",
    },
    {
      content: "Excellent work! The team went above and beyond to deliver outstanding results. Very satisfied!",
      author: "Jane Smith",
    },
    {
      content: "Professionalism at its best! I couldn't be happier with the outcome. Thank you!",
      author: "Michael Johnson",
    },
    {
      content: "Indispensable for me, MyWord's ease of use and seamless syncing across devices shine",
      author: "Emily Brown",
    },
    {
      content: "MyWord is a game-changer; real-time collaboration and version history ensure productivity",
      author: "David Wilson",
    },
    {
      content: "MyWord simplifies my workflow; intuitive design and handy features make writing a breeze",
      author: "Sarah Davis",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '50px',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: (
      <div className="absolute z-50 slick-prev slick-arrow left-10 md:left-5 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
      </div>
    ),
    nextArrow: (
      <div className="absolute z-50 slick-prev slick-arrow right-10 md:right-20 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative mt-6 mb-4 text-white" > 
      <div className='absolute w-1 h-1 -mt-36' id='testimonials'></div>
      <div className="container px-5 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-orange-500"><span className='px-3 py-1 rounded-full bg-neutral-900'>TESTIMONIALS</span></h2> 
        <div className="max-w-screen-lg md:ml-60">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='px-2'>
                <div className="p-8 overflow-hidden rounded-lg h-80 bg-neutral-900"> 
                  <div className="flex items-center mb-4">
                    <Star size={24} />
                    <Star size={24} />
                    <Star size={24} />
                    <Star size={24} />
                    {generateRating()}
                  </div>
                  <p className="text-lg text-neutral-300">{testimonial.content}</p>
                  <p className="mt-4 text-sm text-neutral-400">- {testimonial.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
    </section>
  );
}

export default TestimonialSection;