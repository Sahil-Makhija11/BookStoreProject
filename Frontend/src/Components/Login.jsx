import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={() => document.getElementById('my_modal_3').close()}
      >
        ✕
        </Link>
   
    <h3 className="font-bold text-lg">Login</h3>

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
            {...register("password", { required: true })} /> <br />
                    {errors.password && <span className='text-sm text-red-500'>Password is required</span>}

            </div>
      
            {/* button */}
    <div>
    <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer'>
    Login    
    </button>   
    <p className='mt-3'>Not Register? {" "}
    <Link to='/signup' className='underline text-blue-400 cursor-pointer'>
    Signup
    </Link>{" "}</p> 
    </div>   
     </form>   
  </div>
</dialog>
    </div>
  )
}

export default Login
