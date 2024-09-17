import React from 'react';
import { useInView } from 'react-intersection-observer';

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
              <p className="text-lg font-semibold mb-4">
                The Global Leaders in Visa & Immigration Since 2010
              </p>
              <p className="text-base">
                With over a decade of experience, we are your trusted partner in navigating the complexities of visa and immigration processes. Our expert team is dedicated to making your transition smooth and hassle-free.
              </p>
            </div>

            <div
              ref={textRef}
              className={`slide-in ${textInView ? '' : 'opacity-0 translate-y-10'}`}
            >
              <p className="text-base">
                Our consultancy provides comprehensive services tailored to your specific needs, ensuring that you receive the best guidance and support at every step.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className={`flex items-center ${textInView ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
                <i className="fa-solid fa-check-circle text-gray-800 text-xl mr-3"></i>
                <p className="text-lg font-medium">Personalized Visa Guidance</p>
              </div>
              <div className={`flex items-center ${textInView ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
                <i className="fa-solid fa-check-circle text-gray-800 text-xl mr-3"></i>
                <p className="text-lg font-medium">Comprehensive Immigration Services</p>
              </div>
              <div className={`flex items-center ${textInView ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
                <i className="fa-solid fa-check-circle text-gray-800 text-xl mr-3"></i>
                <p className="text-lg font-medium">Expert Legal Advice & Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default About;
