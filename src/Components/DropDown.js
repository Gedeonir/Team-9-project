import React from 'react'

export default function DropDown() {
  return (
    <div id="dropdown" className="z-10 absolute right-8 w-48 top-40 bg-white divide-y  divide-gray-100 rounded-lg shadow">
        <ul className="py-2 text-sm " aria-labelledby="dropdownDefaultButton">
            <button className="px-3 py-2 w-full text-left">
                Laptops
            </button>
            <button className="px-3 py-2 w-full text-left">
                Desktops
            </button>
            <button className="px-3 py-2 w-full text-left">
                Speakers
            </button>
            <button className="px-3 py-2 w-full text-left">
                Telephone
            </button>
            <button className="px-3 py-2 w-full text-left">
                TV
            </button>
        </ul>
    </div>
  )
}
