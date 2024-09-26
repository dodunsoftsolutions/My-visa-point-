import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.myvisapoint.com/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
        setError('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      setSuccess('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/4823404.jpg')",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between bg-black bg-opacity-70 rounded-lg p-8">
        {/* Left Side: Content */}
        <div className="md:w-full text-white p-6">
          <p className="text-lg font-semibold mb-2">Contact With Us</p>
          <h4 className="text-4xl font-extrabold mb-6">Contact Trek for Visa & Immigration</h4>
          <p className="mb-6">
            Reach out to us for any inquiries regarding visa and immigration services. We are here to assist you with
            all the information and support you need for a smooth and successful application process.
          </p>
          <p className="font-semibold mb-2">SCO-2433-34, 2nd Floor, Sector 22C</p>
          <p className="font-semibold">Chandigarh, 160022</p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:w-full bg-gray-300 rounded-lg shadow-2xl p-8 transform transition-all hover:scale-105 hover:shadow-xl">
          <h4 className="text-3xl font-semibold text-center text-gray-800 mb-6">Get In Touch</h4>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                rows="5"
                required
              ></textarea>
            </div>
            {success && <p className="text-green-500 text-center">{success}</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 rounded-md font-semibold hover:bg-gradient-to-l hover:from-teal-400 hover:to-blue-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
