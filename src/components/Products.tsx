"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { allProductsData } from "./Cards/data";
import Card from "./Cards/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Products = () => {
  const sliderRef = useRef<Slider | null>(null);

  const airMaxProducts = allProductsData.filter((product) =>
    product.title.toLowerCase().includes("")
  );

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-between px-4 sm:px-8 md:px-12 lg:px-20 pt-12 mb-4 items-center">
        <h2 className="text-[18px] md:text-[22px] font-medium">
          Best of Air Max
        </h2>
        <div className="flex items-center gap-4">
          <p>Shop</p>
          <div
            className="bg-[#F5F5F5] hover:bg-slate-300 p-3 rounded-full cursor-pointer"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <IoIosArrowBack className="w-[24px] h-[24px]" />
          </div>
          <div
            className="bg-[#F5F5F5] hover:bg-slate-300 p-3 rounded-full cursor-pointer"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <IoIosArrowForward className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
      <div className=" px-4 sm:px-8 md:px-12 lg:px-20  pt-6 ">
        <Slider {...settings} ref={sliderRef}>
          {airMaxProducts.map((product) => (
            <Card
              id={product.id}
              key={product.id}
              tag={product.tag}
              title={product.title}
              category={product.category}
              color={product.color}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
