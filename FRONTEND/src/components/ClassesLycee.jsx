import React, {useContext} from 'react';
import Connexion from './Connexion';
import { LoginContext } from '../../Context/Context';
import { useNavigate } from 'react-router';


const ClassesLycee = () => {
  const Navigate=useNavigate()
  const token=useContext(LoginContext);
  function Matieres(){
    Navigate("/courslycee")
  }
  if(token && typeof localStorage!== 'undefined'){
    return (
    <div>
       <div className='w-full h-[30vh] rounded-br-full border-b-4 border-r-4 green relative border-[#2b457e]'>
            <h1 className='text-white text-4xl absolute font-normal top-16 left-8'>Choix de la Classe</h1>
       </div>
       <div>
         <div className=' my-12 mx-7'>
            <button onClick={Matieres} className='border-2 w-[150px] h-14 py-2 rounded-xl green text-white text-xl '>2A4</button>
            <button onClick={Matieres} className='border-2 w-[150px] h-14 py-2 rounded-xl green text-white text-xl '>2CD</button>
            <button onClick={Matieres} className='border-2 w-[150px] h-14 py-2 rounded-xl green text-white text-xl '>1A4</button>
            <button onClick={Matieres} className='border-2 w-[150px] h-14 py-2 rounded-xl green text-white text-xl '>1 D</button>
            <button onClick={Matieres} className='border-2 w-[150px] h-14 py-2 rounded-xl green text-white text-xl '>1 C4</button>
            <button onClick={Matieres} className='border-2 w-[150px] h-14 py-2 rounded-xl green text-white text-xl '>Tle D</button>
            <button onClick={Matieres} className='border-2 w-[150px] h-14 py-2 rounded-xl green text-white text-xl '>Tle C4</button>
            <button onClick={Matieres} className='border-2 w-[150px] h-14 py-2 rounded-xl green text-white text-xl '>Tle A4</button>
        </div>
       </div>
       </div>
  );
  }else{
    return(
      <Connexion/>
    )
  }
}

export default ClassesLycee;
