import React from "react";
import Home from "./Home/Home";
import Course from "../src/courses/courses";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Contact from "./components/contact";

const App =()=>{
  return (
    // <>
    // <Home/>
    // <Course/>
    // </>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/course" element={<Course/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
   
  )
}

export default App;
 

