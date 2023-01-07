import React from 'react';
import './index.css';
import { Routes, Route,Router } from "react-router-dom";
import Homepage from './component/Homepage';
import Contact from './component/Contact/Index';
import Signup from './component/Sign/Signup';
import Signin from './component/Sign/Signin';
import Reset from './component/Sign/Reset';



function App() {
  return (


    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/reset" element={<Reset />} />



    </Routes>
   
  );
}

export default App;
