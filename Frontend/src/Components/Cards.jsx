import React from 'react'

function Cards({ item }) {
  return (
   <>
   <div  className="  flex flex-wrap justify-center items-stretch gap-4 ">
    <div className="card bg-base-100 w-96 shadow-xl h-full flex flex-col justify-between hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name} 
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>

   </div>
   </>
  )
}

export default Cards