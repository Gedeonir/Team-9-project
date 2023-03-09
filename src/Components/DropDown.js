import React from 'react'

export default function DropDown(props) {
  return (
    <div id="dropdown" className="z-10 absolute right-8 w-48 top-40 bg-white divide-y  divide-gray-100 rounded-lg shadow">
        <ul className="py-2 text-sm " aria-labelledby="dropdownDefaultButton">
            <li className="px-3 py-2 w-full text-left cursor-pointer hover:bg-gray-50" onClick={()=>props.setCategory('Laptops')}>
                Laptops
            </li>
            <li onClick={()=>props.setCategory('Desktops')} className="px-3 py-2 w-full text-left cursor-pointer hover:bg-gray-50">
                Desktops
            </li>
            <li onClick={()=>props.setCategory('Speakers')} className="px-3 py-2 w-full text-left cursor-pointer hover:bg-gray-50">
                Speakers
            </li>
            <li onClick={()=>props.setCategory('Telephone')} className="px-3 py-2 w-full text-left cursor-pointer hover:bg-gray-50">
                Telephone
            </li>
            <li onClick={()=>props.setCategory('TV')} className="px-3 py-2 w-full text-left">
                TV
            </li>
        </ul>
    </div>
  )
}
