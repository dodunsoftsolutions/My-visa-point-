// import React from 'react';

// const ContactUs = () => {
//   return (
//     <section>
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-center mb-8">About Our Company</h1>
//         <div className="flex flex-col lg:flex-row items-center justify-between">
//           <div className="lg:w-1/2">
//             <p className="mb-6 text-lg leading-relaxed">
//               Incorporated in 2010, My Visa Point is a unique organization. We offer a broad portfolio of excellent services to
//               people who are interested in STUDYING, TOURING, WORKING, and SETTLING ABROAD. We understand that immigrating to any
//               country can offer people a superior quality of life, as well as the freedom to pursue personal and professional goals
//               that might not be otherwise available to them in the countries in which they presently reside.
//               Our pragmatic approach has been appreciated, and our reputation is built on trust, resourcefulness, integrity, and experience.
//               We represent a number of top universities and colleges in major countries like the USA, Canada, Europe, the UK, Australia,
//               New Zealand, Singapore, Switzerland, Dubai, Ireland, Malaysia, and more.
//             </p>
//           </div>
//           <div className="lg:w-1/2">
//             <img
//               src="https://ik.imagekit.io/7uve7qsipm/consultant.png?updatedAt=1725302055013"
//               alt="Consultancy"
//               className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
import React from "react";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
  });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="bg-gray-100 py-16 px-8">
      {/* Section Header */}
      <div
        ref={headerRef}
        className={`text-center mb-16 ${
          headerInView ? "fade-in" : "opacity-0"
        }`}
      >
        <h2 className="text-5xl font-bold text-teal-600 mb-4">
        Your Trusted Partner in Visa and Immigration Solutions
        </h2>
        <p className="text-lg text-gray-600">
        Since 2010, we have been leaders in the visa and immigration sector, providing best solutions for individuals and businesses. Our dedicated team of experts is committed to ensuring a hassle-free visa process for our clients through the complex immigration landscape.
        </p>

        <p className="text-4xl text-black py-5 px-10">
          Our Specialized Services:
        </p>
      </div>

      {/* Section Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div
          ref={textRef}
          className={`space-y-8 ${
            textInView ? "fade-in" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl">
          
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
            Tailored Visa Consultation
            </h3>
            <p className="text-gray-600">
            Receive personalized guidance to identify the most suitable visa options for your unique circumstances. We ensure you understand all requirements and processes, allowing for a smooth application experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
            Comprehensive Immigration Solutions
            </h3>
            <p className="text-gray-600">
            our extensive range of services encompasses every aspect of immigration, from application preparation to ongoing compliance support. We are dedicated to meeting your specific needs with precision and care.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
            Expert Legal Counsel and Support
            </h3>
            <p className="text-gray-600">
            navigate the complexities of immigration law with confidence. Our experienced legal team provides reliable advice and assistance, helping you overcome any challenges that may arise during your immigration journey.
            </p>
          </div>

         
        </div>

        {/* Right: Image Content */}
        <div
          ref={imageRef}
          className={`relative ${
            imageInView ? "scale-up" : "opacity-0 scale-90"
          }`}
        >
          <div className="grid grid-cols-1 gap-8">
            <img
              src="https://ik.imagekit.io/6oa6qejxe/Screenshots/155650.jpg?updatedAt=1727687906335"
              alt="About"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://ik.imagekit.io/6oa6qejxe/Screenshots/2154.jpg?updatedAt=1727687934401"
              alt="Study Experience"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div
        ref={ctaRef}
        className={`text-center mt-16 ${
          ctaInView ? "fade-in" : "opacity-0 translate-y-10"
        }`}
      >
        <a
          href="/ContactUs"
          className="px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-colors duration-300"
        >
          Get Our Support
        </a>
      </div>

      {/* Contact Information */}
      <div
        ref={contactRef}
        className={`mt-16 text-center p-8 bg-teal-600 text-white rounded-lg shadow-lg transition-all duration-500 ${
          contactInView ? "fade-in" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
        <p className="text-lg mb-2">
          <strong>Address:</strong>{" "}
          <a
            href="https://www.google.com/maps/place/SCO-2433-34,+Sector+22C,+Chandigarh,+160022"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            SCO-2433-34, 2nd Floor, Sector 22C, Chandigarh, 160022
          </a>
        </p>
        <p className="text-lg mb-2">
          <strong>Phone:</strong>{" "}
          <a href="tel:+917340761339
" className="underline">
            +91 7340761339

          </a>
        </p>
        <p className="text-lg">
          <strong>Email:</strong>{" "}
          <a href="mailto:info@myvisapoint.org" className="underline">
            info@myvisapoint.org
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactUs;

