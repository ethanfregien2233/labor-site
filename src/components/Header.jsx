import React, { useState, useEffect, useRef  } from 'react';
import Contact from './Contact';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../styles/tailwind.css'
const Header = () => {

  function handleHeaderClick(string) {
    const section = document.getElementById(string);
    section.scrollIntoView({ behavior: 'smooth' });
    
  }

  function handleMobileHeaderClick(string) {
    const section = document.getElementById(string);
    section.scrollIntoView({ behavior: 'smooth' });
    handleHeader()
    
  }
  function handleMissionClick() {
    const farm = document.getElementById('Farm');
    farm.scrollIntoView({ behavior: 'smooth' });
    
  }
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
  <li className='p-4 transition ease-in-out delay-15s hover:-translate-y-1 hover:scale-110 duration-300'>
    <a href="/home">Home</a>
  </li>
  <li className='p-4 transition ease-in-out delay-15s hover:-translate-y-1 hover:scale-110 duration-300'>
    <a className='hover: cursor-pointer' onClick={() => handleHeaderClick('Farm')}>Company</a>
  </li>
  <li className='p-4 transition ease-in-out delay-15s hover:-translate-y-1 hover:scale-110 duration-300'>
    <a href="/about">Mission</a>
  </li>
  <li className='p-4 transition ease-in-out delay-15s hover:-translate-y-1 hover:scale-110 duration-300'>
    <a className='hover: cursor-pointer' onClick={() => handleHeaderClick('Contact')}>Resources</a>
  </li>
  <li className='p-4 transition ease-in-out delay-15s hover:-translate-y-1 hover:scale-110 duration-300'>
  <a className='hover: cursor-pointer' onClick={() => handleHeaderClick('Contact')}>Contact</a>
  </li>
</ul>
<div onClick={handleHeader} className='block md:hidden'>
  {header ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
</div>
<ul className={`mobile-header ${header ? 'fixed top-0 left-0 w-[70%] border-r h-full bg-[#8ba17f] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}`}>
  <h1 className='w-full text-3xl font-bold text-[#bdcbc7] m-4'>Jr Lopez Farms</h1>
  <li className='p-4 border-b border-gray-600'>
    <a className='hover: cursor-pointer' onClick={() => handleMobileHeaderClick('Hero')}>Home</a>
  </li>
  <li className='p-4 border-b border-gray-600'>
  <a className='hover: cursor-pointer' onClick={() => handleMobileHeaderClick('Farm')}>Company</a> 
  </li>
  <li className='p-4 border-b border-gray-600'>
    <a className='hover: cursor-pointer' onClick={() => handleMobileHeaderClick('Farm')}>Resources</a>
  </li>
  <li className='p-4 border-b border-gray-600'>
    <a className='hover: cursor-pointer' onClick={() => handleMobileHeaderClick('Farm')}>Mission</a>
  </li>
  <li className='p-4'>
  <a className='hover: cursor-pointer' onClick={() => handleMobileHeaderClick('Contact')}>Contact</a>
  </li>
</ul>

    </div>
  );
};

export default Header;