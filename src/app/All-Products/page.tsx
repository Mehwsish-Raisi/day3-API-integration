import React from "react";
import { GoMultiSelect } from "react-icons/go";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 10;

interface Product {
  _id: string;
  productName: string;
  category: string;
  inventory: number;
  price: number;
  colors: string;
  status: string;
  imageUrl: string;
}

const AllProductsPage = async () => {
  const query: Product[] = await client.fetch(
    `*[_type == "product"]{
        _id,
      productName,
      category,
      inventory,
      price,
      colors,
      status,
    "imageUrl": image.asset->url
    }`
  );

  

  return (
    <div>
      {/* Banner start*/}
      <div className="px-8">
        <div className=" flex justify-between mt-20">
          <p className="font-medium  text-xl md:text-2xl ">New (500)</p>
          <div className="flex gap-8">
            <div className="flex gap-2">
              <p>Hide Filters</p>
              <GoMultiSelect className="w-[24px] h-[24px] " />
            </div>
            <div>
              <select name="" className="outline-none">
                <option value="">Sort By</option>
                <option value="">Sort By</option>
                <option value="">Sort By</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Banner end*/}

      <div className="px-8 flex justify-between mt-10">
        {/* Slider start */}
        <div className="hidden md:block w-[260px] h-[849px] ">
          <div className="overflow-scroll h-[400px]">
            <ul className="my-4">
              <li className="mb-2">
                <Link href="#">Shoes</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Sports Bras</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Tops & T-Shirts</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Hoodies & Sweatshirts</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Jackets</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Trousers & Tights</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Shorts</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Tracksuits</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Jumpsuits & Rompers</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Skirts & Dresses</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Socks</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Accessories & Equipment</Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-between border-t-2 pt-2">
            <p className="font-medium">Gender</p>
            <IoIosArrowUp size={14} />
          </div>
          <div className="mt-2">
            <input type="checkbox" id="men" />
            <label className="pl-2 cursor-pointer" htmlFor="men">
              Men
            </label>
          </div>
          <div>
            <input type="checkbox" id="women" />
            <label className="pl-2 cursor-pointer" htmlFor="women">
              Women
            </label>
          </div>
          <div>
            <input type="checkbox" id="unisex" />
            <label className="pl-2 cursor-pointer" htmlFor="unisex">
              Unisex
            </label>
          </div>
          <div className="mt-4">
            <div className="flex justify-between border-t-2 pt-2">
              <p className="font-medium">Kids</p>
              <IoIosArrowUp size={14} />
            </div>
            <div className="mt-2">
              <input type="checkbox" id="boys" />
              <label className="pl-2 cursor-pointer" htmlFor="boys">
                Boys
              </label>
            </div>
            <div>
              <input type="checkbox" id="girls" />
              <label className="pl-2 cursor-pointer" htmlFor="girls">
                Girls
              </label>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between  border-t-2 pt-2">
              <p>Shop By Price</p>
              <IoIosArrowUp size={14} />
            </div>
            <div>
              <input type="checkbox" id="under-2500" />
              <label className="pl-2 cursor-pointer" htmlFor="under-2500">
                Under ₹ 2,500.00
              </label>
            </div>
            <div>
              <input type="checkbox" id="2500-7500" />
              <label className="pl-2 cursor-pointer" htmlFor="2500-7500">
                ₹ 2,501.00 - ₹ 7,500.00
              </label>
            </div>
          </div>
        </div>
        {/* Slider end */}

        {/* Data Fetching From Sanity To Frontend */}
        <div className="w-full sm:w-3/4 mb-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {query.map((product: Product) => (
              <div key={product._id}>
                <Image
                  src={urlFor(product.imageUrl).url()}
                  alt={product.productName}
                  width={348}
                  height={348}
                />
                <div className="py-4">
                  <p className="text-[#9E3500]">{product.status}</p>
                  <p className="font-semibold">{product.productName}</p>
                  <p className="text-slate-500">{product.category}</p>
                  <p className="text-slate-500">Color: {product.colors}</p>
                  <p className="text-slate-500">Qty: {product.inventory}</p>
                </div>
                <p className="font-semibold">MRP : ₹ {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
