import React from 'react';
import Farmer from '../assets/farmer.png';
const Farm = () => {
  return (
    <div className='py-10 px-4  w-full bg-[#18332f]' id='Farm'>
      <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto '>
        <img className='w-[500px] mx-auto my-4' src={Farmer} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[white] font-bold '>Growing Sustainability</p>
          <h1 className='sm:text-3xl md:text-4xl text-[#8ba17f] text-2xl font-bold py-2'>Committed to efficient labor practices.</h1>
          <p className='text-[white]'>
          At Jr Lopez Farms, we are dedicated to promoting sustainable and efficient labor practices within the agricultural industry. As one of the leading farming states in the nation, California plays a crucial role in producing a significant portion of the country's fruits, vegetables, and nuts. As such, the hardworking farm laborers who tend to these crops are of the utmost importance and we treat them as such.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Farm;