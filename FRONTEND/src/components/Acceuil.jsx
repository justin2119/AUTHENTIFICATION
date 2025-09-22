import React from 'react'


const Acceuil = () => {
    return (
        <div className={`bg`}>
            <div>
                <nav className='bg-blue-700 text-xl text-white  px-2'>
                    <div className=' flex justify-between mx-5 py-4 '>

                        <div>
                            <label htmlFor="">COURS </label>
                            <select className=' list-none cursor-pointer border-2 bg-blue-700 rounded-full px-3'>
                                <option value="PHYSIQUE">PHYSIQUE</option>
                                <option value="CHIMIE">CHIMIE</option>
                                <option value="MATHEMATIQUE">MATHEMATIQUE</option>
                                <option value="SVT">SVT</option>
                                <option value="HISTOIRE-GEOGRAPHIE">HISTOIRE-GEOGRAPHIE</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">EVALUATIONS </label>
                            <select className=' list-none cursor-pointer bg-blue-700  rounded-full px-3 border-2'>
                                <option value="DEVOIR">DEVOIR</option>
                                <option value="COMPOSITIONS">COMPOSITIONS</option>
                            </select>
                        </div>
                        <li className=' list-none cursor-pointer hover:underline'>EXAMEN BLANC</li>
                        <li className=' list-none cursor-pointer hover:underline'>EXAMEN NATIONAL</li>
                        <li className=' list-none cursor-pointer hover:underline'>A PROPOS</li>
                        <li className=' list-none cursor-pointer hover:underline'>CONTACTS</li>
                    </div>
                </nav>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Acceuil
