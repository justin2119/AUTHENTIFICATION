import React from 'react';

const ClasseCollege = () => {
  return (
   <div>
       <div className='w-full h-[30vh] rounded-br-full border-b-4 border-r-4 green relative border-[#2b457e]'>
            <h1 className='text-white text-4xl absolute font-normal top-16 left-8'>Choix de la Classe</h1>
       </div>
       <div>
         <div className='mt-20 mx-5 pl  flex flex-1 flex-wrap scale-110 '>
            <button className='border-2 w-[320px] h-14 py-2 rounded-xl green text-white text-xl '>6 eme</button>
            <button className='border-2 w-[320px] h-14 py-2 rounded-xl green text-white text-xl '>5 eme</button>
            <button className='border-2 w-[320px] h-14 py-2 rounded-xl green text-white text-xl '>4 eme</button>
            <button className='border-2 w-[320px] h-14 py-2 rounded-xl green text-white text-xl '>3 eme</button>
            
        </div>
       </div>
       </div>
  );
}

export default ClasseCollege;
