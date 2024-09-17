import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'; 
import { useInView } from 'react-intersection-observer';

const CountryCard = ({ title, description, imgSrc, link }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      onClick={() => navigate(link)}
      className={`relative w-full h-80 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-1000 cursor-pointer ${
        inView ? 'fade-in-up' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-full h-full bg-gradient-to-br from-red-200 via-blue-200 to-green-200 p-6">
        <img
          src={imgSrc}
          alt={`${title} Flag`}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4 bg-white rounded-b-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const SupportedCountries = () => {
  const countries = [
    {
      title: 'USA',
      description: 'Unlock opportunities in the USA with expert visa and immigration support for work, study, or family.',
      imgSrc: 'https://ik.imagekit.io/6oa6qejxe/american-flag-independence-day.jpg?updatedAt=1725541710021',
      link: '/usa',
    },
    {
      title: 'Canada',
      description: 'Explore Canada’s immigration pathways with our personalized services for work and permanent residency.',
      imgSrc: 'https://ik.imagekit.io/6oa6qejxe/84.jpg?updatedAt=1725541835723',
      link: '/canada',
    },
    {
      title: 'Australia',
      description: 'Start fresh in Australia with tailored visa assistance for skilled migration, work, or family sponsorship.',
      imgSrc: 'https://ik.imagekit.io/6oa6qejxe/14261.jpg?updatedAt=1725541940311',
      link: '/australia',
    },
    {
      title: 'UK',
      description: 'Navigate UK immigration with ease. Get support for work visas and residency permits.',
      imgSrc: 'https://ik.imagekit.io/6oa6qejxe/221.jpg?updatedAt=1726218539528',
      link: '/uk',
    },
    {
      title: 'New Zealand',
      description: 'Simplify your move to New Zealand with our expert guidance on visas and immigration.',
      imgSrc: 'https://ik.imagekit.io/6oa6qejxe/184.jpg?updatedAt=1726223811493',
      link: '/newzealand',
    },
    {
      title: 'Schengen',
      description: 'Get professional assistance for Schengen visa and immigration options for work, travel, or study.',
      imgSrc: 'https://ik.imagekit.io/6oa6qejxe/2922296_27018.jpg?updatedAt=1726219087066',
      link: '/schengen',
    },
  ];

  
  


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-8 bg-gradient-to-r from-red-100 via-blue-100 to-green-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-lg font-semibold text-gray-700 mb-4">Countries We Support</p>
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Explore Your Options</h2>
        <p className="text-lg text-gray-700 mb-12">
          We offer immigration services for various countries around the world. Discover the opportunities available in your desired destination.
        </p>
      </div>
      <Slider {...settings}>
        {countries.map((country, index) => (
          <div key={index} className="px-3"> {/* Add padding between slides */}
            <CountryCard
              title={country.title}
              description={country.description}
              imgSrc={country.imgSrc}
              link={country.link}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SupportedCountries;
