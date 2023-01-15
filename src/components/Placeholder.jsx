import React from 'react';
import Farmer from '../assets/farmer.png';

const Placeholder = () => {
  return (
    <div className='py-16 px-4 w-full bg-[#18332f]'>
      <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto '>
        <img className='w-[500px] rounded-lg mx-auto my-4' src={Farmer} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#a3dd2b] font-bold '>Harvesting Services Section</p>
          <h1 className='sm:text-3xl text-[#8ba17f] md:text-4xl text-2xl font-bold py-2'>Farm your farm.</h1>
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

export default Placeholder;