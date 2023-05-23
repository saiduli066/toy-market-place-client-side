/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl md:text-5xl lg:text-6xl font-[500] md:font-[600] lg:font-[600]font-bold">
            GermGear
          </h1>
          <p className="">© {new Date().getFullYear()} GermGear. All rights reserved.</p>
        </div>

        <div>
          <p>
            <small className="font-semibold">Find us on</small>
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
