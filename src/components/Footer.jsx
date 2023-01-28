import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
const Footer = () => {
  function handleFooterClick(string) {
    const section = document.getElementById(string);
    section.scrollIntoView({ behavior: 'smooth' });
    
  }
  return (
    <div className='w-full text-white bg-brown] py-14'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='text-center justify-between items-center sm:flex'>
          <h1>Lopez Farms</h1>
          <div className='flex justify-between my-4 sm:max-w-[280px] w-full'>
            <FaFacebook className='icon' size={30} />
            <FaTwitter className='icon' size={30} />
            <FaYoutube className='icon' size={30} />
            <FaPinterest className='icon' size={30} />
            <FaInstagram className='icon' size={30} />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li className='m-2'>Home</li>
            <li className='m-2'>Company</li>
            <li className='m-2'>Resources</li>
            <li className='m-2'>About</li>
            <li className='m-2'>Contact</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;