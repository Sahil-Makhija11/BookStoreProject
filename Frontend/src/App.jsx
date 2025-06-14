import { useState } from 'react'
import React from 'react'
import './App.css'
import Home from './Home/home';
import { Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './Components/Signup';

function App() {
 

  return (
    <>     
     {/* <Home/>
     <Course/> */}
     <div >
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
      <Route path="/signup" element={<Signup />} />
     </Routes>
     </div>
    </>
  );
}

export default App
