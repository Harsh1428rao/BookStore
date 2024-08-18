import React from "react";
import Home from "./Home/Home";
import Course from "../src/courses/courses";
import { Route, Routes } from "react-router-dom";

const App =()=>{
  return (
    // <>
    // <Home/>
    // <Course/>
    // </>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/course" element={<Course/>}></Route>
    </Routes>
    </div>
  )
}

export default App;
 

