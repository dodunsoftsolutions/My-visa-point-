import React from 'react';
import {Helmet} from "react-helmet";

const Australia = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 via-red-700 to-white text-white text-center py-12">
        <h1 className="text-5xl font-extrabold">Study and Travel in Australia</h1>
        <p className="mt-4 text-lg">Explore your education and travel options with us!</p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Study Visa Section */}
        <section id="study-visa" className="my-8">
          <h2 className="text-3xl font-extrabold text-blue-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <img src="https://img.icons8.com/ios/50/000000/student-center.png" alt="Study Icon" className="w-12 h-12 mr-3" />
            Australia Study Visa - Tertiary Education
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              Tertiary education in Australia comprises higher education (universities) and vocational education and training institutes (VET and TAFE colleges). Classes are generally conducted in large group lectures and small group tutorials.
            </p>
            <h3 className="text-xl font-semibold text-green-600 mb-3">Qualifications Offered</h3>
            <p className="text-gray-700 mb-4">
              Australia has a unified system of qualifications, known as the Australian Qualification Framework (AQF). The AQF ensures quality and allows students to move from one level to another easily. Here are the AQF qualifications:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li><span className="font-semibold">VET Education or Diploma Course</span>: Diploma, Associate Degree, Advanced Diploma</li>
              <li><span className="font-semibold">Undergraduate</span>: Bachelor Degree, Bachelor Degree (Honors)</li>
              <li><span className="font-semibold">Post-Graduate Courses</span>: Master’s Degree (extended, coursework, research), Doctorate</li>
            </ul>
          </div>
          
          {/* Vocational and Technical Schools */}
          {/* <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Vocational and Technical Schools</h3>
            <p className="text-gray-700 mb-4">
              Australia offers Vocational and Technical studies through TAFE and VET institutes, providing courses to equip students for specific vocations.
            </p>
            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-school-education-flatart-icons-outline-flatarticons.png" alt="Vocational School" className="w-16 h-16 mb-4" />
            <p className="text-gray-700">
              These institutes offer short courses, certificates, diplomas, and advanced diplomas to prepare students for the workforce.
            </p>
          </div> */}
          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl flex items-start">
  <div className="flex-1 pr-4">
    <h3 className="text-xl font-semibold text-green-600 mb-3">Vocational and Technical Schools</h3>
    <p className="text-gray-700 mb-4">
      Australia offers Vocational and Technical studies through TAFE and VET institutes, providing courses to equip students for specific vocations.
    </p>
    <p className="text-gray-700">
      These institutes offer short courses, certificates, diplomas, and advanced diplomas to prepare students for the workforce.
    </p>
  </div>
  {/* <img 
    src="https://ik.imagekit.io/6oa6qejxe/2336.jpg?updatedAt=1725883967496" 
    alt="Vocational School" 
    className="w-1/2 h-22"
  /> */}
</div>

        </section>

        {/* Tourist Visa Section */}
        <section id="tourist-visa" className="my-8">
          <h2 className="text-3xl font-extrabold text-blue-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <img src="https://img.icons8.com/ios/50/000000/passport.png" alt="Tourist Visa Icon" className="w-12 h-12 mr-3" />
            Australia Tourist Visa - Visitor Visa (Subclass 600)
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              Planning a holiday or visiting family in Australia? You may need a tourist visa, officially known as a Visitor Visa (Subclass 600).
            </p>
            <h3 className="text-xl font-semibold text-green-600 mb-3">Who Needs an Australian Tourist Visa?</h3>
            <p className="text-gray-700 mb-4">
              There are two types of applicants:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>ETA Eligible Passport Holders</li>
              <li>Non-ETA Eligible Passport Holders</li>
            </ul>
            <h3 className="text-xl font-semibold text-green-600 mb-3 mt-6">Application Process</h3>
            <p className="text-gray-700 mb-4">
              The application process involves checking your eligibility, applying online, paying the visa fee, submitting documents, and waiting for processing.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Check Eligibility</li>
              <li>Apply Online</li>
              <li>Pay Visa Fee</li>
              <li>Submit Documents</li>
              <li>Provide Biometrics (if applicable)</li>
            </ul>
          </div>

          {/* Visa Requirements */}
          <div className="bg-white shadow-xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Visa Requirements</h3>
            <p className="text-gray-700 mb-4">
              To obtain a tourist visa, you must have a valid passport, proof of funds, a travel itinerary, and health insurance. Make sure to meet character and health requirements as well.
            </p>
            {/* <img src="https://img.icons8.com/ios/50/000000/travel-itinerary.png" alt="Travel Itinerary" className="w-16 h-16 mt-4" /> */}
             { <img 
    src="https://ik.imagekit.io/6oa6qejxe/2336.jpg?updatedAt=1725883967496" 
    alt="Vocational School" 
    className="w-16 h-22 mt-4"></img>}
  
          </div>
        </section>
      </div>
    </div>
  );
};

export default Australia;
