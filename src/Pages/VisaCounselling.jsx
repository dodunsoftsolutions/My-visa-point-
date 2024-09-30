import React from 'react';

const VisaCounselling = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      {/* First Section: Image on Left, Content on Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://ik.imagekit.io/6oa6qejxe/family-therapy-psychologist-office.jpg?updatedAt=1726566624736"
            alt="Top-Up Degree"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <h5 className="text-4xl font-bold text-teal-600 mb-4">What is Visa Counseling?</h5>
          <p className="text-lg text-gray-700 mb-6">
          Visa counseling is a service provided to assist individuals in navigating the complex process of applying for visas. This service can be crucial for ensuring that your visa application is completed accurately and efficiently. 
          </p>
          <p className="text-lg text-gray-700 mb-6">
          Visa counseling involves guidance and support in preparing and submitting visa applications. It helps applicants understand the requirements and processes associated with obtaining a visa for various purposes, such as travel, work, study, or immigration. 
          </p>
          {/* <p className="text-lg text-gray-700">
            Countries like <strong>UK</strong>, <strong>New Zealand</strong>, and <strong>Australia</strong> offer Top-Up Degrees, allowing students to quickly advance their education and gain internationally recognized qualifications.
          </p> */}
        </div>
      </div>

      {/* Second Section: Content on Left, Image on Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8 lg:mb-0">
            <h6 className="text-2xl font-semibold text-teal-500 mb-4">Services Offered by Our Visa Counselors</h6>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Determine Eligibility: Counselors assess whether you meet the requirements for the visa you are applying for, based on your background, purpose of travel, and other factors.</li>
              <li>Document Review: Review documents to ensure they meet the visa requirements and are correctly formatted.</li>
              <li>Submission Guidance: Offer advice on how and where to submit your application, whether online or in person.</li>
              <li>Mock Interviews:we Conduct practice interviews to help you prepare for the visa interview process, if applicable.
              </li>
              <li>Track Application Status: Help monitor the status of your application and provide updates.</li>
              <li>Appeals and Reapplications: Offer guidance on how to appeal a rejected application or reapply if necessary.</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://ik.imagekit.io/6oa6qejxe/team-working-together-project.jpg?updatedAt=1726566634057"
            alt="Top-Up Degree"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default VisaCounselling;
