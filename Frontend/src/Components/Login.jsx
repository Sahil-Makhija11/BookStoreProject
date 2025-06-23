import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Logged in Successfully!');
          document.getElementById('my_modal_3').close();
          setTimeout(() => {
              window.location.reload(); // Redirect to home page after login
          localStorage.setItem("User", JSON.stringify(res.data.user));
          }, 3000);
        }
        

      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
          toast.error('Error: ' + err.response.data.message);
          setTimeout(() => {}, 3000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Modal close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email input */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
            </div>

            {/* Password input */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className='text-sm text-red-500'>Password is required</span>}
            </div>

            {/* Submit button and link */}
            <div>
              <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer'>
                Login
              </button>
              <div className='mt-3'>
                Not Registered?{" "}
                <Link to='/signup' className='underline text-blue-400 cursor-pointer'>
                  Signup
                </Link>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
