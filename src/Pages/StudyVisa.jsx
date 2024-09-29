import React from "react";
import { useInView } from "react-intersection-observer";

const StudyVisa = () => {
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
          Explore the World with a Study Visa
        </h2>
        <p className="text-lg text-gray-600">
          Unlock global opportunities by pursuing your education abroad.
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
              World-Class Education
            </h3>
            <p className="text-gray-600">
              Gain access to top universities, enhancing your career prospects
              with globally recognized qualifications.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              Cultural Immersion
            </h3>
            <p className="text-gray-600">
              Experience new cultures, languages, and traditions by studying in
              a foreign country.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              Career Opportunities
            </h3>
            <p className="text-gray-600">
              Build global networks and open doors to international internships,
              jobs, and collaborations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              Personal Growth
            </h3>
            <p className="text-gray-600">
              Develop independence and resilience by living and learning abroad.
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
              src="https://ik.imagekit.io/6oa6qejxe/background_img.png?updatedAt=1725354260253"
              alt="Study Abroad"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://ik.imagekit.io/6oa6qejxe/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg?updatedAt=1725533654037"
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

export default StudyVisa;
