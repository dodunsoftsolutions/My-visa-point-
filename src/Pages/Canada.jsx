import React from 'react';
import {Helmet} from "react-helmet";

const Canada = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white text-center py-12">
        <h1 className="text-5xl font-extrabold">Study and Travel in Canada</h1>
        <p className="mt-4 text-lg">Explore educational and travel opportunities in Canada!</p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Study Visa Section */}
        <section id="study-visa" className="my-8">
          <h2 className="text-3xl font-extrabold text-red-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <img src="https://img.icons8.com/ios/50/000000/student-center.png" alt="Study Icon" className="w-12 h-12 mr-3" />
            Canada Study Visa - Education System
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              The placement figures and career opportunities for graduates from Canadian universities are remarkably high. Canadian schools are ranked among the top ten institutions globally, attracting students each year. The country invests over 30 billion dollars annually in post-secondary education.
            </p>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Degrees Awarded</h3>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Certificate Level (one year)</li>
              <li>Diploma Level (two years)</li>
              <li>Advanced Diploma (three years)</li>
              <li>Fast Track Diplomas (1 or 2 years)</li>
              <li>Post-Graduate Diplomas (one or two years)</li>
              <li>Master’s Degree (one to two years)</li>
              <li>Doctorate or Ph.D. (four to seven years)</li>
            </ul>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 flex items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-full md:w-1/2 pr-4">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">A High-Quality Education</h3>
              <p className="text-gray-700 mb-4">
                Canadian universities maintain high standards and are consistently ranked among the best in global rankings. Canada offers low tuition fees compared to the US, UK, and Australia.
              </p>
            </div>
            <img 
              src="https://ik.imagekit.io/6oa6qejxe/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg?updatedAt=1725533654037" 
              alt="Education" 
              className="hidden md:block w-1/4 h-30 py-6 px-10"
            />
          </div>
        </section>

        {/* Tourist Visa Section */}
        <section id="tourist-visa" className="my-8">
          <h2 className="text-3xl font-extrabold text-red-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <img src="https://img.icons8.com/ios/50/000000/passport.png" alt="Tourist Visa Icon" className="w-12 h-12 mr-3" />
            Canada Tourist Visa - Temporary Resident Visa (TRV)
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              Planning a trip to Canada for leisure or to visit family? You may need a tourist visa, known as a Temporary Resident Visa (TRV).
            </p>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Who Needs a Tourist Visa?</h3>
            <p className="text-gray-700 mb-4">
              Visa-Exempt Countries: Citizens of some countries do not need a tourist visa but must obtain an Electronic Travel Authorization (eTA) for air travel.
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
            <i className="fa-solid fa-house w-12 h-12 mr-3"></i>
            Canada Permanent Residency
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              Canada offers multiple pathways to permanent residency (PR), including Express Entry, Provincial Nominee Programs, Family Sponsorship, and Business Immigration.
            </p>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Pathways to PR</h3>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Express Entry System</li>
              <li>Provincial Nominee Programs (PNPs)</li>
              <li>Family Sponsorship</li>
              <li>Business Immigration Programs</li>
            </ul>
          </div>
        </section>

        {/* Spouse Open Work Permit Section */}
        <section id="sowp" className="my-8">
          <h2 className="text-3xl font-extrabold text-red-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <img src="https://img.icons8.com/ios/50/000000/heart-with-arrow.png" alt="Spouse Visa Icon" className="w-12 h-12 mr-3" />
            Canada Spouse Open Work Permit (SOWP)
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
              Our team provides personalized assistance for obtaining a Spouse Open Work Permit (SOWP). We handle initial assessments, application submissions, communication with immigration authorities, interview preparations, and post-approval support.
            </p>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Services</h3>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Initial Assessment</li>
              <li>Application Submission</li>
              <li>Communication and Follow-up</li>
              <li>Interview Preparation</li>
              <li>Post-Approval Support</li>
            </ul>
            <img src="https://img.icons8.com/ios/50/000000/handshake.png" alt="Support" className="w-16 h-16 mt-4" />
            <p className="text-gray-700 mt-4">
              Contact us to schedule a consultation and start your journey to reunite with your loved one in Canada.
            </p>
          </div>
        </section>
      </div>
      <Helmet>
                <meta charSet="utf-8" />
                <title> Canada Visa Services in Chandigarh | My Visa Point</title>
                <meta name="description" content=" Apply for a Canada visa with expert help from My Visa Point in Chandigarh. Get personalized support and guidance for a smooth application process. Contact us!

" />
                <link rel="canonical" href="https://myvisapoint.com/canada" />
            </Helmet>
    </div>
  );
}

export default Canada;
