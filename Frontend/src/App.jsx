import { useState } from 'react'
import React from 'react'
import './App.css'
import Home from './Home/home';
import { Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';

function App() {
 

  return (
    <>     
     {/* <Home/>
     <Course/> */}
     <div >
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
     </Routes>
     </div>
    </>
  );
}

export default App
