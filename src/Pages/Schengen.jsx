import React from 'react';
import {Helmet} from "react-helmet";

const Schengen = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white text-center py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold">Study and Travel in Schengen</h1>
        <p className="mt-4 text-base md:text-lg">Explore educational and travel opportunities in the Schengen Area!</p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Study Visa Section */}
        <section id="study-visa" className="my-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-red-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <img src="https://img.icons8.com/ios/50/000000/student-center.png" alt="Study Icon" className="w-8 h-8 md:w-12 md:h-12 mr-3" />
            Why Study in the Schengen Area?
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              The Schengen Area includes some of the world’s top educational institutions, providing a wide range of academic programs and cultural experiences. With a Schengen student visa, you can study in any of the 27 European countries in the Schengen zone and travel freely between them.
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">Degrees Awarded</h3>
            <p className="text-gray-700 mb-4">
              Universities in the Schengen Area offer internationally recognized degrees across various fields. The educational system generally awards the following degrees:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Bachelor’s Degree (3 to 4 years)</li>
              <li>Master’s Degree (1 to 2 years)</li>
              <li>Doctorate or Ph.D. (3 to 5 years)</li>
            </ul>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 mb-6 flex flex-col md:flex-row items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">High-Quality Education</h3>
              <p className="text-gray-700 mb-4">
                Schengen universities are known for their academic excellence and innovative research. These institutions offer programs in various fields, including technology, science, arts, and business, providing students with a solid foundation for their careers.
              </p>
              <p className="text-gray-700">
                Scholarships and funding opportunities are available to international students, making education in the Schengen Area more affordable.
              </p>
            </div>
            <img
              src="https://ik.imagekit.io/6oa6qejxe/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg?updatedAt=1725533654037"
              alt="Education"
              className="w-full md:w-1/4 h-auto py-6 px-0 md:px-10"
            />
          </div>
        </section>

        {/* Tourist Visa Section */}
        <section id="tourist-visa" className="my-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-red-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <img src="https://img.icons8.com/ios/50/000000/passport.png" alt="Tourist Visa Icon" className="w-8 h-8 md:w-12 md:h-12 mr-3" />
            Schengen Tourist Visa
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              A Schengen tourist visa allows you to explore 27 countries in Europe on a single visa, offering a chance to experience diverse cultures, landscapes, and histories. The Schengen visa is a short-stay visa that is valid for up to 90 days within a 180-day period.
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">Who Needs a Tourist Visa?</h3>
            <p className="text-gray-700 mb-4">
              Citizens from non-Schengen countries must apply for a tourist visa to travel within the Schengen Area.
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3 mt-6">Application Process</h3>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Check Visa Requirements</li>
              <li>Complete the Visa Application</li>
              <li>Provide Supporting Documents (passport, itinerary, proof of funds)</li>
              <li>Pay Visa Fee</li>
              <li>Attend Visa Appointment</li>
            </ul>
          </div>
        </section>

        {/* Permanent Residency Section */}
        <section id="pr" className="my-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-red-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            Schengen Permanent Residency Options
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              Several Schengen countries offer pathways to permanent residency through long-term visas and immigration programs. Residency programs vary by country but can include options for skilled workers, entrepreneurs, and family reunification.
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">Pathways to Residency</h3>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Work Visas</li>
              <li>Entrepreneur Visas</li>
              <li>Family Reunification</li>
              <li>Long-Term Residency Permits</li>
            </ul>
            <p className="text-gray-700">
              Residency benefits include access to the Schengen Area's healthcare system, the ability to work and live in any Schengen country, and a pathway to citizenship in certain countries.
            </p>
          </div>
        </section>

        {/* Spouse Visa Section */}
        <section id="spouse-visa" className="my-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-red-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <img src="https://img.icons8.com/ios/50/000000/heart-with-arrow.png" alt="Spouse Visa Icon" className="w-8 h-8 md:w-12 md:h-12 mr-3" />
            Schengen Spouse Visa
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              Spouses of Schengen residents or citizens may be eligible to apply for a spouse visa, allowing them to live and work within the Schengen Area. Our team provides guidance throughout the application process, ensuring a smooth journey for your family.
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">Our Services</h3>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Initial Consultation</li>
              <li>Application Submission</li>
              <li>Documentation Review</li>
              <li>Follow-up and Communication</li>
            </ul>
          </div>
        </section>
      </div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Schengen Visa Consultants in Chandigarh | My Visa Point</title>
                <meta name="description" content=" Apply for a Schengen visa with expert guidance from My Visa Point in Chandigarh. Enjoy personalized support for your travel plans to Europe. Contact us today!

" />
                <link rel="canonical" href="https://myvisapoint.com/schengen" />
            </Helmet>
    </div>
  );
};

export default Schengen;
