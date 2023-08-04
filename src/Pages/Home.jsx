/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import NewArrivals from './NewArrivals';
import ToyTabs from './ToyTabs';


const Home = () => {
  
    return (
      <div>
        <Banner />
        <NewArrivals />
        <ToyTabs/>





        {/* unique sections */}

        {/* added a section to display some toy car reviews */}

        {/* .........2 */}

        <h2 className="text-xl md:text-4xl font-[700] text-sky-500 text-center">
          Tell us what you thing!
        </h2>
        <form className="w-[70%] mx-auto my-5 md:my-10">
          <div className="flex flex-col md:flex-row justify-center gap-1 md:gap-4 mb-3 md:mb-4">
            <div>
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-info w-full max-w-xs"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">What is your email?</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered input-info w-full max-w-xs"
              />
            </div>
          </div>
          <div className="text-center">
            <input
              type="text"
              placeholder="Your message"
              className="input input-lg input-bordered input-info w-full max-w-md"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn border-0 w-full md:w-[55%] py-3 px-5 mt-5 rounded-md bg-sky-400 font-bold hover:bg-sky-600 text-white transition-all duration-[300ms]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    );
};

export default Home;