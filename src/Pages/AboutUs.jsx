import React from 'react';

const ContactUs = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">About Our Company</h1>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <p className="mb-6 text-lg leading-relaxed">
              Incorporated in 2010, My Visa Point is a unique organization. We offer a broad portfolio of excellent services to
              people who are interested in STUDYING, TOURING, WORKING, and SETTLING ABROAD. We understand that immigrating to any
              country can offer people a superior quality of life, as well as the freedom to pursue personal and professional goals
              that might not be otherwise available to them in the countries in which they presently reside.
              Our pragmatic approach has been appreciated, and our reputation is built on trust, resourcefulness, integrity, and experience.
              We represent a number of top universities and colleges in major countries like the USA, Canada, Europe, the UK, Australia,
              New Zealand, Singapore, Switzerland, Dubai, Ireland, Malaysia, and more.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://ik.imagekit.io/7uve7qsipm/consultant.png?updatedAt=1725302055013"
              alt="Consultancy"
              className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
