import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'


function Course() {
  return (
    <div className=' max-w-screen-2xl container mx-auto md:px-5 px-4'>
    <div className='mt-28 items-center justify-center text-center'>    
    <h1 className='text-2xl  md:text-4xl'>
        We're delighted to have you <span className='text-blue-500'> here!</span>
    </h1>
    <p className='mt-12'>
        Unlock the full experience with the paid version! Get access to exclusive bonus chapters, in-depth author insights, ad-free reading,<br />
        and high-quality downloadable formats. Your support helps create more great content—upgrade today!
    </p>
    <Link to='/'>
    <button className='mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer'>
    Back
    </button>
    </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>{
            list.map((item) => (   
                <Cards key={item.id} item={item} />
            ))        
        }
    </div>
    </div>
  )
}

export default Course
