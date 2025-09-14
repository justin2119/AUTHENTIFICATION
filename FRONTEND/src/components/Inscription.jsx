import React from 'react'
import { useNavigate } from 'react-router'



const Inscription = () => {
  const navigate =useNavigate()
  
  function Submite(){
    navigate("/")
  }
  return (
    <div className="w-full h-screen container ">
      <div className="w-1/2 mx-auto translate-y-[50%]">
      <marquee className=" text-2xl font-light text-blue-600 text-center mb-3">Bienvenus pour l'inscription</marquee>
        <form action="" onSubmit={Submite}>
          <label className="w-full text-xl  font-light mb-1" htmlFor="nom">Nom</label> <br />
          <input className="border-2 w-full py-2  px-2 rounded-xl" type="text" name="nom" id="" placeholder="Nom" /> <br />
          <label className="w-full text-xl  font-light mb-1" htmlFor="email">Adresse email</label> <br />
          <input className="border-2 w-full py-2  px-2 rounded-xl" type="email" name="email" id="" placeholder="Email" /> <br />
          <label className="w-full text-xl font-light mb-1" htmlFor="password" >Mots de passe</label> <br />
          <input className="border-2 w-full py-2  px-2 rounded-xl" type="password" name="password" id="" placeholder="123@hhhhh" /> <br />
          <input className="bg-blue-700 mt-2 px-2 py-3 w-full text-white font-light rounded-xl" type="submit" value={"Inscription"} />
        </form>
      </div>
    </div>
  )
}

export default Inscription
