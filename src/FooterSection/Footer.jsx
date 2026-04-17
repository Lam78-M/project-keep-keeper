import React from 'react';
import Insta from "../assets/instagram.png"
import Faceb from "../assets/facebook.png"
import Twit from "../assets/twitter.png"

const Footer = () => {
    return (
     <div className='bg-[#244D3F] '>
     <div className='container mx-auto space-y-6   '>
      <h1  className='text-3xl md:text-5xl lg:text-5xl text-center pt-10 md:pt-15 font-semibold text-[#ffffff]'>KeenKeeper</h1>
      <p className='text-sm md:text-base lg:text-[18px] text-center text-[#ffffffad]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
       <p className='text-center text-xl font-semibold text-[#ffffff]'>Social Links</p>
      <div className='flex gap-3 justify-center items-center'>
      <img className='w-6 md:w-8' src={Insta} alt="" />
      <img className='w-6 md:w-8' src={Faceb} alt="" />
      <img className='w-6 md:w-8' src={Twit} alt="" />
      </div>
      <div className="opacity-20 text-[#ffffff8e] mt-20">
      <hr />
      </div>
     <div className='flex flex-col md:flex-row md:items-center justify-between items-center text-[#ffffffae] gap-3 pb-10'>

     <p className='text-center md:text-left'>
     © 2026 KeenKeeper. All rights reserved.
     </p>

    <div className='flex flex-wrap justify-center items-center md:justify-end gap-3 '>
    <p>Privacy Policy</p>
    <p>Terms of Service</p>
    <p>Cookies</p>
    </div>

   </div>      
       </div>
      </div>
    );
};

export default Footer;