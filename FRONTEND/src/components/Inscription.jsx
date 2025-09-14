import React from 'react'


const Inscription = () => {
  const navigate0
  function Submite(){

  }
  return (
    <div className="w-full h-screen container ">
      <div className="w-1/2 mx-auto translate-y-[50%]">
      <marquee className=" text-2xl font-light text-blue-600 text-center mb-3">Bienvenus pour l'inscription</marquee>
        <form action="">
          <label className="w-full text-xl  font-light mb-1" htmlFor="username">Username</label> <br />
          <input className="border-2 w-full py-2  px-2 rounded-xl" type="text" name="username" id="" placeholder="Username" /> <br />
          <label className="w-full text-xl  font-light mb-1" htmlFor="username">Email</label> <br />
          <input className="border-2 w-full py-2  px-2 rounded-xl" type="text" name="email" id="" placeholder="Email" /> <br />
          <label className="w-full text-xl font-light mb-1" htmlFor="username" >Password</label> <br />
          <input className="border-2 w-full py-2  px-2 rounded-xl" type="text" name="password" id="" placeholder="123@hhhhh" /> <br />
          <input className="bg-blue-700 mt-2 px-2 py-3 w-full text-white font-light rounded-xl" type="submit" value={"Inscription"} />
        </form>
      </div>
    </div>
  )
}

export default Inscription
