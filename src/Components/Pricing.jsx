import React from "react";

function Pricing() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose a plan that's right for you
          </h2>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mt-12">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
           
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
                <div className="text-lg font-semibold text-gray-900">Basic</div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold text-gray-900">
                  $9
                  <span className="ml-1 text-2xl font-medium text-gray-500">
                    /month
                  </span>
                </div>
                <p className="mt-4 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a
                  href="#"
                  className="mt-6 block w-full bg-indigo-500 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 disabled:opacity-25 transition"
                >
                  Get started
                </a>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
                <div className="text-lg font-semibold text-gray-900">Basic</div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold text-gray-900">
                  $20
                  <span className="ml-1 text-2xl font-medium text-gray-500">
                    /month
                  </span>
                </div>
                <p className="mt-4 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a
                  href="#"
                  className="mt-6 block w-full bg-indigo-500 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 disabled:opacity-25 transition"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
