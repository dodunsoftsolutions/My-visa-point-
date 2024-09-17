import React, { useState, useEffect } from "react";
import "./HeroSection.css"; // Make sure the CSS is correctly linked
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/#contact"); // Navigates to the /#contact section
  };

  // Update screen size dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setError("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
      setSuccess("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-center h-64 lg:min-h-screen">
      {/* Video Background */}
      <video
        playsInline
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={
            isMobile
              ? "https://ik.imagekit.io/7uve7qsipm/center.mp4?updatedAt=1726226140435"
              : "https://ik.imagekit.io/7uve7qsipm/leftalign.mp4?updatedAt=1726226140465"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Section */}
      <div className="relative z-10 w-full lg:w-1/2 text-center px-4 lg:px-10 py-8 lg:py-20 h-full">
        {/* Add your content here */}
        {isMobile ? (
          <a
            href="#contact"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none"
          >
            Contact
          </a>
        ) : null}
      </div>

      {/* Contact Form Section */}
      <div className="relative z-10 w-full lg:w-1/3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-2xl p-2 ml-32 md:p-6 opacity-90 transform transition-all hover:scale-105 hover:shadow-l mt-6 lg:mt-0  scale-up hidden lg:block">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-white mb-4">
          Get In Touch
        </h4>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-white font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
              rows="4"
              required
            ></textarea>
          </div>
          {success && <p className="text-green-500 text-center">{success}</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 rounded-md font-semibold hover:bg-gradient-to-l hover:from-teal-400 hover:to-blue-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
