import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const JoinUsPage = () => {
  return (
    <div className='h-screen'>
       <div className='flex justify-center'>
            <div className='w-[380px] p-4  h-[489px] '>
              
             <div className='w-[324px] p-4 '>
              
              <Image src='/images/nike.png' alt='nike logo' width={324} height={17} />
                 <div className='text-center py-4'>
              <h3 className='font-bold text-lg '>BECOME A NIKE MEMBER</h3>
              <p className='text-sm leading-[22px] inter tracking-wider mt-4 text-[#8D8D8D]'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
             </div>
             </div>
              

           <div className='w-[324px] pl-4 rounded-[3px]  border-[1px] border-[#E5E5E5] h-[40px] '>
              <input type="text" name='email'  placeholder='Email address' className='w-full outline-none pt-1' />
           </div>
           <div className='w-[324px] pl-4 mt-4 radius-[3px] border-[1px] border-[#E5E5E5] h-[40px] '>
              <input type="text" name='password' placeholder='Password' className='w-full outline-none pt-1' />
           </div>
           <div className='w-[324px] pl-4 mt-4 rounded-[3px]  border-[1px] border-[#E5E5E5]  h-[40px] '>
        <input type="text" name='email'  placeholder='First Name' className='w-full outline-none pt-1' />
     </div>
     <div className='w-[324px]  pl-4 mt-4 rounded-[3px] border-[1px] border-[#E5E5E5] h-[40px] '>
        <input type="text" name='password' placeholder='Last Name' className='w-full outline-none pt-1' />
     </div>
     <div className='w-[324px]  pl-4 mt-4 rounded-[3px] border-[1px] border-[#E5E5E5] h-[40px] '>
        <input type="text" name='password' placeholder='Last Name' className='w-full outline-none pt-1' />
     </div>

      
           <div className='pt-4 flex justify-between'>
         <div className='flex gap-4'>
         <input type='checkbox' className='w-[20px]  h-[20px] '  />
          <p className='text-xs text-[#8D8D8D]'>Keep me signed in</p>
         </div>
         <p className='text-[#8D8D8D] text-xs '>Forgotten your password?</p>
         </div>
         <p className='text-center mt-4 w-[279.31px] pl-8 text-xs text-[#8D8D8D]'>By logging in, you agree to Nike&apos;s Privacy Policy and Terms of Use.</p>
           <div className=' bg-black rounded-[3px] text-center text-white mt-6'>
              <button className='text-[11px]  py-3 '>JOIN US</button>
           </div>
           <div className='text-center mt-4 text-[11px]'>
      
              <span className='text-[#8D8D8D]'>Not a Member? </span><Link href='/SignIn'><span className='underline pl-1'>Sign In.</span></Link>
           </div>
            </div>
            </div>
    </div>
  )
}

export default JoinUsPage
