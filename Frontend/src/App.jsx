import { useState } from 'react'
import React from 'react'
import './App.css'
import Home from './Home/home';
import Course from './Components/Course';
import { Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    <>     
     {/* <Home/>
     <Course/> */}
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
     </Routes>
    </>
  );
}

export default App
