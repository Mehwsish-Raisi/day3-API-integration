import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { allProductsData } from "@/components/Cards/data";


const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product = allProductsData.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Product not found!</p>;
  }
  

  return (
    <div className="lg:h-screen h-auto my-10 lg:my-20">
      <div className="flex justify-around  product ">
        <div className=" w-[1200px]">
          
          <div className="flex h-auto flex-col lg:flex-row gap-12">
            <div className="w-full px-4 lg:px-0 lg:w-1/2">
            <Image
          src={product.imageUrl}
          alt={product.title}
          width={500}
          height={500}
        />
            </div>
            <div className="w-full h-auto pl-4 lg:w-1/2  lg:pl-16  ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 ">
                {product.title}
              </h1>
              <p className="text-[15px] leading-7 h-[252px] w-[374.92px] ">
                Turn style on its head with this crafted take on the Air Jordan
                1 Mid. Its &quot;inside out&quot;-inspired construction, including unique
                layering and exposed foam accents, ups the ante on this timeless
                Jordan Brand silhouette. Details like the deco stitching on the
                Swoosh add coveted appeal, while the unexpected shading, rich
                mixture of materials and aged midsole aesthetic give this
                release an artisan finish.
              </p>
              <p className="text-4xl font-medium ">{product.price}</p>
              <Link href='/Cart'>
              <div className="text-col1 mt-8 hover:bg-slate-500 py-2 w-[174.42px] rounded-[30px] h-[44px] px-6 bg-black ">
                <div className="flex gap-2">
              <CiShoppingCart className="w-[29px] h-[29px] " />
              
                <p className="text-[15px] font-medium pt-1">Add To Cart</p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
