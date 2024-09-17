import React from 'react';
import { motion } from 'framer-motion';

const Step = ({ icon, title, description, imgSrc }) => (
  <motion.div
    className="relative w-full sm:w-80 p-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-60 rounded-lg"></div>
    <div className="relative z-10 flex flex-col items-center">
      <div className="flex items-center justify-center text-teal-500 mb-4">
        <i className={`fas ${icon} text-4xl lg:text-5xl`} aria-hidden="true"></i>
      </div>
      <h5 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">{title}</h5>
      <p className="text-sm lg:text-base text-gray-700 mb-4 text-center">{description}</p>
      <motion.img
        src={imgSrc}
        alt={title}
        className="mt-4 w-32 h-32 object-cover rounded-full border-4 border-teal-300 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      />
    </div>
  </motion.div>
);

const Progress = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto text-center px-4">
        <p className="text-lg font-semibold text-teal-600 mb-4">Our Work Progress</p>
        <h4 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-8">
          Get Your Visa Approved in 3 Easy Steps!
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Step
            icon="fa-clipboard-list"
            title="Complete Online Form"
            description="Fill out our quick and easy online form from anywhere. Your journey starts here."
            imgSrc="https://ik.imagekit.io/6oa6qejxe/3316708_493027-PH75Y5-698.jpg?updatedAt=1725537324685"
          />

          {/* Step 2 */}
          <Step
            icon="fa-file-alt"
            title="Submit Documents"
            description="Upload all necessary documents, and we'll handle the rest. Your details are safe with us."
            imgSrc="https://ik.imagekit.io/6oa6qejxe/4105860_2152177.jpg?updatedAt=1725538006773"
          />

          {/* Step 3 */}
          <Step
            icon="fa-plane-departure"
            title="Receive Your Visa"
            description="Your visa is on its way! Get ready to explore new horizons."
            imgSrc="https://ik.imagekit.io/6oa6qejxe/714619_preview.jpg?updatedAt=1725538457192"
          />
        </div>
      </div>
    </section>
  );
};

export default Progress;
