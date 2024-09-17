import React, { useState, useEffect } from "react";

const UniversitySection = () => {
  const universities = [
    {
      src: "https://th.bing.com/th/id/OIP.H9wT-Hhgx_KnO1LdXeDzqgHaDv?rs=1&pid=ImgDetMain",
      alt: "STEI Institute",
    },
    {
      src: "https://www.canamgroup.com/assets/universitylogos/1658993434-college-of-the-rockies.png",
      alt: "College of the Rockies",
    },
    {
      src: "https://media.defense.gov/2008/Mar/10/2000646317/1088/820/0/080310-F-JZ511-788.JPG",
      alt: "Columbia College",
    },
    {
      src: "https://www.worldlogohub.com/wp-content/uploads/2019/01/Thompson_Rivers_University_Logo.png",
      alt: "Thompson Rivers University",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/640px-University_of_Waterloo_seal.svg.png",
      alt: "University of Waterloo",
    },
    {
      src: "https://crown.edu.mm/wp-content/uploads/2021/06/bedfordshire-jpg.webp",
      alt: "University of Bedfordshire",
    },
    {
      src: "https://www.eduopinions.com/wp-content/uploads/2018/02/BPP-Uni-1.jpg",
      alt: "BPP University",
    },
    {
      src: "https://www.engageli.com/hubfs/ws-2022/pr/coventry-logo-pr.png",
      alt: "Coventry University",
    },
    {
      src: "https://d3faj0w6aqatyx.cloudfront.net/uploads/2016/12/01185323/University-of-Greenwich-logo.jpeg",
      alt: "University of Greenwich",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Automatically transition every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.ceil(universities.length / itemsPerSlide) - 1
          ? 0
          : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [universities.length, itemsPerSlide]);

  // Update the number of items per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(2); // Show 2 logos per slide on small screens (phones)
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(3); // Show 3 logos on tablets or small laptops
      } else {
        setItemsPerSlide(4); // Show 4 logos per slide on large screens (laptops and desktops)
      }
    };

    handleResize(); // Call it initially to set itemsPerSlide on load

    window.addEventListener("resize", handleResize); // Adjust on window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-8">
          Our Colleges/Universities Tie Ups
        </h3>

        <div className="relative overflow-hidden">
          {/* Flex container for sliding images */}
          <div
            className="flex transition-transform ease-in-out duration-1000"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {universities.map((university, index) => (
              <div
                key={index}
                className="flex-none"
                style={{ width: `${100 / itemsPerSlide}%` }}
              >
                <img
                  src={university.src}
                  alt={university.alt}
                  className="h-20 sm:h-20 md:h-24 lg:h-28 w-auto mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitySection;
