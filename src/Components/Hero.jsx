import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "url('https://th.bing.com/th?id=OIP.CSU0WYkZwY4keDZCuzMsfQHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2')",
    "url('https://th.bing.com/th?id=OIP.SYVOsT6OjixJKyYsY6vKlgHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2')",
    "url('https://th.bing.com/th?id=OIP.iwCxQJfnA3agx4xYkYGA3wHaE8&w=305&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2')"
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true); // For animation

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out

      setTimeout(() => {
        setCurrentImage((prevImage) =>
          prevImage === images.length - 1 ? 0 : prevImage + 1
        );
        setFade(true); // Start fade-in
      }, 500); // Time for the fade-out effect
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <section
      className={`relative flex flex-col lg:flex-row items-center justify-center min-h-[60vh] lg:min-h-screen bg-cover bg-center transition-all duration-1000 ease-in-out ${
        fade ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: images[currentImage] }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Section */}
      <div className="relative z-10 w-full lg:w-2/3 text-center px-6 py-10 lg:px-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Premier Immigration Services Consultancy!
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white mb-6 leading-relaxed">
          As one of the most trusted and knowledgeable immigration consultants in Chandigarh, we're here to turn your dreams into reality with our expert guidance.
        </p>
        <a
          href="#about"
          className="inline-block bg-teal-600 text-white px-5 py-3 rounded-md font-medium hover:bg-teal-700 transition duration-300"
        >
          Discover More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
