import React from 'react';

const SpouseVisa = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h5 className="text-4xl font-bold text-teal-600">Spouse Visa</h5>
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
            Applying for a spouse visa can be a great option for couples who want to build a life together in the United States. One of the main advantages of a spouse visa is that it allows the spouse of a foreign country citizen to live and work in the Foreign Country permanently. This can be especially beneficial for couples who want to start a family, buy a home, or pursue career opportunities together.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Additionally, a spouse visa can provide a sense of security and stability for the couple. It allows them to live together in the Foreign Country without worrying about the spouse's immigration status.
          </p>
        </div>
      </div>

      {/* Second Section: Content on Left, Image on Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h6 className="text-2xl font-semibold text-teal-500 mb-4">Benefits of Applying for a Spouse Visa</h6>
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              <li>Allows the spouse to live and work in the Foreign Country permanently</li>
              <li>Provides a clear path to citizenship (e.g., U.S., Australia, Canada)</li>
              <li>Offers a sense of security and stability for the couple</li>
              <li>Allows the couple to start a family, buy a home, or pursue career opportunities together</li>
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
    </section>
  );
};

export default SpouseVisa;
