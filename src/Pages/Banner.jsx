/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../assets/images/babyWithToy-removebg-preview.png'

const Banner = () => {
    return (
      <div className="flex flex-col-reverse md:flex-row justify-evenly  items-center  w-full">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-[700] text-gray-600 mb-5">
            Watch Them Grow
          </h2>
          <h4 className="md:text-3xl font-[600] text-gray-600">
            with GermGear&apos;s cars
          </h4>
          <p className="md:font-[500] text-gray-600">
            <small>Contagious Thrills on Wheels</small>
          </p>
        </div>
        <div className="">
          <img className="max-w-full h-auto object-cover" src={img} alt="" />
        </div>
      </div>
    );
};

export default Banner;

