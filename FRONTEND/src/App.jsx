import React from 'react'
import { Routes,Route} from 'react-router'
import Connexion from './components/Connexion'
import Acceuil from './components/Acceuil'
import Inscription from './components/Inscription'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element ={<Connexion/>}></Route>
        <Route path="/acceuil" element ={<Acceuil/>}></Route>
        <Route path="/inscription" element ={<Inscription/>}></Route>
      </Routes>
    </div>
  )
}

export default App
