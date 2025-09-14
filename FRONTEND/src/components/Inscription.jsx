import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from "axios"



const Inscription = () => {
  const navigate =useNavigate()
  const[nom,setNom]=useState("")
  const[prenom,setPrenom]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[confirm_password,setConfirm_password]=useState("")
  
  const Submit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/api/login",{nom,prenom,email,password,confirm_password})
          .then(res=>{
            console.log(res.data)
            navigate("/")
          })
          .catch(err=>console.log(err))
  }
  return (
    <div className="w-full h-full container ">
      <div className="w-1/2 mx-auto h-1/2 mt-5">
      <marquee className=" text-2xl font-light text-blue-600 text-center mb-3">Bienvenus pour l'inscription</marquee>
        <form action="" onSubmit={Submit}>
          <label className="w-full text-xl  font-light mb-1" htmlFor="nom">Nom</label> <br />
          <input value={nom} onChange={(e)=>setNom(e.target.value)} className="border-2 w-full py-2  px-2 rounded-xl" type="text" name="nom" id="" placeholder="Nom" /> <br />
          <label className="w-full text-xl  font-light mb-1" htmlFor="nom">Prenom</label> <br />
          <input value={prenom} onChange={(e)=>setPrenom(e.target.value)} className="border-2 w-full py-2  px-2 rounded-xl" type="text" name="prenom" id="" placeholder="Prenom" /> <br />
          <label className="w-full text-xl  font-light mb-1" htmlFor="email">Adresse email</label> <br />
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="border-2 w-full py-2  px-2 rounded-xl" type="email" name="email" id="" placeholder="Email" /> <br />
          <label className="w-full text-xl font-light mb-1" htmlFor="password" >Mots de passe</label> <br />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} className="border-2 w-full py-2  px-2 rounded-xl" type="password" name="password" id="" placeholder="123@hhhhh" /> <br />
           <label className="w-full text-xl font-light mb-1" htmlFor="confirm_password" > Confirmer le mots de passe</label> <br />
          <input value={confirm_password} onChange={(e)=>setConfirm_password(e.target.value)} className="border-2 w-full py-2  px-2 rounded-xl" type="password" name="confirm_password" id="" placeholder="123@hhhhh" /> <br />
          <input className="bg-blue-700 mt-2 px-2 py-3 w-full text-white font-light rounded-xl" type="submit" value={"Inscription"} />
        </form>
      </div>
    </div>
  )
}

export default Inscription
