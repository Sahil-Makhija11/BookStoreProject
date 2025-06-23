import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'


function Signup() {
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }
    await axios.post("http://localhost:4001/User/signup", userInfo)
      .then((res) => {
      console.log(res.data)
      if (res.data) {
       
        toast.success('Signedup successfully!');
        
      }
      localStorage.setItem("User", JSON.stringify(res.data.user));
  }).catch((err) => {
     if (err.response) {
        console.log(err.response.data.message);
        toast.error('Error: ' + err.response.data.message);
      }
    })
  };
  return (
  <>
    <div className='flex h-screen justify-center items-center'>
      <div   className="  w-[450px] ">
  <div className="Modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Signup</h3>

    {/* name */}
<div className='mt-4 space-y-2'>
        <span >Name</span>
        <br />
        <input type="text" 
            placeholder="Enter Your Name" 
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("fullname", { required: true })}
            /> <br />
         {errors.fullname && <span className='text-sm text-red-500'>Name is required</span>}

    </div>


    {/* email */}
    <div className='mt-4 space-y-2'>
        <span >Email</span>
        <br />
        <input type="email" 
            placeholder="Enter your email" 
            className="w-80 px-3 py-1 border rounded-md outline-none" 
            {...register("email", { required: true })}
            
            /> <br />
         {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
    </div>

    {/* password */}
    <div className='mt-4 space-y-2'>
        <span >Password</span>
        <br />
        <input type="password"
            placeholder="Enter your password"
            className="w-80 px-3 py-1 border rounded-md outline-none" 
            {...register("password", { required: true })}
            /> <br />
             {errors.password && <span className='text-sm text-red-500'>Password is required</span>}

            </div>

            {/* button */}
    <div>
    <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer'>
        Signup   
    </button>   
    <p className='mt-3 text-md'>Allready Joined? {" "}
    <button  className='underline text-blue-400 cursor-pointer ' 
    onClick={() => 
    document.getElementById('my_modal_3').showModal()}>
    Login
    </button>
    {" "}
    <Login />
    </p> 
    </div>  
     </form>    
  </div>
</div>
    </div>
  </>
  )
}

export default Signup
