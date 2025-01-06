// components/Footer.jsx
import React from 'react';
import 'tailwindcss/tailwind.css';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-4 fade-in">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Healthcare Management. All rights reserved to Devesh Kumar Jha & team.</p>
        <address>
          WebAI Technologies
          <br />
          contact: 9653937696 | Email: webaisolutions@gmail.com
        </address>
        <p className="text-sm">Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
