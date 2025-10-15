import React, {useContext} from 'react';
import {FaArrowLeft} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {LoginContext} from "../../Context/Context.jsx";
import Connexion from "./Connexion.jsx";

const SectionCours = () => {
    const navigate = useNavigate();
    const token=useContext(LoginContext);
    function BackNavigate() {
        navigate("/acceuil",{replace: true});
    }
    function Nav() {
        navigate("/classelycee")
    }
  if(token && typeof localStorage!== 'undefined'){
      return (
          <>
              <div className='w-full h-[30vh] rounded-br-full border-b-4 border-r-4 green relative border-[#2b457e]'>
                  <button onClick={BackNavigate}  className={"px-2 pt-2 text-white"}><FaArrowLeft/></button>
                  <h1 className='text-white text-4xl absolute font-normal top-16 left-8'>Choix du Niveau</h1>
              </div>
              <div>
                  <div className='mt-20 mx-3 px-14 flex flex-col'>
                      <button onClick={Nav} className='border-2 py-2 px-16 text-3xl  rounded-xl blue text-white'>LYCEE</button>
                      <button className='border-2 py-2 px-16 text-3xl  rounded-xl blue text-white'>COLLEGE</button>
                  </div>
              </div>
          </>
      );
  }else{
      return(
          <Connexion/>
      )
  }
}

export default SectionCours;
