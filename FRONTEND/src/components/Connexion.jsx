import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

const Connexion = () => {
    const navigate = useNavigate();
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const Login=()=>{
        axios.post("http://localhost:3000/connexion",{email:email,password:password})
        .then((user)=>{
            if(user){
                localStorage.setItem("token",user.data.token)
                console.log(user.data.token);
                navigate("/acceuil")
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
       <div>
       <div className='w-[400px] h-[30vh] rounded-br-full border-b-4 border-r-4 green relative border-[#2b457e]'>
            <h1 className='text-white text-4xl absolute font-normal top-16 left-8'>Connexion</h1>
       </div>
       <div className='px-2 py-2 w-[90%]'>
        <form >
            <div className='flex flex-col'>
                <label className='green-text text-2xl font-semibold mb-2' htmlFor="">Email</label>
                <input className='w-full border-2 border-blue-900 rounded py-2 pl-2' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder='Email' />
            </div>
            <div className='flex flex-col mt-2'>
                <label className='green-text text-2xl font-semibold mb-2' htmlFor="">Mot de passe</label>
                <input className='w-full border-2 border-blue-900 rounded py-2 pl-2' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder='Mot de passe' />
            </div>
            <Link to="/inscription" className='float-end underline'>Inscription</Link> <br />
            <Link><input onClick={Login} className='border-2 text-white text-xl  bg-[#2b457e] px-4 text-center rounded-md  py-2 mt-3' type="submit" value={"Connexion"} /></Link>
        </form>
       </div>
       </div>
  );
}

export default Connexion;
