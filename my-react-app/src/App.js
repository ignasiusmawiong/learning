import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Aboutus from './Aboutus/Aboutus';
import Menu from './Menu/Menu';
import Contact from './Contact/Contact';
import Explore from './Explore/Explore';


const App = () => {
  return (
    <div>
     <Home/>
     <Aboutus/>
     <Menu/>
     <Contact/>
     <Explore/>
  </div>
  );
};

export default App;
