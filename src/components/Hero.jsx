import React from 'react'
const Hero = () => {
  function handleContactClick() {
    const contact = document.getElementById('Contact');
    contact.scrollIntoView({ behavior: 'smooth' });
    
  }
    return (
      <div className='text-white' id='Hero'>
        <div className=' mt-[-96px] max-w-[800px]  h-screen mx-auto w-full text-center flex flex-col justify-center'>
          <p className='text-[#bdcbc7] font-bold p-2'>
           
          </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            Jr Lopez Farms
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-semibold text-[#8ba17f] py-5 m-3'>
          Bringing hard work to the harvest.
            </p>
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500'>Make your work simple.</p>
          <button onClick={handleContactClick} className='bg-[#a3dd2b] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
      </div>
    );
  };

export default Hero;