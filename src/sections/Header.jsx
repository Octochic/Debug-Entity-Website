import React, { useState } from 'react';
import { menu, close } from '../assets/icons';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <section className='w-full bg-black text-white flex justify-between items-center px-8 py-6 lg:px-16 sticky top-0 z-40'>
        <h1 className='text-green-600 text-3xl font-bold'>Debug Entity</h1>
        <div className='hidden lg:flex justify-end items-center gap-2'>
          <ul className='flex justify-center items-center gap-3'>
            <li><a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 active:text-white' href='/'>Home</a></li>
            <li><a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 active:text-white' href='#services'>Services</a></li>
            <li><a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 active:text-white' href='#testimonials'>Testimonials</a></li>
            <li><a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 active:text-white' href='#pricing'>Pricing</a></li>
            <li><a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 active:text-white' href='#contact'>Contact</a></li>
          </ul>
        </div>
        <div className='flex lg:hidden flex-col'>
          <img 
            src={toggle ? close : menu} 
            alt={toggle ? "Close menu" : "Open menu"} 
            width={40} 
            height={40} 
            onClick={toggleMenu} 
          />
        </div>
      </section>
      {/* Mobile menu */}
      {toggle && (
        <div className='lg:hidden flex flex-col items-center gap-2 mt-0 bg-green-600 p-4 rounded-md'>
          <a className='text-lg text-white cursor-pointer rounded-sm px-5 py-2 hover:bg-green-700 active:text-white' href='/'>Home</a>
          <a className='text-lg text-white cursor-pointer rounded-sm px-5 py-2 hover:bg-green-700 active:text-white' href='#services'>Services</a>
          <a className='text-lg text-white cursor-pointer rounded-sm px-5 py-2 hover:bg-green-700 active:text-white' href='#testimonials'>Testimonials</a>
          <a className='text-lg text-white cursor-pointer rounded-sm px-5 py-2 hover:bg-green-700 active:text-white' href='#pricing'>Pricing</a>
          <a className='text-lg text-white cursor-pointer rounded-sm px-5 py-2 hover:bg-green-700 active:text-white' href='#contact'>Contact</a>
        </div>
      )}
    </>
  );
};

export default Header;
