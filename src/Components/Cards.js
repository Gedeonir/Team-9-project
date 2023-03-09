import React,{useState} from 'react'
import Card from './Card';
import DropDown from './DropDown';
import Modal from './Modal';


export default function Cards() {
    const [open,setOpen]=useState(false);
    const [openModal,setOpenModal]=useState(false)

  return (
    <><div className="lg:flex justify-between px-8 sm:block py-3">
          <div className="mb-2 lg:w-64 sm:w-full">
              <input type="text"
                  id="searchWord"
                  className="bg-gray-50 shadow text-sm rounded-xs outline-none focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5"
                  placeholder="Search for products" required />
          </div>
          <button onClick={() => setOpen(!open)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-48 justify-between bg-gray-50 hover:bg-gray-100 focus:ring-1 focus:outline-none font-medium rounded-xs text-sm px-4 py-1 h-10 text-center inline-flex items-center " type="button">Filter by Region<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
          {open &&
                <DropDown/>
            }
        </div>
        <div className='flex justify-between px-8'>
            <h3 className="text-xl mb-2 text-gray-900 font-bold">Products(1)</h3>
            <button onClick={()=>setOpenModal(true)} data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block mb-2 text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xs text-sm px-5 py-2.5 text-center" type="button">
                Add new product
            </button>
        </div>
        {openModal&& <Modal setOpenModal={setOpenModal}/>}
        <hr/>
        <div className="lg:grid lg:grid-cols-4 lg:gap-3 px-8 py-2  my-4 sm:block">
            <Card />
        </div>

        
        </>
  )
}
