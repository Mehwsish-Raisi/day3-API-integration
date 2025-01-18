
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroPage = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-col1 h-[58px]">
        <div className="text-center py-1 sm:py-2">
          <h3 className="font-medium text-[14px] sm:text-[15px]">Hello Nike App</h3>
          <div className="text-[10px] sm:text-[11px] pt-1">
            <span>Download the app to access everything Nike.</span>
            <span className="underline font-medium pl-1">Get Your Great</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pb-10 px-4 sm:px-10 lg:px-20">
        {/* Hero Image */}
        
        <div className="w-full h-auto">
          <Image
            src="/images/heroshoes.png"
            alt="Shoe image"
            width={1344}
            height={700}
            className="w-full h-auto object-cover"
            
          />
        </div>
        

        {/* First Look Section */}
        <div className="text-center pt-6">
          {/* Title */}
          <div>
            <h4 className="font-medium text-[14px] sm:text-[15px]">First Look</h4>
            <h1 className="text-[32px] sm:text-[48px] lg:text-[56px] font-medium leading-tight">
              Nike Air Max Pulse
            </h1>
            <p className="text-[13px] sm:text-[15px] px-4 sm:px-8 lg:px-0 lg:w-[600px] mx-auto">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —
              designed to push you past your limits and help you go to the max.
            </p>
          </div>

          {/* Buttons */}
          <div className="pt-6 flex justify-center gap-4">
            <button className="w-[100px] hover:bg-slate-700 sm:w-[120px] lg:w-[140px] rounded-full bg-black text-col1 py-2 text-sm">
              Notify Me
            </button>
            <Link href='/All-Products'>
            <button className="w-[120px] hover:bg-slate-700 sm:w-[140px] lg:w-[160px] rounded-full bg-black text-col1 py-2 text-sm">
              Shop Air Max
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
