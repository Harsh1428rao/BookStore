import React from 'react';
import { Link } from 'react-router-dom';
import Login from "../components/login";

function Signup() {
  return (
    <>
      <div >
        <dialog id="my_modal_4" className="modal-box flex h-screen items-center justify-center  dark:bg-slate-900 dark:text-white ">
          <div className="">
            <form method="dialog">
              {/* Close the modal when this button is clicked */}
              <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </form>
            <h3 className="font-bold text-lg">SignUp!</h3>

            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input type="text" placeholder='Enter your name' className='w-80 px-3 py-1 border rounded-md outline-none' />
            </div>

            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none' />
            </div>

            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input type="text" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' />
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
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Signup;
