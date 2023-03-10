/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

export default function Card(props) {
  const [open,setOpen]=useState(false)
  return (
    <div className="block group my-4 border border-gray-300 rounded-md">
        <img
          src={props.image}
          alt=""
          className="w-full object-cover transition duration-500 group-hover:opacity-40 h-[250px]"
        />
        

        <div className="h-48 bottom-0 left-0 right-0 flex flex-col items-start justify-end p-6 bg-gray-300 bg-opacity-50">
            <div className='flex justify-between w-full'>
              <p className="mt-1.5 max-w-[40ch] text-sm font-medium text-gray-800">{props.category}</p>

              <span onClick={()=>setOpen(!open)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-xs font-medium text-center text-gray-900  rounded-lg  focus:ring-4 focus:outline-none focus:ring-gray-50"> 
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className='w-4'><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
              </span>
              {open&&
              <ul className="py-2 text-sm absolute my-8 ml-48 bg-white" aria-labelledby="dropdownDefaultButton">
                <li onClick={()=>setOpen(false)} className="px-3 py-2 w-full text-left cursor-pointer hover:bg-gray-50">
                    Edit
                </li>
                <li onClick={()=>setOpen(false)} className="px-3 py-2 w-full text-left cursor-pointer hover:bg-gray-50">
                    Delete
                </li>
                
              </ul>}

            </div>
            <h3 className="text-xl font-bold text-gray-900">{props.description}</h3>

            <p className="mt-1.5 max-w-[40ch] text-sm font-medium text-gray-800">
            {props.price}
            </p>
            <div className='flex justify-between'>
              <span
              className="inline-block px-5 py-3 mt-3 mx-2 text-xs font-medium tracking-wide text-white uppercase bg-black hover:bg-gray-900 transition-all duration-500"
              >
              Shop Now
              </span>
              <span
              className="inline-block px-5 py-3 mt-3 text-xs font-medium tracking-wide text-black hover:text-gray-900 uppercase border border-black  transition-all duration-500"
              >
              Add to cart
              </span>
            </div>
        </div>
    </div>

  )
}
