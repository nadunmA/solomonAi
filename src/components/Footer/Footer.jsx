import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import {
  FaGithub,
  FaFacebookMessenger,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const About = useNavigate();

  return (
    <div className=" px-6 py-10 bg-gradient-to-br bg-black  to-blue-800 text-white">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Support */}
        <div>
          <p className="font-bold text-lg mb-4 ">SUPPORT</p>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-purple-400 ">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-purple-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-purple-400">
                Contact Us
              </a>
            </li>
            <li>
              <a
                onClick={() => About("/about")}
                href="#"
                className="hover:underline hover:text-purple-400"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="font-bold text-lg mb-4">LEGAL</p>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-purple-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-purple-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-purple-400">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <p className="font-bold text-lg mb-4">FOLLOW US</p>
          <div className="flex space-x-4 text-2xl text-gray-700">
            <BsFacebook className="text-blue-600 hover:text-blue-500 cursor-pointer" />
            <AiFillTikTok className="hover:text-black cursor-pointer" />
            <FaFacebookMessenger className="text-blue-600 hover:text-blue-500 cursor-pointer" />
            <RiInstagramFill className="text-pink-700 hover:text-pink-500 cursor-pointer" />
            <FaLinkedin className="text-blue-600 hover:text-blue-700 cursor-pointer" />
            <FaTelegram className="text-blue-500 hover:text-blue-700 cursor-pointer" />
            <FaGithub className="hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-gray-400">
        &copy; 2025 Solomon Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
