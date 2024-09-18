import React from 'react';

const IeltsPte = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h5 className="text-4xl font-bold text-teal-600">IELTS/PTE</h5>
      </div>

      {/* First Section: Image on Left, Content on Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://ik.imagekit.io/6oa6qejxe/2147844692.jpg?updatedAt=1726566862697"
            alt="Travel"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <p className="text-lg text-gray-700 mb-6">
          When it comes to language proficiency tests for visa applications or immigration purposes, both the IELTS (International English Language Testing System) and PTE (Pearson Test of English) are commonly accepted. Here’s a brief overview of each and their typical use cases:
          </p> 
           <p className="text-lg text-gray-700 mb-6">
           IELTS is designed to assess the English language proficiency of non-native speakers. It is used for educational, immigration, and professional purposes.
          </p>
          <p className="text-lg text-gray-700 mb-6">
          PTE is an English language proficiency test designed to assess the ability to use English in academic and professional contexts.
          </p>
        
        </div>
      </div>

      {/* Second Section: Content on Left, Image on Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8 lg:mb-0">
            <h6 className="text-2xl font-semibold text-teal-500 mb-4">Choosing Between IELTS and PTE:</h6>
            <p className="text-gray-700 mb-4">Acceptance: Check the specific requirements of the visa or educational institution you're applying to, as some may prefer one test over the other. Both tests are widely accepted, but preferences can vary..</p>
            
          
            <p className="text-gray-700 mb-4">Test Format: Consider which test format suits you better. IELTS is known for its face-to-face Speaking test, while PTE has a computer-based Speaking test. Choose the test that aligns with your strengths and comfort level.</p>
            
          
            <p className="text-gray-700 mb-4">.Availability: Look into test availability and locations near you. Both IELTS and PTE have global testing centers, but the availability of test dates and locations may vary.</p>
            
           
            <p className="text-gray-700 mb-4">Preparation: Assess your preparation needs and resources. Both tests offer a range of preparation materials and practice tests.</p>
           
            
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://ik.imagekit.io/6oa6qejxe/2148854879.jpg?updatedAt=1726567402863"
            alt="Adventure"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      
      
    </section>
  );
};

export default IeltsPte;
