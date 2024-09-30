import React from 'react';

const InterviewPreparation = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      {/* Heading for the Interview Preparation Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-teal-600">Interview Preparation</h2>
      </div>

      {/* First Section: Image on Left, Content on Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://ik.imagekit.io/6oa6qejxe/6567.jpg?updatedAt=1726567174384"
            alt="Top-Up Degree"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
        <p  className="text-2xl text-black mb-6"> Crack Your Visa Interview In The First  Attempt with My Visapoint!</p>
          <p className="text-lg text-gray-700 mb-6">
            Preparing for a visa interview requires thorough preparation to ensure that you meet the requirements and present yourself effectively. Visa interviews are typically conducted by consular officers to assess your eligibility and intentions for traveling to their country.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We provide tailored interview coaching based on the specific type of interview (visa) to ensure that candidates understand and meet the expectations of their interviewer.
          </p>
        </div>
      </div>

      {/* Second Section: Content on Left, Image on Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8 lg:mb-0">
            <h6 className="text-2xl font-semibold text-teal-500 mb-4">How Our Company Can Help</h6>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Personalized Training: We provide tailored interview coaching based on the specific type of interview (visa, job, academic) to ensure that candidates understand and meet the expectations of their interviewer.</li>
              <li>Mock Interviews: Our mock interviews replicate real interview conditions, providing valuable practice and feedback. This helps candidates become familiar with the interview process and refine their responses.</li>
              <li>Expert Guidance: Our team consists of experts in various fields, including immigration consultants, career coaches, and academic advisors, who offer insights and advice specific to the candidate’s interview type.</li>
              <li>Document Review and Preparation: We assist in reviewing and organizing all necessary documents, ensuring that everything is accurate, complete, and ready for submission, minimizing the risk of delays or rejections.</li>
              <li>Customized Practice Questions: We provide a set of practice questions tailored to the specific interview, helping candidates prepare answers that align with their goals and the requirements of the interview.</li>
              <li>Confidence Building: Our preparation services include strategies for managing interview-related stress and anxiety, helping candidates to approach their interviews with calm and confidence.</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://ik.imagekit.io/6oa6qejxe/4691.jpg?updatedAt=1726567163088"
            alt="Top-Up Degree"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default InterviewPreparation;
