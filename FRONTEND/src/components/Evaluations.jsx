import React from 'react';

const Evaluations = () => {
  return (
    <>
       <div className='w-full h-[30vh] rounded-br-full border-b-4 border-r-4 green relative border-[#2b457e]'>
            <h1 className='text-white text-4xl absolute font-normal top-16 left-8'>Evaluations</h1>
       </div>
       <div>
         <div className='mt-20 mx-3 flex flex-col'>

            <button className='border-2 py-2 px-16 text-3xl  rounded-xl blue text-white'>DEVOIRS</button>
            <button className='border-2 py-2 px-16 text-3xl  rounded-xl blue text-white'>COMPOSITIONS</button>
        </div>
       </div>
       </>
  );
}

export default Evaluations;
