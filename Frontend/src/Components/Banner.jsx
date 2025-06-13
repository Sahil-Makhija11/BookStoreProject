import React from 'react'
import banner from '../../public/Banner.jpg'
function Banner() {
  return (
    <>
      <div className=' max-w-screen-2xl container mx-auto md:px-0 px-4 flex flex-col md:flex-row  my-10'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
        <h1 className='text-4xl font-bold'>Great reads, <span className='text-blue-500'> one click away.</span></h1>
        <p text-xl >Welcome to your personal bookspace—where stories live, ideas thrive, <br />
                    and every shelf has something just for you. Whether it's fiction, facts, <br />
                    or  something in between, we're glad you're here.</p>
      
              <div className="join">
  <div>
    <label className="input validator join-item">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" placeholder="mail@BookStore.com" required />
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  </div>
  <button className="btn btn-neutral join-item bg-blue-500">Join</button>
</div>
      
       </div>
        </div>
        <div className='order-1 w-full md:w-1/2'>
        <img src={banner} className='w-150 h-105' alt="book photo" />
        </div>
      </div>
    </>
  )
}

export default Banner
