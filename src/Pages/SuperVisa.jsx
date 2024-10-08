import React from 'react';
import {Helmet} from "react-helmet";

const SuperVisa = () => {
  return (
    
    <section className="bg-gray-100 py-16 px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-teal-600">Super Visa</h1>
      </div>

      {/* First Section: Image on Left, Content on Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://ik.imagekit.io/6oa6qejxe/2149205286.jpg?updatedAt=1725540062974"
            alt="Couple"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <p className="text-lg text-gray-700 mb-6">
           
The Super Visa is a program offered by Canada and is available to eligible parents and grandparents of Canadian citizens or permanent residents, regardless of their country of origin.
          </p>
          <p className="text-lg text-gray-700 mb-6">
           Additionally,the Super Visa can be applied for by individuals from any country, provided they meet the eligibility requirements. This means that the Super Visa is open to applicants worldwide.
          </p>
        </div>
      </div>

      {/* Second Section: Content on Left, Image on Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h6 className="text-2xl font-semibold text-teal-500 mb-4">General Requirements for All Applicants:</h6>
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              <li>Relationship: The applicant must be the parent or grandparent of a Canadian citizen or permanent resident.</li>
              <li>Admissibility: Applicants must be admissible to Canada, which includes passing security checks and medical exams.</li>
              <li>Financial Support: Applicants need a written commitment of financial support from their child or grandchild in Canada.</li>
              <li>Medical Insurance: Applicants must obtain private medical insurance from a Canadian insurance company, covering at least $100,000 for health care, hospitalization, and repatriation.</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://ik.imagekit.io/6oa6qejxe/2148619919.jpg?updatedAt=1725540094303"
            alt="Couple"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Super Visa Services in Chandigarh | My Visa Point</title>
                <meta name="description" content=" Explore our Super Visa services in Chandigarh. Get expert assistance with applications and requirements to reunite with family in Canada,USA,UK,Australia,New Zealand,Schengen. Contact us today!
" />
                <link rel="canonical" href="https://myvisapoint.com/super-visa" />
            </Helmet>
    </section>

  );
};

export default SuperVisa;
