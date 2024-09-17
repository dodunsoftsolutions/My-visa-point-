import React from 'react';

const TouristVisa = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h5 className="text-4xl font-bold text-teal-600">Tourist Visa</h5>
      </div>

      {/* First Section: Image on Left, Content on Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://ik.imagekit.io/6oa6qejxe/yannis-papanastasopoulos-whLWBRF1S2Y-unsplash.jpg?updatedAt=1725535559687"
            alt="Travel"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <p className="text-lg text-gray-700 mb-6">
            Are you planning to travel abroad for leisure, recreation, or cultural exploration? Applying for a tourist visa can be a crucial step in making your international travel dreams a reality. Here are some compelling reasons why people should apply for a tourist visa:
          </p>
          <p className="text-lg text-gray-700 mb-6">
            A tourist visa allows you to explore new destinations, enjoy a break from your daily routine, and create unforgettable memories. With a tourist visa, you can visit landmarks, experience diverse cultures, and engage in various recreational activities.
          </p>
        </div>
      </div>

      {/* Second Section: Content on Left, Image on Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8 lg:mb-0">
            <h6 className="text-2xl font-semibold text-teal-500 mb-4">Explore New Destinations</h6>
            <p className="text-gray-700 mb-4">A tourist visa allows you to visit new countries, experience different cultures, and explore exciting destinations. Whether it’s a historic city, a serene beach, or a bustling metropolis, your travel options are endless.</p>
            
            <h6 className="text-2xl font-semibold text-teal-500 mb-4">Relaxation and Recreation</h6>
            <p className="text-gray-700 mb-4">Traveling abroad can be a great way to unwind, relax, and recharge. With a tourist visa, you can indulge in leisure activities, such as beach vacations, spa retreats, or adventure sports, and return home feeling refreshed and revitalized.</p>
            
            <h6 className="text-2xl font-semibold text-teal-500 mb-4">Creating Unforgettable Memories</h6>
            <p className="text-gray-700 mb-4">By traveling abroad, you can experience new things, try new foods, and take part in unique activities that will leave a lasting impression on your life. From scenic landscapes to vibrant festivals, every moment can become a cherished memory.</p>
            
            <h6 className="text-2xl font-semibold text-teal-500 mb-4">Adventure and Thrills</h6>
            <p className="text-gray-700 mb-4">Traveling is an excellent way to challenge yourself and push your limits. Whether it’s hiking in the mountains, exploring underwater worlds, or navigating bustling markets, a tourist visa can open doors to thrilling adventures.</p>

            <h6 className="text-2xl font-semibold text-teal-500 mb-4">Cultural Immersion</h6>
            <p className="text-gray-700 mb-4">A tourist visa allows you to immerse yourself in different cultures. You can learn about local traditions, attend cultural festivals, and interact with locals, which enriches your understanding of the world.</p>

            <h6 className="text-2xl font-semibold text-teal-500 mb-4">Practical Tips for Tourists</h6>
            <p className="text-gray-700">
              1. Research your destination’s visa requirements well in advance.<br />
              2. Make sure your passport is valid for at least six months beyond your travel dates.<br />
              3. Purchase travel insurance to cover unexpected events.<br />
              4. Keep copies of important documents and emergency contact information.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://ik.imagekit.io/6oa6qejxe/ilnur-kalimullin-ao7E5wZ77ds-unsplash.jpg?updatedAt=1725535605074"
            alt="Adventure"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Countries Offering Tourist Visas */}
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h6 className="text-2xl font-semibold text-teal-500 mb-4">Countries Offering Tourist Visas</h6>
        <p className="text-lg text-gray-700">
          Several countries offer tourist visas, allowing travelers to explore their beautiful landscapes and cultures. Some popular destinations include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
          <li><strong>USA</strong></li>
          <li><strong>Canada</strong></li>
          <li><strong>UK</strong></li>
          <li><strong>Australia</strong></li>
          <li><strong>New Zealand</strong></li>
          <li><strong>France</strong></li>
          <li><strong>Germany</strong></li>
          <li><strong>Italy</strong></li>
          <li><strong>Japan</strong></li>
          <li><strong>Brazil</strong></li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          Whether you're planning to visit the <strong>USA</strong> to see the Grand Canyon, explore the historical sites of <strong>Italy</strong>, or relax on the beaches of <strong>Australia</strong>, obtaining a tourist visa is your gateway to international adventures.
        </p>
      </div>
    </section>
  );
};

export default TouristVisa;
