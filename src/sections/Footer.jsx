import React from 'react';
import { fb, insta, twitter, yt } from '../assets/icons';

const Footer = () => {
  return (
    <section className='w-full bg-black text-white flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-4 px-10 py-14 lg:px-20 lg:py-28'>
     
      <div className="flex flex-col justify-center items-start gap-2 w-full lg:w-[40%]">
        <h1 className='text-green-600 font-bold text-4xl'>DEBUG ENTITY</h1>
        <p className='text-lg text-slate-200'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptates ex suscipit quibusdam consequatur animi dolore exercitationem velit unde expedita.
        </p>
     
      <div className='flex justify-center items-center gap-4 mt-7 w-full lg:w-[40%]'>
        <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-green-600'>
          <img src={fb} alt="Facebook icon" width={20} height={20} />
        </span>
        <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-green-600'>
          <img src={insta} alt="Instagram icon" width={20} height={20} />
        </span>
        <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-green-600'>
          <img src={twitter} alt="Twitter icon" width={20} height={20} />
        </span>
        <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-green-600'>
          <img src={yt} alt="YouTube icon" width={20} height={20} />
        </span>
        </div>
      </div>
      <div classNane='flex flex-col justify-center items-start lg:items-center w-full lg:w[20%]'>
        <h1 ClassName='text-xl font-semibold'>PAGES</h1>
        <ul className='flex flex-col justify-center items-start gap-4 mt-10'>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Home</li>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Services</li>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Testimonials</li>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Pricing</li>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Contact</li>
      </ul>

      </div>
      <div classNane='flex flex-col justify-center items-start lg:items-center w-full lg:w[20%]'>
        <h1 ClassName='text-xl font-semibold'>PAGES</h1>
        <ul className='flex flex-col justify-center items-start gap-4 mt-10'>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Home</li>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Services</li>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Testimonials</li>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Pricing</li>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Contact</li>
      </ul>

      </div>
      <div classNane='flex flex-col justify-center items-start lg:items-center w-full lg:w[20%]'>
        <h1 ClassName='text-xl font-semibold'>PAGES</h1>
        <ul className='flex flex-col justify-center items-start gap-4 mt-10'>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Home</li>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Services</li>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Testimonials</li>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Pricing</li>
        <li className='text-slate-300 cursor-pointer hover:text-green-300'>Contact</li>
      </ul>

      </div>
    </section>
  );
}

export default Footer;
