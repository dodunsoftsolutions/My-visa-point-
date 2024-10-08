import React from 'react';
import {Helmet} from "react-helmet";

const Uk = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 via-red-700 to-white text-white text-center py-12">
        <h1 className="text-5xl font-extrabold">Study and Travel in Uk</h1>
        <p className="mt-4 text-lg">Explore your education and travel options with us!</p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Study Visa Section */}
        <section id="study-visa" className="my-8">
          <h2 className="text-3xl font-extrabold text-blue-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <img src="https://img.icons8.com/ios/50/000000/student-center.png" alt="Study Icon" className="w-12 h-12 mr-3" />
            WHY STUDY IN UK?
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
            United Kingdom or UK, is a sovereign state in Northern Europe. It is a constitutional monarchy that is made up of four separate countries. It is a member of the European Union, United Nations, the Commonwealth, NATO and the G8. It has the fifth largest economy in the world.
             London, the capital, is famous as being the largest centre of finance in the world, along with New York City in the United States.
             The teaching is interactive and extremely relevant to the industry with emphasis on practical knowledge and skills based approach. Moreover the wholesome experience creates a polished individual.
            </p>
            <h3 className="text-xl font-semibold text-green-600 mb-3">EDUCATION IN UK</h3>
            <p className="text-gray-700 mb-4">
            The UK is fast emerging as one of the most popular study destinations for education in the world. There are numerous factors that prompt international students to pursue their education in the UK. UK education equips students with unparalleled academic and professional skills and augments their personal development with an unforgettable cultural experience
            . Quality standards for UK institutions are among the best in the world.
            </p>
            
           
          </div>
          
          {/*Work while study */}
          
          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl flex items-start">
  <div className="flex-1 pr-4">
    <h3 className="text-xl font-semibold text-green-600 mb-3">WORK WHILE STUDY</h3>
    <p className="text-gray-700 mb-4">
    International students are allowed to work (including off-campus) 20 hours per week and 37.5 hours during Christmas and Summer Break. This helps the students to gain valuable exposure as well as cover part of their living expenses.
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
            Uk Tourist Visa - Visitor Visa 
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
            Planning a trip to the United Kingdom? You may need a tourist visa depending on your nationality. A UK tourist visa allows you to visit the UK for leisure, tourism, and to visit friends and family. 
            </p>
            <h3 className="text-xl font-semibold text-green-600 mb-3">Who Needs a UK Tourist Visa?</h3>
            <p className="text-gray-700 mb-4">
              There are two types of applicants:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Non-Visa Nationals: Citizens of certain countries do not require a visa to enter the UK as tourists. However, they must still meet the entry requirements</li>
              <li>Visa Nationals: Citizens of countries on the UK visa national list must apply for a UK tourist visa before traveling to the UK.</li>
            </ul>
            <h3 className="text-xl font-semibold text-green-600 mb-3 mt-6">Application Process</h3>
            <p className="text-gray-700 mb-4">
              The application process involves checking your eligibility, applying online, paying the visa fee, submitting documents, and waiting for processing.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Check Eligibility: Use the UK government’s official website to check if you need a visa and what type of visa you require.</li>
             <li>Complete Online Application: Fill out the online visa application form accurately and honestly.</li>
             <li>Book an Appointment: Schedule an appointment at your nearest visa application center to submit your documents and biometrics.</li>
            <li>Submit Documents: Gather required documents such as passport, photographs, proof of funds, travel itinerary, accommodation details, and any additional documents based on your individual circumstances.</li>
            <li>Pay Fees: Pay the visa application fee and any additional service fees.</li>
            <li>Attend Appointment: Attend your appointment at the visa application center for biometric data collection and document submission.</li>
           <li> Pay Fees: Pay the visa application fee and any additional service fees.</li>
           <li>Wait for Processing: After submitting your application, wait for it to be processed. Processing times may vary.</li>
           <li>Receive Decision: Once a decision is made on your application, you will be notified.</li>
           
            </ul>


          </div>

          {/* Visa Requirements */}
          <div className="bg-white shadow-xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Visa Requirements</h3>
            <p className="text-gray-700 mb-4">
                <li>Valid Passport: Your passport must be valid for the duration of your stay in the UK.</li>
             <li>Financial Proof: Show that you can support yourself financially during your stay.</li>
             <li>Accommodation Details: Provide proof of where you will be staying in the UK, such as hotel bookings or a letter from your host.</li>
             <li> Travel Itinerary: Outline your travel plans, including places you intend to visit and duration of stay.</li>
             <li> Purpose of Visit: Clearly state your purpose of visit as tourism or visiting friends/family.</li>
             <li> Health Insurance: It’s recommended to have travel health insurance covering your trip.</li>
             
             </p>


  
          </div>
        </section>
        {/* Spouse visa section */}
        <section id="tourist-visa" className="my-8">
          <h2 className="text-3xl font-extrabold text-blue-800 mb-6 flex items-center transition-transform transform hover:scale-105">
            <img src="https://img.icons8.com/ios/50/000000/passport.png" alt="Tourist Visa Icon" className="w-12 h-12 mr-3" />
            Uk Spouse Visa
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-700 mb-4">
           
            </p>
            <h3 className="text-xl font-semibold text-green-600 mb-3">Who can apply for UK Spouse Visa?</h3>
            <p className="text-gray-700 mb-4">
            In order to be eligible for the Spouse Visa UK, the applicant is required to meet the UK Spouse Visa requirements laid out by the immigration laws. These requirements state that the applicant and the sponsor must both:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li> Be at least 18 years old;</li>
              <li> Be in a genuine and subsisting relationship;</li>
              <li>Be in a valid marriage or civil partnership in accordance with the UK law (if married or in a civil partnership);</li>
              <li>Not be related to each other in a way that would be impermissible for marriage according to the UK Law;</li>
            </ul>
            <h3 className="text-xl font-semibold text-green-600 mb-3 mt-6">Requirement</h3>
            <p className="text-gray-700 mb-4">
            A qualifying UK Spouse Visa application has to meet certain requirements:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>You and your spouse must be 18 years old or over..</li>
               <li>You must have met each other and be legally married – this is to prevent arranged marriages.</li>
             <li>You must have enough money to support yourselves (and any dependents) without claiming public funds.</li>
           <li>Your sponsoring partner must earn more than £18,600 per year or have enough savings to be able to sponsor you. The minimum financial requirement is higher if they are also sponsoring dependent children (see our section on Children’s Visas below).</li>
           <li> You must have suitable accommodation for you, your spouse and any dependants.</li>
            </ul>




          </div>

        </section>
      </div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>uk visa consultants in chandigarh</title>
                <meta name="description" content="Looking for UK visa consultants in Chandigarh? My Visa Point provides expert guidance and support for all UK visa applications. Start your journey today!



" />
                <link rel="canonical" href="https://myvisapoint.com/uk" />
            </Helmet>
    </div>
  );
};

export default Uk;
