
import React from 'react';
import 'tailwindcss/tailwind.css';
const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img className="h-12 w-18" src="./pixelcut-export.ico" alt="Your Company" />
              <h1 className="px-10 py-1 text-3xl font-bold text-red-600">
                Med<span className="text-3xl font-bold text-white">Pal</span>
              </h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-6">
                <a href="#" className="rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
                <a href="#" className="rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</a>
                <a href="#" className="rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Services</a>
                <a href="#" className="rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</a>
                <a href="./Login" className="rounded-md px-3 py-1 text-sm font-medium text-blue-300 hover:bg-blue-700 hover:text-white">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
