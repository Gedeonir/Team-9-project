import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../imgs/Logo.jpg'


export default function Navigation() {
  return (
    <nav>
    <div class=" bg-indigo-100 py-1">
    <div class="px-0.5 pt-0.5 lg:px-8 ">
      <nav class="flex items-center">
        <div class="flex lg:flex-1">
        <img src={Logo} class="h-20 w-20 float-left ml-16 rounded-full" alt="" />
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="home"
            class="font-bold text-black text-lg hover:text-gray-500"
          >
            Home
          </NavLink>

          <NavLink
            to="names"
            class="text-lg font-bold  text-black hover:text-gray-500"
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            class="text-lg font-bold text-black hover:text-gray-500" 
          >
            Product
          </NavLink>      
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end ">
          <NavLink
            to="login"
            class="text-lg font-bold text-black  hover:text-gray-500"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>
    </div>
 </div>
</nav>
  )
}
