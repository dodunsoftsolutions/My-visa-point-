import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

const Step = ({ icon, title, description, imgSrc }) => (
  <motion.div
    className="relative w-full p-6 bg-white bg-opacity-80 rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 backdrop-blur-md"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
  >
    <div className="relative">
      <blockquote className="text-gray-700 italic text-lg mb-4">
        <p>{description}</p>
      </blockquote>
      <div className="absolute top-0 right-0 -mt-12 mr-4 opacity-20 text-gray-400">
        <i className="fas fa-quote-right text-6xl"></i>
      </div>
      {imgSrc && (
        <motion.img
          src={imgSrc}
          alt={title}
          className="mt-4 mx-auto w-20 h-20 md:w-28 md:h-28 object-cover rounded-full border-4 border-gray-300 shadow-md"
          initial={{ opacity: 0.1, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        />
      )}
    </div>
    <div className="text-center mt-6">
      <h5 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">{title}</h5>
      <p className="text-gray-500 text-sm md:text-base">— Client</p>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet screens and below
        settings: {
          slidesToShow: 2, // Show 2 cards on tablet-sized screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile screens and below
        settings: {
          slidesToShow: 1, // Show only 1 card on mobile-sized screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://ik.imagekit.io/7uve7qsipm/consultant.png?updatedAt=1725302055013)' }}
    >
      {/* Lighter Overlay with Blur */}
      <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-lg"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <p className="text-lg font-semibold text-white mb-4">What Our Clients Say</p>
        <h4 className="text-3xl md:text-4xl text-white font-extrabold mb-10">
        Testimonials from Our Happy Clients!
        </h4>
        <Slider {...settings}>
          {/* Step 1 */}
          <Step
            icon="fa-user-check"
            title="Ramanpreet Kaur"
            description="The service was exceptional! The process was smooth and hassle-free. Highly recommended!"
            imgSrc="https://ik.imagekit.io/tdlebsr5e/WhatsApp%20Image%202024-09-19%20at%204.03.06%20PM.jpeg?updatedAt=1726743573781"
          />
          
          {/* Step 2 */}
          <Step
            icon="fa-user-check"
            title="Amandeep Kaur"
            description="Amazing experience from start to finish. The team was incredibly supportive and the results were perfect."
            imgSrc="https://ik.imagekit.io/tdlebsr5e/WhatsApp%20Image%202024-09-19%20at%204.03.00%20PM.jpeg?updatedAt=1726743573745"
          />

          {/* Step 3 */}
          <Step
            icon="fa-user-check"
            title="Manish"
            description="Professional and efficient service. They made sure I had everything I needed. Couldn't be happier!"
            imgSrc="https://ik.imagekit.io/tdlebsr5e/WhatsApp%20Image%202024-09-19%20at%204.03.09%20PM.jpeg?updatedAt=1726743545684"
          />

          {/* Step 4 */}
          <Step
            icon="fa-user-check"
            title="Harpreet Kaur"
            description="Truly impressed with their dedication to service. Everything was taken care of perfectly!"
            imgSrc="https://ik.imagekit.io/tdlebsr5e/WhatsApp%20Image%202024-09-18%20at%202.31.04%20PM%20(2).jpeg?updatedAt=1726652993290"
          />

          {/* Step 5 */}
          <Step
            icon="fa-user-check"
            title="Harpreet Kaur"
            description="From consultation to completion, their professionalism made this experience stress-free!"
            imgSrc="https://ik.imagekit.io/tdlebsr5e/WhatsApp%20Image%202024-09-18%20at%202.31.04%20PM%20(1).jpeg?updatedAt=1726653017942"
          />
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
