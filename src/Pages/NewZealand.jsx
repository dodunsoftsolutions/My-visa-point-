import React from 'react';
import {Helmet} from "react-helmet";

const NewZealand = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white text-center py-12">
        <h1 className="text-5xl font-extrabold">Study and Travel in New Zealand</h1>
        <p className="mt-4 text-lg">Explore educational and travel opportunities in New Zealand!</p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Study Visa Section */}
        <section id="study-visa" className="my-8">
          <h2 className="text-3xl font-extrabold text-red-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <img src="https://img.icons8.com/ios/50/000000/student-center.png" alt="Study Icon" className="w-12 h-12 mr-3" />
            New Zealand Study Visa - Education System
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              NZ government-funded schooling system provides a comprehensive curriculum of academic, sporting, and skills-based learning options, in a positive environment. Most schools, even those in inner-city areas, have their own playing fields, gymnasiums, and swimming pools.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 flex flex-col md:flex-row items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="md:w-2/3 w-full pr-4">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">A High-Quality Education</h3>
              <p className="text-gray-700 mb-4">
                NZ education system is known for its high standards, requiring fair academic grades. Eminence Education helps facilitate student visa applications for New Zealand. We assist in university and course selection, ensuring you make informed decisions.
              </p>
              <p className="text-gray-700">
                Study expenses are comparatively low, and students can benefit from part-time job opportunities during their education.
              </p>
            </div>
            <img 
              src="https://ik.imagekit.io/6oa6qejxe/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg?updatedAt=1725533654037" 
              alt="Education" 
              className="w-full md:w-1/4 h-40 object-cover mt-6 md:mt-0"
            />
          </div>
        </section>

        {/* Tourist Visa Section */}
        <section id="tourist-visa" className="my-8">
          <h2 className="text-3xl font-extrabold text-red-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <img src="https://img.icons8.com/ios/50/000000/passport.png" alt="Tourist Visa Icon" className="w-12 h-12 mr-3" />
            New Zealand Tourist Visa
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              This visa allows you to stay in New Zealand for tourism, visiting family or friends, or engaging in short-term courses or programs.
            </p>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Who Needs a Tourist Visa?</h3>
            <p className="text-gray-700 mb-4">
              - Citizens of visa waiver countries can travel to New Zealand for up to 3 months without a visa.
              - Citizens from non-visa waiver countries must apply for a Visitor Visa.
            </p>
            <h3 className="text-xl font-semibold text-blue-600 mb-3 mt-6">Application Process</h3>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Check Eligibility</li>
              <li>Complete Online Application</li>
              <li>Gather Documents</li>
              <li>Pay Fees</li>
              <li>Submit Application</li>
              <li>Attend Biometrics Appointment (if required)</li>
            </ul>
          </div>
        </section>

        {/* Permanent Residency Section */}
        <section id="pr" className="my-8">
          <h2 className="text-3xl font-extrabold text-red-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <i className="fas fa-house mr-3"></i>
            New Zealand Permanent Residency
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              New Zealand offers various pathways for individuals and families to obtain permanent residency (PR).
            </p>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Pathways to PR</h3>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Skilled Migrant Category (SMC)</li>
              <li>Family Sponsorship</li>
              <li>Business and Investor Immigration</li>
              <li>Long-Term Skill Shortage List (LTSSL)</li>
            </ul>
            <h3 className="text-xl font-semibold text-blue-600 mb-3 mt-6">Application Process</h3>
            <p className="text-gray-700">
              The PR application process includes choosing a pathway, gathering documents, completing the online application, paying fees, and attending medical and biometric appointments.
            </p>
          </div>
        </section>

        {/* Spouse Open Work Permit Section */}
        <section id="sowp" className="my-8">
          <h2 className="text-3xl font-extrabold text-red-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <img src="https://img.icons8.com/ios/50/000000/heart-with-arrow.png" alt="Spouse Visa Icon" className="w-12 h-12 mr-3" />
            New Zealand Spouse Visa
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              The New Zealand Spouse Visa allows spouses or partners of New Zealand citizens or residents to live together as a family.
            </p>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Services</h3>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Initial Assessment</li>
              <li>Application Submission</li>
              <li>Communication and Follow-up</li>
              <li>Interview Preparation</li>
              <li>Post-Approval Support</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Contact us to schedule a consultation and start your journey to reunite with your loved one in New Zealand.
            </p>
          </div>
        </section>
      </div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>New Zealand Visa Consultants in Chandigarh | My Visa Point</title>
                <meta name="description" content=" Looking to apply for a New Zealand visa? My Visa Point in Chandigarh offers expert guidance and support for a smooth application process. Contact us today!

" />
                <link rel="canonical" href="https://myvisapoint.com/newzealand" />
            </Helmet>
    </div>
  );
}

export default NewZealand;
