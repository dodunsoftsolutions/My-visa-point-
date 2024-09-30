import React from "react";
import { useInView } from "react-intersection-observer";

const StudyVisa = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
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
        className={`text-center mb-16 ${headerInView ? "fade-in" : "opacity-0"
          }`}
      >
        <h2 className="text-5xl font-bold text-teal-600 mb-4">
          Your Pathway to Global Education
        </h2>
        <p className="text-lg text-gray-600">
          At My Visa Point, we understand that studying abroad is a
          life-changing experience. Our dedicated team is here to guide you
          through the process of obtaining a study visa, ensuring a smooth and
          hassle-free journey toward your academic goals.
        </p>
      </div>

      {/* Section Content */}
      <div
        ref={textRef}
        className={`space-y-8 ${textInView ? "fade-in" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-teal-500 mb-4">
            Benefits of Applying for a Study Visa Through Our Company
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-4">
            <li>
              <strong>Expert Guidance:</strong> Our experienced consultants
              provide tailored advice, ensuring you understand the requirements
              and processes for your chosen destination.
            </li>
            <li>
              <strong>Comprehensive Application Support:</strong> We assist you
              with every step of the application process, from document
              preparation to submission, minimizing errors and increasing your
              chances of approval.
            </li>
            <li>
              <strong>Personalized Services:</strong> We take the time to
              understand your unique situation and aspirations, helping you
              choose the right program and institution for your goals.
            </li>
            <li>
              <strong>Mock Interviews and Preparation:</strong> Our team offers
              interview preparation sessions, helping you feel confident and
              well-prepared for visa interviews.
            </li>
            <li>
              <strong>Network of Partnerships:</strong> Our connections with
              educational institutions and local organizations can help
              facilitate your admission and transition.
            </li>
            <li>
              <strong>Success Rate:</strong> Our proven track record of
              successful applications speaks for itself, giving you peace of
              mind that you’re in capable hands.
            </li>
            <li>
              <strong>Time-Saving:</strong> Let us handle the paperwork and
              logistics, so you can focus on your studies and preparations for
              your exciting journey ahead.
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-teal-500 mb-4">
            Countries We Support
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>United States</li>
            <li>United Kingdom</li>
            <li>Canada</li>
            <li>Australia</li>
            <li>New Zealand</li>
            <li>Schengen countries</li>
          </ul>
        </div>
      </div>

      {/* Call-to-Action */}
      <div
        ref={ctaRef}
        className={`text-center mt-16 ${ctaInView ? "fade-in" : "opacity-0 translate-y-10"
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
        className={`mt-16 text-center p-8 bg-teal-600 text-white rounded-lg shadow-lg transition-all duration-500 ${contactInView ? "fade-in" : "opacity-0 translate-y-10"
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
          <a href="tel:+917340761339" className="underline">
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
