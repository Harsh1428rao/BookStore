import React from 'react';
import { Link } from 'react-router-dom';
import Login from "../components/login";
import { useForm } from "react-hook-form";
import  { useRef } from 'react';
import axios from 'axios';



function Signup() {
  const dialogRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    };
    await axios
    .post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        alert("Signup Successfully");
      }
      localStorage.setItem("users",JSON.stringify(res.data.user));
    }).catch((err)=>{

      if(err.response){
        
        alert("Error: "+err.response.data.message);
      }
    })
    // Close the modal after successful submission
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };
  return (
    <>
      <div >
        <dialog id="my_modal_4" className="modal-box flex h-screen items-center justify-center  dark:bg-slate-900 dark:text-white ">
          <div className="">
            <form  onSubmit={handleSubmit(onSubmit)}>
              {/* Close the modal when this button is clicked */}
              <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
           
            <h3 className="font-bold text-lg">SignUp!</h3>

            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input 
              type="text" 
              placeholder='Enter your name' 
              className='w-80 px-3 py-1 border rounded-md outline-none'
              {...register("fullname", { required: true })} 
              />
              <br/>
              {errors.fullname && <span className="text-red-500">Name is required</span>}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input 
              type="email" 
              placeholder='Enter your email' 
              className='w-80 px-3 py-1 border rounded-md outline-none' 
              {...register("email", { required: true })}/>
              <br/>
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input 
              type="text" 
              placeholder='Enter your password' 
              className='w-80 px-3 py-1 border rounded-md outline-none' 
              {...register("password", { required: true })}/>
              <br/>
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>

            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-150 dark:bg-slate-900 dark:text-white'>
                SignUp
              </button>
              <p>Have an Account? 
                <button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>
                <Login/>
              </p>
    
            </div>
            </form>
          </div>
          
        </dialog>
      </div>
    </>
  );
}

export default Signup;
