import React, { useState } from 'react';
import { MailIcon, XIcon } from '@heroicons/react/outline';

const MessageButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
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
    <div>
      {/* Floating Message Button in Bottom-Right Corner */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
        style={{ zIndex: 50 }} // Ensure it's above everything else
      >
        <MailIcon className="h-6 w-6" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Modal Background */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div
            className="relative bg-white rounded-lg shadow-2xl p-6 transition-all transform duration-300 
            w-11/12 md:w-2/3 lg:w-96 lg:h-auto lg:bottom-4 lg:right-4 lg:fixed lg:m-0 lg:rounded-xl"
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <XIcon className="h-8 w-8" /> {/* Larger close button */}
            </button>

            {/* Title */}
            <h4 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Get In Touch
            </h4>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  rows="4"
                  required
                ></textarea>
              </div>

              {/* Feedback */}
              {success && <p className="text-green-500 text-center">{success}</p>}
              {error && <p className="text-red-500 text-center">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 rounded-lg font-semibold hover:bg-gradient-to-l hover:from-teal-400 hover:to-blue-500 transition duration-300 ease-in-out shadow-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageButton;
