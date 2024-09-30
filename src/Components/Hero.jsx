import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "url('https://ik.imagekit.io/devhm/6.png?updatedAt=1727460493711')",
    "url('https://ik.imagekit.io/devhm/3.png?updatedAt=1727460493603')",
    "url('https://ik.imagekit.io/devhm/WhatsApp%20Image%202024-09-27%20at%2011.07.22%20PM.jpeg?updatedAt=1727460492550')",
    "url('https://ik.imagekit.io/devhm/WhatsApp%20Image%202024-09-27%20at%2011.08.05%20PM.jpeg?updatedAt=1727460492518')",
    "url('https://ik.imagekit.io/devhm/WhatsApp%20Image%202024-09-27%20at%2011.07.47%20PM.jpeg?updatedAt=1727460492454')",
    "url('https://ik.imagekit.io/devhm/WhatsApp%20Image%202024-09-27%20at%2011.07.07%20PM.jpeg?updatedAt=1727460492451')",
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
      className={`relative flex flex-col lg:flex-row items-start justify-center min-h-[50vh] lg:min-h-[75vh] bg-cover bg-center transition-all duration-1000 ease-in-out ${
        fade ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: images[currentImage] }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Text Section */}
      <div className="relative z-10 w-full lg:w-2/3 text-center px-6 py-10 lg:px-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Premier Immigration Services Consultancy!
        </h1>
        <a
          href="/about-us"
          className="inline-block bg-teal-600 text-white px-5 py-3 rounded-md font-medium hover:bg-teal-700 transition duration-300"
        >
          Discover More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
