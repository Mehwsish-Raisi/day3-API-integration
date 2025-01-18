import React from "react";
import Link from "next/link";

const LinksPage = () => {
  return (
    <div>
      <div className="flex my-10 justify-evenly">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-8">
          {/* Column 1 */}
          <div className="text-center text-[12px]  lg:text-left">
            <h3 className="mb-4 font-medium ">Icons</h3>
            <ul className="space-y-4 text-[#7E7E7E]">
              <li>
                <Link href="#" className=" hover:underline">
                  Air Force 1
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Huarache
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Air Max 90
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Air Max 95
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="text-center text-[12px]  lg:text-left">
            <h3 className="font-medium mb-4">Shoes</h3>
            <ul className="space-y-4 text-[#7E7E7E]">
              <li>
                <Link href="#" className="hover:underline">
                  All Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Custom Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Jordan Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Running Shoes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center text-[12px] lg:text-left">
            <h3 className=" mb-4 font-medium">Clothing</h3>
            <ul className="space-y-4 text-[#7E7E7E]">
              <li>
                <Link href="#" className="hover:underline">
                  All Clothing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Modest Wear
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Hoodies & Pullovers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shirts & Tops
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="text-center text-[12px] lg:text-left">
            <h3 className=" mb-4 font-medium">Kids&apos;</h3>
            <ul className="space-y-4 text-[#7E7E7E] ">
              <li>
                <Link href="#" className="hover:underline">
                  Infant & Toddler Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Kids&apos; Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Kids&apos; Jordan Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Kids&apos; Basketball Shoes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
