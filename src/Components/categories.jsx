import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const VisaCategoryCard = ({ title, description, imgSrc, link, index }) => (
  <Link to={link}>
    <div
      className={`relative p-6 rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl w-80 border-2 ${
        index % 2 === 0 ? 'mt-6' : '-mt-6'
      }`}
      style={{
        background: index % 2 === 0
          ? 'linear-gradient(135deg, #f0e68c, #f5deb3)' // Light colors for even index cards
          : 'linear-gradient(135deg, #faf0e6, #fdf5e6)', // Light colors for odd index cards
      }}
    >
      <div className="absolute inset-0 bg-opacity-10 transition-opacity duration-300 hover:bg-opacity-0"></div>
      <div className="flex items-center justify-center mb-4 relative z-10">
        <img
          src={imgSrc}
          alt={title}
          className="w-40 h-40 object-cover rounded-full border-4 border-white"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3> {/* Darker text */}
      <p className="text-gray-800 mb-4">{description}</p> {/* Darker text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-900 hover:text-yellow-500 transition-colors">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  </Link>
);

const Categories = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });

  const visaCategories = [
    {
      title: 'Tourist Visa',
      description:
        'Explore new destinations and cultures with ease. Our Tourist Visa service helps you plan your vacation without any hassles.',
      imgSrc:
        'https://ik.imagekit.io/6oa6qejxe/ilnur-kalimullin-ao7E5wZ77ds-unsplash.jpg?updatedAt=1725535605074',
      link: '/tourist-visa',
    },
    {
      title: 'Top-Up Visa',
      description:
        'Expand your business horizons with our Business Visa service. We facilitate smooth entry for business activities and meetings.',
      imgSrc:
        'https://ik.imagekit.io/6oa6qejxe/vasily-koloda-8CqDvPuo_kI-unsplash.jpg?updatedAt=1725534709195',
      link: '/top-up-visa',
    },
    {
      title: 'Study Visa',
      description:
        'Pursue your academic goals abroad with our Student Visa service. We assist with all the paperwork to ensure a smooth application process.',
      imgSrc:
        'https://ik.imagekit.io/6oa6qejxe/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg?updatedAt=1725533654037',
      link: '/study-visa',
    },
    {
      title: 'Spouse Visa',
      description:
        'Reunite with your partner quickly and easily. Our Spouse Visa service handles the complexities of immigration for you.',
      imgSrc: 'https://ik.imagekit.io/6oa6qejxe/2149205286.jpg?updatedAt=1725540062974',
      link: '/spouse-visa',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative py-16 px-8 text-gray-800 ${
        sectionInView ? 'fade-in' : 'opacity-0'
      } transition-opacity duration-1000`}
    >
      {/* Background image with blur effect */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/7uve7qsipm/2150806046.jpg?updatedAt=1725883301525')", // Replace with your image URL
          zIndex: '-1',
        }}
      ></div>
      {/* Overlay to slightly dim the background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-4xl font-extrabold text-gray-900 mb-6">Our Visa Services</p> {/* Darker title */}
        <p className="px-6 lg:px-12 text-gray-800 text-opacity-90"> {/* Darker paragraph text */}
          Discover our various visa categories designed to suit your needs, whether you're traveling for leisure, business, or academic purposes. Click on a card to learn more about each visa type.
        </p>
      </div>

      <div className="flex justify-center gap-12 flex-wrap">
        {visaCategories.map((category, index) => (
          <VisaCategoryCard
            key={index}
            title={category.title}
            description={category.description}
            imgSrc={category.imgSrc}
            link={category.link}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;