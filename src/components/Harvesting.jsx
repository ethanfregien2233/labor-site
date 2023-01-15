import React from 'react';
import Farmer from '../assets/farmer.png';

const Harvesting = () => {
  return (
    <div className='py-16 px-4 w-full bg-[#18332f]'>
      <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto '>
        <div className='flex flex-col order-2 md:order-1 justify-center'>
           <p className='text-[#8ba17f] text-right font-bold '>Harvesting Services Section</p>
          <h1 className='sm:text-3xl md:text-4xl text-2xl text-right text-[#8ba17f] font-bold py-2'>Farm your farm.</h1>
          <p className='text-[white]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
        </div>
       <img className='w-[500px] mx-auto my-4 order-1 rounded-lg' src={Farmer} alt='/' />
      </div>
    </div>
  );
};

export default Harvesting;