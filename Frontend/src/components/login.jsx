import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const dialogRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Close the modal after successful submission
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal" ref={dialogRef}>
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              
              <h3 className="font-bold text-lg">Login!</h3>
              
              {/* email */}
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input 
                  type="email" 
                  placeholder='Enter your email' 
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("email", { required: true })}
                />
                <br/>
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              
              {/* password */}
              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input 
                  type="password" 
                  placeholder='Enter your password' 
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("password", { required: true })}
                />
                <br/>
                {errors.password && <span className="text-red-500">Password is required</span>}
                
              </div>
              
              {/* login button */}
              <div className='flex justify-around mt-4'>
                <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-150 dark:bg-slate-900 dark:text-white' >
                  Login
                </button>
                <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>SignUp</Link></p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
