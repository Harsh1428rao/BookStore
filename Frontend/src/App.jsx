import React from "react";
import Home from "./Home/Home";
import Course from "../src/courses/courses";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Contact from "./components/contact";
import Login from "./components/login";
import { useAuth } from "./context/AuthProvider";
const App =()=>{
    const [authUser,setAuthUser]=useAuth();
    console.log(authUser);
  return (
    // <>
    // <Home/>
    // <Course/>
    // </>
<>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route
            path="/course"
            element={authUser ? <Course /> : <Navigate to="/signup" />}
          />
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
   </>
  )
}

export default App;
 

