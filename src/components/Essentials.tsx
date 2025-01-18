
import React from 'react';
import Image from 'next/image';

const EssentialsPage = () => {
  return (
    <div className="pb-6 sm:pb-12">
      {/* Heading start */}
      <div className="">
      <div className='pl-5 sm:pl-20 text-center sm:text-left pt-8'>
    <p className='text-[23px] font-medium '>The Essentials</p>
</div>
      </div>
      {/* Heading end */}

      {/* Products Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 start */}
          <div className="w-full relative">
            <Image src="/images/pic1.png" alt="product 1" width={440} height={540} className="w-full sm:h-auto " />
            <div className='w-[85.19px] absolute bottom-10 left-10 bg-white rounded-[30px]'>
                <p className='text-[15px] text-center font-medium py-2'>Men&apos;s</p>
            </div>
          </div>
          {/* Card 1 end */}
          {/* Card 2 start */}
          <div className="w-full relative">
            <Image src="/images/pic2.png" alt="product 2" width={440} height={540} className="w-full sm:h-auto " />
            <div className='w-[85.19px] absolute bottom-10 left-10 bg-white rounded-[30px]'>
                <p className='text-[15px] text-center font-medium py-2'>Women&apos;s</p>
            </div>
          </div>
          {/* Card 2 end */}
          {/* Card 3 start */}
          <div className="w-full relative">
            <Image src="/images/pic3.png" alt="product 3" width={440} height={540} className="w-full sm:h-auto " />
            <div className='w-[85.19px] absolute bottom-10 left-10 bg-white rounded-[30px]'>
                <p className='text-[15px] text-center font-medium py-2'>Kid&apos;s</p>
            </div>
          </div>
          {/* Card 3 end */}
        </div>
      </div>
    </div>
  );
};

export default EssentialsPage;
