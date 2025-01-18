
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DontMissPage = () => {
  return (
    <div>
      {/* Heading  */}
<div className='pl-5 sm:pl-20 text-center sm:text-left pt-8'>
    <p className='text-[23px] font-medium '>Don&apos;t Miss</p>
</div>
      
      <div className="pb-10 pt-8 px-4 sm:px-10 lg:px-20">
        {/* Hero Image */}
        <div className="w-full h-auto">
          <Image
            src="/images/hero3.png"
            alt="Hero2 image"
            width={1344}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        
        <div className="text-center pt-6">
          {/* Title */}
          <div>
            
            <h1 className="text-[32px] sm:text-[48px] lg:text-[56px] font-medium leading-tight">
            FLIGHT ESSENTIALS
            </h1>
            <p className="text-[13px] sm:text-[15px] pt-4 px-4 sm:px-8 lg:px-0 lg:w-[600px] mx-auto">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
            </p>
          </div>

          {/* Buttons */}
          <Link href='/All-Products'>
          <div className="pt-6 flex justify-center">
            <button className="w-[80.38px] hover:bg-slate-700 rounded-full bg-black text-col1 py-2 text-sm">
            Shop
            </button>
            
            
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DontMissPage;
