import React from 'react';
import Logo from './components/All/Logo';
import ScreenSplash from "./components/ScreenSplash.jsx";
import {Route, Routes} from 'react-router-dom';
import Acceuil from './components/Acceuil.jsx';
import Connexion from './components/Connexion.jsx';
import Inscription from './components/Inscription';
import ContextApp from '../Context/Context.jsx';
import SectionCours from "./components/SectionCours.jsx";
import SectionEvaluations from "./components/SectionEvaluations.jsx";
import SectionDocuments from "./components/SectionDocuments.jsx";
import ClassesLycee from './components/ClassesLycee';
import CoursLy from './components/CoursLy.jsx';

const App = () => {
  return (
    <ContextApp>
       <div className={""}>
     <Logo/>
     <Routes>
      <Route path='/' element={<ScreenSplash/>}/>
      <Route path="acceuil" element={<Acceuil/>}/>
      <Route path="connexion" element={<Connexion/>}/>
      <Route path="inscription" element={<Inscription/>}/>
      <Route path="acceuil/evaluations" element={<SectionEvaluations/>} />
      <Route path="acceuil/cours" element={<SectionCours/>} />
      <Route path="acceuil/documents" element={<SectionDocuments/>} />
      <Route path="classelycee" element={<ClassesLycee/>} />
      <Route path="courslycee" element={<CoursLy/>} />
     </Routes>
    </div>
    </ContextApp>
  );
}

export default App;
