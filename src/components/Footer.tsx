 import React from 'react';
import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-8">
      {/* Main Footer Content */}

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="text-center text-[12px]  lg:text-left">
          <h3 className="mb-4">FIND A STORE</h3>
          <ul className="space-y-4 ">
            <li>
              <Link href="#" className="hover:underline">
                Become a Member
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Sign Up for Email
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[10px] hover:underline">
                Send Us Feedback
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
              Student Discounts
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="text-center text-[12px] lg:text-left">
          <h3 className=" mb-4">GET HELP</h3>
          <ul className="space-y-4 text-[#7E7E7E]">
            <li>
              <Link href="#" className="hover:underline">
                Order Status
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Delivery
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact Us on Nike.com
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact Us on All Other Inquiries
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-center text-[12px] lg:text-left">
          <h3 className=" mb-4">ABOUT NIKE</h3>
          <ul className="space-y-4 text-[#7E7E7E] ">
            <li>
              <Link href="#" className="hover:underline">
                News
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Investors
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Sustainability
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 (Social Media Icons) */}

        <div className="flex justify-center lg:justify-end items-start gap-4">
          <div className="bg-[#7E7E7E] w-[30px] h-[30px] rounded-full pl-1 pt-1 hover:bg-gray-600 cursor-pointer">
            <FaTwitter className="text-lg text-black " />
          </div>
          <div className="bg-[#7E7E7E] w-[30px] h-[30px] rounded-full pl-1 pt-1 hover:bg-gray-600 cursor-pointer">
            <FaFacebook className="text-lg text-black" />
          </div>
          <div className="bg-[#7E7E7E] w-[30px] h-[30px] rounded-full pl-1 pt-1 hover:bg-gray-600 cursor-pointer">
            <FaYoutube className="text-lg text-black" />
          </div>
          <div className="bg-[#7E7E7E] w-[30px] h-[30px] rounded-full pl-1 pt-1 hover:bg-gray-600 cursor-pointer">
            <FaInstagram className="text-lg  text-black" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
        {/* Country and Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4 sm:mb-0">
          <MdLocationOn className="text-white w-[18px] h-[15px] " />
          <p className="text-white text-xs">India</p>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <Link href="#" className="hover:underline">
            Guides
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Sale
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Use
          </Link>
          <Link href="#" className="hover:underline">
            Nike Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
