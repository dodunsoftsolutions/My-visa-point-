import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20 lg:px-40 text-gray-800">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-10">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            MyVisaPoint is committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it. This policy applies to all information collected through our website, <a href="https://myvisapoint.org" className="text-blue-500 underline">https://myvisapoint.org</a>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We collect personal information that you voluntarily provide to us when you register on our website, express an interest in obtaining information about us or our products and services, participate in activities on the website, or otherwise contact us.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
            <li><strong>Personal Information:</strong> This includes your name, email address, phone number, mailing address, passport details, visa-related information, and any other information you choose to provide.</li>
            <li><strong>Payment Information:</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (e.g., credit card number) and the security code associated with your payment instrument.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We use personal information collected via our services for a variety of business purposes, including:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
            <li>Facilitating the visa application process.</li>
            <li>Providing customer support.</li>
            <li>Managing user accounts.</li>
            <li>Processing transactions and sending related information, including purchase confirmations and invoices.</li>
            <li>Sending administrative information, such as updates to our terms, conditions, and policies.</li>
            <li>Responding to legal requests and preventing harm.</li>
            <li>Improving our services and website functionality.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We may share your information with third parties in the following situations:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
            <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.</li>
            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, judicial proceedings, court orders, or legal processes.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We will retain your personal information only for as long as necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">7. Security of Your Information</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We use administrative, technical, and physical security measures to help protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">8. Your Data Protection Rights</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
            <li><strong>Access:</strong> You can request access to the personal information we have about you.</li>
            <li><strong>Correction:</strong> You can request that we correct any incorrect or incomplete personal information.</li>
            <li><strong>Deletion:</strong> You can request that we delete your personal information.</li>
            <li><strong>Objection:</strong> You can object to the processing of your personal information.</li>
            <li><strong>Portability:</strong> You can request to receive your personal information in a structured, commonly used, and machine-readable format.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. We encourage you to review this privacy policy periodically for any changes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
