import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You can use axios or fetch API

const FormData = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');

  // Fetch all form data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.myvisapoint.com/api/contact/all'); // Update this URL to match your backend route
        setContacts(response.data.contacts);
      } catch (err) {
        setError('Failed to fetch data. Please try again.');
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Submitted Contact Data</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {contacts.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td className="py-2 px-4 border-b">{contact.name}</td>
                <td className="py-2 px-4 border-b">{contact.email}</td>
                <td className="py-2 px-4 border-b">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default FormData;
