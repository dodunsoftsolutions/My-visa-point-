import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const ApprovedVisas = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Laptop screen size
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Tablet screen size
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Phone screen size
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    {
      image: 'https://ik.imagekit.io/devhm/av3?updatedAt=1726680687070',
      heading: 'Visa Approved for USA',
      description: 'Your visa to the USA has been successfully approved.',
    },
    {
      image: 'https://ik.imagekit.io/devhm/av1?updatedAt=1726680687081',
      heading: 'Visa Approved for Canada',
      description: 'Your visa to Canada has been successfully approved.',
    },
    {
      image: 'https://ik.imagekit.io/devhm/av2?updatedAt=1726680687144',
      heading: 'Visa Approved for Australia',
      description: 'Your visa to Australia has been successfully approved.',
    },
    {
      image: 'https://ik.imagekit.io/devhm/av4?updatedAt=1726680687121',
      heading: 'Visa Approved for Australia',
      description: 'Your visa to Australia has been successfully approved.',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-full mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Approved Visas</h2>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative px-4"> {/* Increased padding between cards */}
              <img
                src={slide.image}
                alt={slide.heading}
                className="w-full h-auto object-center rounded-lg shadow-lg mb-4" 
              />
              <div className="absolute inset-0  rounded-lg flex flex-col justify-center items-center text-white p-4">
              
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ApprovedVisas;
