import React from 'react';
import Logo from './components/All/Logo';
import ScreenSplash from './components/ScreenSplash';
import {Routes,Route} from "react-router-dom"
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import Acceuil from './components/Acceuil';
import Cycle from './components/Cycle';
import ClassesLycee from './components/ClassesLycee';
import ClasseCollege from './components/ClasseCollege';
import CoursLy from './components/CoursLy';
import CoursCollege from './components/CoursCollege';
import Evaluations from './components/Evaluations';
import CoursChapitreLycee from './components/CoursChapitreLycee';
import Pdfview from "./components/Pdfview.jsx";

const App = () => {
  return (
    <>
     <div className={""}>
     <Logo/>
     <div className=' absolute top-10 -z-10'>
      <Routes>
      <Route path="/" element={<ScreenSplash/>}/>
      <Route path="/connexion" element={<Connexion/>}/>
      <Route path="/inscription" element={<Inscription/>}/>
      <Route path="/acceuil" element={<Acceuil/>}/>
      <Route path="/cycle" element={<Cycle/>}/>
      <Route path="/classesly" element={<ClassesLycee/>}/>
      <Route path="/classescl" element={<ClasseCollege/>}/>
      <Route path="/courslycee" element={<CoursLy/>}/>
      <Route path="/courscollege" element={<CoursCollege/>}/>
      <Route path="/evaluation" element={<Evaluations/>}/>
      <Route path="/chapitrelycee" element={<CoursChapitreLycee/>}/>
       <Route path={"pdfview"} element={<Pdfview/>}/>
     </Routes>
     </div>
    </div>
    </>
  );
}

export default App;
