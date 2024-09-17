import React from 'react';
import { motion } from 'framer-motion';

const Step = ({ icon, title, description, imgSrc }) => (
  <motion.div
    className="relative w-full lg:w-1/3 p-6 bg-white bg-opacity-80 rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 backdrop-blur-md"
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
          className="mt-4 mx-auto w-28 h-28 object-cover rounded-full border-4 border-gray-300 shadow-md"
          initial={{ opacity: 0.1, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        />
      )}
    </div>
    <div className="text-center mt-6">
      <h5 className="text-xl font-semibold text-gray-800 mb-1">{title}</h5>
      <p className="text-gray-500">— Client</p>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://ik.imagekit.io/7uve7qsipm/consultant.png?updatedAt=1725302055013)' }}>
      {/* Lighter Overlay with Blur */}
      <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-lg"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <p className="text-lg font-semibold text-white mb-4">What Our Clients Say</p>
        <h4 className="text-4xl text-white font-extrabold mb-10">
          Hear From Our Satisfied Clients
        </h4>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 lg:space-y-0 space-y-8">
          {/* Step 1 */}
          <Step
            icon="fa-user-check"
            title="Jaspreet Singh"
            description="The service was exceptional! The process was smooth and hassle-free. Highly recommended!"
            imgSrc="https://ik.imagekit.io/6oa6qejxe/WhatsApp%20Image%202024-09-06%20at%203.16.29%20PM.png?updatedAt=1725618867883"
          />

          {/* Step 2 */}
          <Step
            icon="fa-user-check"
            title="Neha Sharma"
            description="Amazing experience from start to finish. The team was incredibly supportive and the results were perfect."
            imgSrc="https://ik.imagekit.io/6oa6qejxe/WhatsApp%20Image%202024-09-06%20at%203.16.22%20PM.png?updatedAt=1725618856925"
          />

          {/* Step 3 */}
          <Step
            icon="fa-user-check"
            title="Gurpreet Singh"
            description="Professional and efficient service. They made sure I had everything I needed. Couldn't be happier!"
            imgSrc="https://ik.imagekit.io/6oa6qejxe/WhatsApp%20Image%202024-09-06%20at%203.16.25%20PM.png?updatedAt=1725618844705"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
