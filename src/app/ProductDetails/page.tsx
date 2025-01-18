import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";


const ProductDetailsPage = () => {
  return (
    <div className="lg:h-screen h-auto my-10 lg:my-20">
      <div className="flex justify-around  product ">
        <div className=" w-[1200px]">
          
          <div className="flex h-auto flex-col lg:flex-row gap-12">
            <div className="w-full px-4 lg:px-0 lg:w-1/2">
              <Image
                src="/images/Rectangle.png"
                alt="product"
                width={653}
                height={653}
                className="mx-auto lg:mx-0 "
              />
            </div>
            <div className="w-full h-auto pl-4 lg:w-1/2  lg:pl-16  ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 ">
                Nike Air Force 1 PLT.AF.ORM
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
              <p className="text-4xl font-medium ">₹ 8 695.00</p>
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

export default ProductDetailsPage;
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { CiShoppingCart } from "react-icons/ci";

// const ProductDetailsPage = () => {
//   return (
//     <div className="">
//     <div className=" my-10 px-4 md:px-8 lg:my-20 lg:px-16">
//       <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12">
//         {/* Product Image */}
//         <div className="w-full lg:w-1/2">
//           <Image
//             src="/images/Rectangle.png"
//             alt="product"
//             width={653}
//             height={653}
//             className="mx-auto lg:mx-0"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="w-full lg:w-1/2">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 lg:mb-8">
//             Nike Air Force 1 PLT.AF.ORM
//           </h1>

//           <p className="text-sm md:text-base lg:text-[15px] leading-6 lg:leading-7 mb-6 lg:mb-8">
//             Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its
//             &quot;inside out&quot;-inspired construction, including unique layering and exposed
//             foam accents, ups the ante on this timeless Jordan Brand silhouette. Details
//             like the deco stitching on the Swoosh add coveted appeal, while the unexpected
//             shading, rich mixture of materials and aged midsole aesthetic give this release
//             an artisan finish.
//           </p>

//           <p className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6">
//             ₹ 8 695.00
//           </p>

//           <Link href="/Cart">
//             <div className="flex items-center gap-2 text-white mt-4 md:mt-6 lg:mt-8 hover:bg-slate-500 py-2 w-full max-w-[200px] rounded-full px-4 bg-black">
//               <CiShoppingCart className="w-6 h-6 md:w-[29px] md:h-[29px]" />
//               <p className="text-sm md:text-base font-medium">Add To Cart</p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;
