import React from 'react';
import { Link } from 'react-router';
import {useNavigate} from "react-router-dom";



const Acceuil = () => {
    const navigate = useNavigate();
    function handleNavigate() {
        navigate("/cycle");
    }
  return (
    <>
       <div className='w-full h-[30vh] rounded-br-full border-b-4 border-r-4 green relative border-[#2b457e]'>
            <h1 className='text-white text-4xl absolute font-normal top-16 left-8'>Acceuil</h1>
       </div>
       <div>
         <div className='mt-20 mx-3 flex flex-col'>
            <button onClick={handleNavigate} className='border-2 py-2 px-16 text-3xl  rounded-xl green text-white'>COURS</button>
            <button onClick={handleNavigate} className='border-2 py-2 px-16 text-3xl  rounded-xl green text-white'>EVALUATIONS</button>
            <button onClick={handleNavigate} className='border-2 py-2 px-16 text-3xl  rounded-xl green text-white'>DOCUMENTS</button>
        </div>
       </div>
       </>
  );
}

export default Acceuil;
