import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

const About = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-white py-20 px-8 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h1 className='text-center font-bold text-xl mb-4'>About Us</h1>
        <p
          ref={headerRef}
          className={`text-3xl lg:text-4xl text-center font-bold mb-12 ${
            headerInView ? 'fade-in' : 'opacity-0'
          }`}
        >
          Welcome to Visa and Immigration Consultancy
        </p>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Side: Image */}
          <div
            ref={imageRef}
            className={`lg:w-1/2 ${imageInView ? 'scale-up' : 'opacity-0 scale-90'}`}
          >
            <img
              src="https://ik.imagekit.io/7uve7qsipm/consultant.png?updatedAt=1725302055013"
              alt="Consultancy"
              className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div
              ref={textRef}
              className={`slide-in ${textInView ? '' : 'opacity-0 translate-y-10'}`}
            >
              <p className="text-xl font-semibold mb-4">
                Most trusted visa consultancy in Chandigarh!
              </p>
            </div>

            <div
              ref={textRef}
              className={`slide-in ${textInView ? '' : 'opacity-0 translate-y-10'}`}
            >
              <p className="text-base">
                Looking for the Best Immigration consultants in Chandigarh? Look no further! 
                At My Visa Point, we specialize in providing expert immigration services. 
                We believe in clear communication and transparency, keeping you informed 
                throughout your immigration journey. We prioritize your needs at every step 
                of the process. Our experts stay updated on the latest immigration policies 
                and procedures, ensuring that you receive the most relevant and accurate advice. 
                We cover a wide range of visa categories. Whether you’re planning to study, 
                work, and travel or settle abroad, our expert team of visa professionals is 
                here to guide you through every step of the process. From initial consultation 
                to post-approval support, we provide a full suite of immigration services, 
                saving you time and effort. With over ten years of experience in the visa 
                and immigration sector, we have successfully assisted thousands of clients 
                in achieving their immigration goals. Our high success rate speaks to our 
                expertise and dedication.
              </p>
            </div>
          </div>
        </div>

        {/* Centered Button */}
        <div ref={ctaRef} className="mt-12 flex justify-center">
          <Link to='/about-us'>
            <button className="px-8 py-4 rounded-full border border-black text-black hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
