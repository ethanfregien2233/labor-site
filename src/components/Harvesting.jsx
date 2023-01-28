import React from 'react';
import Farmer from '../assets/farmer.png';
const Harvesting = () => {
  return (
    <div className='py-16 px-4 w-full bg-[#18332f]' id='harvesting'>
      <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto '>
        <div className='flex flex-col order-2 md:order-1 justify-center'>
           <p className='text-[white] text-right font-bold '>Expertise in Action</p>
          <h1 className='sm:text-3xl md:text-4xl text-2xl text-right text-[#8ba17f] font-bold py-2'>50 Years of Crop Care and Maintenance.</h1>
          <p className='text-[white]'>
          With over 50 years of combined experience in the industry, our team is well-equipped to handle the diverse and demanding needs of our clients. We understand the importance of proper crop care and maintenance, and strive to ensure that each and every one of our farmers' crops are in the best possible hands. From planting and pruning to harvesting and beyond, we are dedicated to providing the highest level of service to our clients.
          </p>
        </div>
       <img className='w-[500px] mx-auto my-4 order-1 rounded-lg' src={Farmer} alt='/' />
      </div>
    </div>
  );
};

export default Harvesting;