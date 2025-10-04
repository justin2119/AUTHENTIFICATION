import React from 'react';

const CoursCollege = () => {
  return (
    <div>
       <div className='w-full h-[30vh] rounded-br-full border-b-4 border-r-4 green relative border-[#2b457e]'>
            <h1 className='text-white text-4xl absolute font-normal top-16 left-8'>Cours Cycle 1</h1>
       </div>
       <div>
         <div className='mt-20 mx-5 pl  flex flex-1 flex-wrap scale-110 '>
            <button className='border-2 w-[320px] h-14 py-2 rounded-xl green text-white text-xl '>PCT</button>
            <button className='border-2 w-[320px] h-14 py-2 rounded-xl green text-white text-xl '>MATH</button>
            <button className='border-2 w-[320px] h-14 py-2 rounded-xl green text-white text-xl '>ANG</button>
            <button className='border-2 w-[320px] h-14 py-2 rounded-xl green text-white text-xl '>HG</button>
            <button className='border-2 w-[320px] h-14 py-2 rounded-xl green text-white text-xl '>SVT</button>
            <button className='border-2 w-[320px] h-14 py-2 rounded-xl green text-white text-xl '>FR</button>
            
        </div>
       </div>
       </div>
  );
}

export default CoursCollege;
