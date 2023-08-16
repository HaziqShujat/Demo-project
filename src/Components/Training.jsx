import React from 'react';

function Training() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Professional Training Programs
          </h2>
          <p className="mt-4 text-gray-500">
            Elevate your skills with our comprehensive training programs.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600 mb-4">
              Master the art of building modern and responsive websites.
            </p>
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
              Learn More
            </button>
          </div>
          
          {/* You can repeat the above structure for other training programs */}
          
        </div>
      </div>
    </div>
  );
}

export default Training;
