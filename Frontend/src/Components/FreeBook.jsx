import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'

import Cards from './Cards';
import { useState } from 'react';
import { useEffect } from 'react';

function FreeBook() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
      const res = await  axios.get('http://localhost:4001/book')
      
      const data = res.data.filter((data)=> data.category === "free")
      console.log(data)
      setBook(data);

      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, [])
    
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-0 px-4'>
      <div>
     <h1 className='font-bold text-xl pb-2'>Free offered Courses</h1> 
     <p>Dive into our collection of free eBooks, classics, and exclusive previews. <br />
        No hidden fees, no subscriptions. just great books waiting to be read. <br />
        Perfect for budget-savvy book lovers!</p>
    
</div>
    <div>
      <Slider {...settings}>
        {book.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
  </>
  )
}

export default FreeBook
