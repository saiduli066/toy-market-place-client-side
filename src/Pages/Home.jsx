/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import NewArrivals from './NewArrivals';

const Home = () => {
    return (
      <div>
        <Banner />
        <NewArrivals />

        {/* unique sections */}

        <h2 className="text-xl md:text-4xl font-[700] text-sky-500 text-center">
          Tell what you thing!
        </h2>
        <div className="w-[70%] mx-auto my-5 md:my-10">
          <div className="flex flex-col md:flex-row justify-center gap-1 md:gap-4 mb-3 md:mb-4">
            <div>
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">What is your email?</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
          </div>
          <div className="text-center">
            <input
              type="text"
              placeholder="Your message"
              className="input input-lg input-bordered input-primary w-full max-w-md"
            />
          </div>
        </div>
      </div>
    );
};

export default Home;