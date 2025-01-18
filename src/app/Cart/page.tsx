
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-5xl w-full p-4 sm:p-6">
        {/* Bag Section */}
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="font-medium text-sm">Free Delivery</p>
          <span className="text-sm">
            Applies to orders of ₹ 14,000.00 or more.
          </span>
          <span className="text-xs font-medium underline pl-2 cursor-pointer">
            View details
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bag Items */}
          <div className="col-span-2">
            <h2 className="text-lg sm:text-left text-center font-semibold mb-4">Bag</h2>

            {/* Item 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between border-b pb-4 mb-4">
              <Image
                width={150}
                height={150}
                src="/images/man.png"
                alt="Man"
                className="rounded-md border"
              />
              <div className="ml-0 sm:ml-4 flex-1 mt-4 sm:mt-0 text-center sm:text-left">
                <h3 className="font-medium text-gray-800">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="text-sm text-gray-600">
                  Men&apos;s Short-Sleeve Running Top
                </p>
                <p className="text-sm text-gray-500">
                  Ashen Slate/Cobalt Bliss
                </p>
                <p className="text-sm text-gray-500">Size: L</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className=" flex flex-col sm:flex-row items-center sm:items-start justify-between border-b pb-4 mb-4">
              <div className='collapse '>
              <Image
                width={150}
                height={150}
                src="/images/shoes.png"
                alt="Shoes"
                className="rounded-md border "
              />
              </div>
              <div className="ml-0 sm:ml-4 flex-1 mt-4 sm:mt-0 text-center sm:text-left">
                <h3 className="font-medium text-gray-800">Nike Air Max 97 SE</h3>
                <p className="text-sm text-gray-600">Men&apos;s Shoes</p>
                <p className="text-sm text-gray-500">
                  Flat Pewter/Light Bone/Black/White
                </p>
                <p className="text-sm text-gray-500">Size: 8</p>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-8">Summary</h2>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">₹ 20,890.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">
                Estimated Delivery & Handling
              </p>
              <p className="font-medium">Free</p>
            </div>
            <div className="flex justify-between text-lg font-medium border-t pt-8">
              <p>Total</p>
              <p>₹ 20,890.00</p>
            </div>
            <Link href='/Checkout'>
            <button className="w-full bg-black hover:bg-slate-500 text-white font-medium py-3 rounded-full mt-8">
              Member Checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


