import NavBar from './Components/NavBar.js';
import './App.css';
import React from 'react';
import About from "./Components/About.js";
import Qualification from './Components/Qualification.js';
import Skills from './Components/Skills.js';
import Contact from './Components/Contact.js';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function App() {
  return (
   <>
   <NavBar/>
   <About/>
   <Qualification/>
   <Skills/>
   <Contact/>
   </>
  );
}

export default App;
