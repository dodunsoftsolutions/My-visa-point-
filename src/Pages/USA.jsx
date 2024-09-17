import React from "react";
import { useInView } from "react-intersection-observer";

const USA = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
  });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true });
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 via-blue-700 to-red-700 text-white text-center py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Study and Travel in the USA
        </h1>
        <p className="mt-4 text-sm md:text-lg">
          Explore educational and travel opportunities in the USA!
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Study Visa Section */}
        <section id="study-visa" className="my-6 md:my-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-800 mb-4 md:mb-6 flex items-center transition-transform transform hover:scale-105">
            <img
              src="https://img.icons8.com/ios/50/000000/student-center.png"
              alt="Study Icon"
              className="w-10 h-10 md:w-12 md:h-12 mr-2 md:mr-3"
            />
            USA Study Visa - Education System
          </h2>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mb-8 md:mb-16">
            <div className="bg-white w-full lg:w-1/2 shadow-xl rounded-lg p-6 md:p-8 mb-6 lg:mb-0 transition-transform transform hover:scale-105 hover:shadow-2xl border-l-4 md:border-l-8 border-red-700">
              <p className="text-gray-700 mb-4">
                The United States of America stands as a beacon of academic
                excellence, attracting students from around the globe. With over
                4,000 accredited institutions, the U.S. education system offers
                a diverse range of programs, from liberal arts colleges to
                world-renowned research universities. These institutions are
                known for their innovative curricula, cutting-edge technology,
                and emphasis on critical thinking, making U.S. degrees highly
                respected worldwide. One of the key factors driving
                international students to the U.S. is the wealth of support
                services available. 
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <img
                src="https://ik.imagekit.io/6oa6qejxe/777.jpg?updatedAt=1725874226371"
                alt="Couple"
                className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Tourist Visa Section */}
        <section id="tourist-visa" className="my-6 md:my-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-800 mb-4 md:mb-6 flex items-center transition-transform transform hover:scale-105">
            <img
              src="https://img.icons8.com/ios/50/000000/passport.png"
              alt="Tourist Visa Icon"
              className="w-10 h-10 md:w-12 md:h-12 mr-2 md:mr-3"
            />
            USA Tourist Visa - B-2 Visa
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 transition-transform transform hover:scale-105 hover:shadow-2xl border-l-4 md:border-l-8 border-red-700">
            <p className="text-gray-700 mb-4">
              Planning a trip to the United States for tourism, vacation, or
              visiting family and friends? You may need a tourist visa, also
              known as a B-2 visa...
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-red-700 mb-2 md:mb-3">
              Who Needs a USA Tourist Visa?
            </h3>
            <p className="text-gray-700 mb-4">
              - Visa Waiver Program (VWP) Countries...
              {/* Additional information */}
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-red-700 mb-2 md:mb-3 mt-4 md:mt-6">
              Application Process
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Check Eligibility: Determine if you need a tourist visa...
              </li>
              <li>
                Complete Online DS-160 Form: Fill out the DS-160 form online...
              </li>
              {/* Additional steps */}
            </ul>
            <h3 className="text-lg md:text-xl font-semibold text-red-700 mb-2 md:mb-3 mt-4 md:mt-6">
              Requirements
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Valid Passport: Your passport must be valid for at least six
                months...
              </li>
              <li>
                DS-160 Confirmation: Print the DS-160 confirmation page...
              </li>
              {/* Additional requirements */}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default USA;
