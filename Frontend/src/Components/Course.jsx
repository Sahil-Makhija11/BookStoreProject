import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useEffect , useState } from 'react'
import axios from 'axios'

function Course() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
      const res = await  axios.get('http://localhost:4001/book')
      console.log(res.data)
      setBook(res.data)

      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, [])


  return (
    <div className=' max-w-screen-2xl container mx-auto md:px-5 px-4'>
    <div className='mt-28 items-center justify-center text-center'>    
    <h1 className='text-2xl  md:text-4xl'>
        We're delighted to have you <span className='text-blue-500'> here!</span>
    </h1>
    <p className='mt-12'>
        Welcome to your personalized book haven! Here, you’ll find all your purchased titles neatly organized for easy access.
         Revisit your favorite reads or dive into new ones anytime. 
         Your literary journey continues here—convenient, curated, and always at your fingertips. 
         <br /><span className='text-blue-500'> Thank you for being a valued reader with us!</span>

    </p>
    <Link to='/'>
    <button className='mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer'>
    Back
    </button>
    </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>{
            book.map((item) => (   
                <Cards key={item.id} item={item} />
            ))        
        }
    </div>
    </div>
  )
}

export default Course
