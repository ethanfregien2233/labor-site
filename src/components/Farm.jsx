import React from 'react';
import Farmer from '../assets/farmer.png';

const Farm = () => {
  return (
    <div className='py-10 px-4  w-full bg-[#18332f]'>
      <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto '>
        <img className='w-[500px] mx-auto my-4' src={Farmer} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[white] font-bold '>Farming Services Section</p>
          <h1 className='sm:text-3xl md:text-4xl text-[#8ba17f] text-2xl font-bold py-2'>Farm your farm.</h1>
          <p className='text-[white]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Farm;