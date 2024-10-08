import React from 'react';

const TopUpVisa = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      {/* First Section: Image on Left, Content on Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://ik.imagekit.io/6oa6qejxe/vasily-koloda-8CqDvPuo_kI-unsplash.jpg?updatedAt=1725534709195"
            alt="Top-Up Degree"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <h1 className="text-4xl font-bold text-teal-600 mb-4">Top-Up Visa</h1>
          <p className="text-lg text-gray-700 mb-6">
            A Top-Up Degree is equivalent to a final year undergraduate degree. Suppose you already have a Level 5 education (graduated), you can opt for a Top-Up Degree and gain admission to the final year, which means that as a student, you can complete Level 6 of education in 1 year compared to the standard 3 years.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Some students also do a Top-Up Degree if they wish to pursue a higher degree in a different subject within the same field, and the top-up will give them insight and in-depth knowledge of the said field. For instance, a student pursuing hotel management can top-up for hotel and travel management.
          </p>
          <p className="text-lg text-gray-700">
            Countries like <strong>UK</strong>, <strong>New Zealand</strong>, and <strong>Australia</strong> offer Top-Up Degrees, allowing students to quickly advance their education and gain internationally recognized qualifications.
          </p>
        </div>
      </div>

      {/* Second Section: Content on Left, Image on Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8 lg:mb-0">
            <h6 className="text-2xl font-semibold text-teal-500 mb-4">Why Apply for a Top-Up Degree?</h6>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Enhance Skills</li>
              <li>Offer Extensive Knowledge</li>
              <li>In-depth Understanding of the Subject</li>
              <li>Pave the Way for Higher Education</li>
              <li>International Recognition</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://ik.imagekit.io/6oa6qejxe/linkedin-sales-solutions-jJFrkJP_-RA-unsplash.jpg?updatedAt=1725534688244"
            alt="Top-Up Degree"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default TopUpVisa;
