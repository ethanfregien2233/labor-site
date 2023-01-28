import React from 'react';
import Farmer from '../assets/farmer.png';

const Placeholder = () => {
  return (
    <div className='py-16 px-4 w-full bg-[#18332f]'>
      <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto '>
        <img className='w-[500px] rounded-lg mx-auto my-4' src={Farmer} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[white] font-bold '>Mastering the Craft</p>
          <h1 className='sm:text-3xl text-[#8ba17f] md:text-4xl text-2xl font-bold py-2'>Adapting to Innovation.</h1>
          <p className='text-[white]'>
          We take pride in our ability to adapt to the ever-changing demands of the industry, and are committed to staying current with the latest technologies and techniques. Jr Lopez Farms doesn't just stay ahead of the curve, we set it. Our team is comprised of skilled and experienced professionals who are dedicated to their craft, and strive to provide the best service possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;