import React from 'react';
import {Button} from "flowbite-react"
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router';

const ScreenSplash = () => {
  return (
    <div className='w-full h-[50vh]'>
     <div className=' h-[40vh] pr-16 rounded-br-full bg-[#008f52] border-r-4 border-b-4 border-[#2b457e] '>
      <h3 className=' font-normal text-3xl text-white pl-2 absolute top-16 left-3'>
        Bienvenus sur Cours Plus <br />
        Ici trouvez tous les cours <br />
        Et Evaluation
      </h3>
     </div>
     <div>
      <img src="/logo.png" alt="logo" />
     </div>
      <div className='w-[25%] pl-3 mx-auto bg'>
       <Link to="/connexion">
       <button className='text-2xl rounded-full border-2 p-3 blue'><FaArrowRight/></button>
       </Link>
      </div>
    </div>
  );
}

export default ScreenSplash;
