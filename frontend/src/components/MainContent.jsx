
import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const MainContent = () => {
  return (
     <>
    <main className="bg-teal-200 container mx-auto mt-8">
      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold">Welcome to "Medpal" your Healthcare Management System</h2>
        <p className="mt-2">
          "MedPal" is the website where you can upload and manage your medical history records, patient medications, and appointments. This also provides you seamless experience to share your medical data to the healthcare providers and organizations in secure manner. Furthermore, the advanced technologies like AI and ML models will help you to predict upcoming health concerns by analyzing your health records and data.
        </p>
        <Link to="/registration">Get Started!</Link>
        
      </section>
      <div className="flex flex-wrap justify-center gap-8">
        
        {[
          { title: 'Patient Medical History', description: 'Easily manage and access patient medical records securely.', alert: 'Medical History Feature Coming Soon!' },
          { title: 'Appointment Scheduling', description: 'Schedule and manage appointments with ease.', alert: 'Appointment Scheduling Feature Coming Soon!' },
          { title: 'Centralized EHR & Data Security', description: 'Ensure compliance with healthcare regulations by FHIR to store and protect patient data.', alert: 'Data Security Feature Coming Soon!' },
          { title: 'Patient Engagement', description: 'Enhance patient engagement through user-friendly interfaces.', alert: 'Patient Engagement Feature Coming Soon!' },
          { title: 'AI and ML Solutions', description: 'Leverage AI and ML for future scalability and improved healthcare outcomes.', alert: 'AI and ML Solutions Feature Coming Soon!' },
          { title: 'Operational Efficiency', description: 'Improve operational efficiency with streamlined processes.', alert: 'Feature Coming Soon!' },
        ].map((card, index) => (
          <div key={index} className="card bg-white p-6 rounded-lg shadow-lg w-80 transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500 hover:text-black">
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="mt-2">{card.description}</p>
            <button className="mt-4 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700" onClick={() => alert(card.alert)}>Learn More</button>
          </div>
        ))}
      </div>
    </main>
    </>
  );
};

export default MainContent;
