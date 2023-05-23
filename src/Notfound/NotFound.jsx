import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <img
          src="https://cdn-images-1.medium.com/v2/resize:fit:800/1*qdFdhbR00beEaIKDI_WDCw.gif"
          alt="404 not found"
          className="w-3/4 md:w-1/2 lg:w-1/2"
        />
        <h1 className="text-4xl text-center font-bold text-gray-800">
          Page not found.
        </h1>
       
        <Link to="/">
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
            Go back home
          </button>
        </Link>
      </div>
    );
};

export default NotFound;