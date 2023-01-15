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
    <div className='flex justify-between bg-[#8ba17f] items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#bdcbc7]'>Jr Lopez Farms</h1>
      <ul className='hidden md:flex'>
  <li className='p-4'>
    <a href="/home">Home</a>
  </li>
  <li className='p-4'>
    <a href="/company">Company</a>
  </li>
  <li className='p-4'>
    <a href="/resources">Resources</a>
  </li>
  <li className='p-4'>
    <a href="/about">About</a>
  </li>
  <li className='p-4'>
    <a href="/contact">Contact</a>
  </li>
</ul>
<div onClick={handleHeader} className='block md:hidden'>
  {header ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
</div>
<ul className={`mobile-header ${header ? 'fixed top-0 left-0 w-[70%] border-r h-full bg-[#8ba17f] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}`}>
  <h1 className='w-full text-3xl font-bold text-[#bdcbc7] m-4'>Jr Lopez Farms</h1>
  <li className='p-4 border-b border-gray-600'>
    <a href="/home">Home</a>
  </li>
  <li className='p-4 border-b border-gray-600'>
    <a href="/company">Company</a>
  </li>
  <li className='p-4 border-b border-gray-600'>
    <a href="/resources">Resources</a>
  </li>
  <li className='p-4 border-b border-gray-600'>
    <a href="/about">About</a>
  </li>
  <li className='p-4'>
    <a href="/contact">Contact</a>
  </li>
</ul>

    </div>
  );
};

export default Header;