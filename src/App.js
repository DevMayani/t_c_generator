import React from 'react';
import './index.css';
import { useState } from "react";
import { Routes, Route,Router } from "react-router-dom";
// import { useState } from "react";
import Homepage from './component/Homepage';
import Contact from './component/Contact/Index';

function App() {
  return (


    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/Contact" element={<Contact />} />
    </Routes>
   
  );
}

export default App;
