import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Login from "../components/login";

function Contact() {
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
                <dialog 
                  id="my_modal_4" 
                  ref={dialogRef}
                  className="px-1 py-4 border rounded-lg flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Close the modal when this button is clicked */}
                            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            
                            <h3 className="font-bold text-lg flex justify-center mt-4">Contact Us</h3>
                            <div className='flex justify-evenly space-x-2 p-6'>
                                <div className='mt-4 space-y-2'>
                                    <span>Name</span>
                                    <br />
                                    <input 
                                        type="text" 
                                        placeholder='Enter your name' 
                                        className='w-80 px-3 py-1 border rounded-md outline-none'
                                        {...register("name", { required: "Name is required" })} 
                                    />
                                    <br/>
                                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                                </div>

                                <div className='mt-4 space-y-2'>
                                    <span>Email</span>
                                    <br />
                                    <input 
                                        type="email" 
                                        placeholder='Enter your email' 
                                        className='w-80 px-3 py-1 border rounded-md outline-none' 
                                        {...register("email", { required: "Email is required" })}/>
                                    <br/>
                                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                                </div>
                            </div>
                        
                            <div className='mt-4 space-y-2 p-6'>
                                <span>Message</span>
                                <br />
                                <textarea
                                    placeholder='Enter your message' 
                                    className='w-80 px-3 py-1 border rounded-md outline-none'  
                                    rows={5} 
                                    cols={50}
                                    {...register("message", { required: "Message is required" })}/>
                                <br/>
                                {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                            </div>

                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-150 dark:bg-slate-900 dark:text-white'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    );
}

export default Contact;
