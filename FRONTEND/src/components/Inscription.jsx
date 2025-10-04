import React, {useState} from 'react';
import { Link } from 'react-router';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Inscription = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirm_password, setconfirm_password] = useState('');
    const navigate = useNavigate();
    function HandleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/inscription', {email: email, password: password,confirm_password: confirm_password})
            .then((res)=>{
                navigate("/acceuil")

            })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
       <div className=' container w-full  h-[30vh] rounded-br-full border-b-4 border-r-4 green relative border-[#2b457e]'>
            <h1 className='text-white text-4xl absolute font-normal top-16 left-8'>Inscription</h1>
       </div>
       <div className='px-2 mx-2 py-2 w-full'>
        <form onSubmit={HandleSubmit}>
            <div className=' container flex flex-col'>
                <label className='green-text text-2xl font-semibold mb-2' htmlFor="">Email</label>
                <input name={email} value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full border-2 border-blue-900 rounded py-2 pl-2' type="email" placeholder='Email' />
            </div>
            <div className='flex flex-col mt-2'>
                <label className='green-text text-2xl font-semibold mb-2' htmlFor="">Mot de passe</label>
                <input name={password} value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full border-2 border-blue-900 rounded py-2 pl-2' type="password" placeholder='Mot de passe' />
            </div>
             <div className='flex flex-col mt-2'>
                <label className='green-text text-2xl font-semibold mb-2' htmlFor="">Confirmer le mot de passe</label>
                <input name={confirm_password} value={confirm_password} onChange={(e)=>setconfirm_password(e.target.value)} className='w-full border-2 border-blue-900 rounded py-2 pl-2' type="password" placeholder='Mot de passe' />
            </div>
            <input className='border-2 text-white text-xl  bg-[#2b457e] px-4 text-center rounded-md  py-2 mt-3' type="submit" value={"Inscription"} />
        </form>
       </div>
       </>
  );
}

export default Inscription;
