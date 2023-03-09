/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Card() {
  return (
    <a href="#" className="block group my-4 hover:">
        <img
            src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
            alt=""
            className="w-full object-cover transition duration-500 group-hover:opacity-90 h-[250px]"
        />
        

        <div className="h-48 bottom-0 left-0 right-0 flex flex-col items-start justify-end p-6 bg-gray-100 bg-opacity-50">
            <p className="mt-1.5 max-w-[40ch] text-sm font-medium text-gray-800">Category</p>
            <h3 className="text-xl font-bold text-gray-900">Skinny Jeans Blue</h3>

            <p className="mt-1.5 max-w-[40ch] text-sm font-medium text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi
            dicta impedit aperiam ipsum!
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
    </a>

  )
}
