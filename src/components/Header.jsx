import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../styles/tailwind.css'
const Header = () => {
  const [header, setHeader] = useState(false);

  const handleHeader = () => {
    setHeader(!header);
  };
  useEffect(() => {
    const handleWindowResize = () => {
      const mediaQuery = window.matchMedia("(max-width: 767px)");
      if (header && !mediaQuery.matches) {
        setHeader(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [header]);



  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#bdcbc7]'>Farmers Co.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleHeader} className='block md:hidden'>
          {header ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={`mobile-header ${header ? 'fixed top-0 left-0 w-[70%]  border-r border-r-gray-900 h-full bg-[#5d975d] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}`}>
        <h1 className='w-full text-3xl font-bold text-[#bdcbc7] m-4'>Farmers Co.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Header;