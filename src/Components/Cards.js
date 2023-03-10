import React,{useEffect, useState} from 'react'
import Card from './Card';
import DropDown from './DropDown';
import Modal from './Modal';


export default function Cards() {
    const [open,setOpen]=useState(false);
    const [openModal,setOpenModal]=useState(false)
    const [category,setCategory]=useState('')
    const [products,setProducts]=useState([]);
    const [searchWord,setSearchWord]=useState('');

    const handleFetch=async()=>{
        await fetch("http://localhost:3000/products")
        .then(data=>data.json())
        .then(response=>setProducts(response));
    }

    const Filter = products.filter((product)=>{
        return product.name.toLowerCase().includes(searchWord.toLowerCase()) && product.Category.toLowerCase().includes(category.toLowerCase());
    })

    useEffect(()=>{
        handleFetch();
    },[])

console.log(Filter)
  return (
    <><div className="lg:flex justify-between px-8 sm:block py-20">
        <div className="mb-2 lg:w-64 sm:w-full">
            <input type="text"
                id="searchWord"
                value={searchWord}
                onChange={(e)=>setSearchWord(e.target.value)}
                className="bg-gray-50 shadow text-sm rounded-xs outline-none focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5"
                placeholder="Search for products" required />
        </div>
        <div>
            <button onClick={() => setOpen(!open)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-48 justify-between bg-gray-50 hover:bg-gray-100 focus:ring-1 focus:outline-none font-medium rounded-xs text-sm px-4 py-1 h-10 text-center inline-flex items-center " type="button">{category===''?(<>Filter by Region</>):(category)}<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
            {category!==''&&
            <button onClick={(e)=>setCategory('')} type="button" class="text-gray-900  bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="defaultModal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button> }

        </div> 
          {open &&
                <DropDown setCategory={setCategory} setOpen={setOpen}/>
            }
        </div>
        <div className='flex justify-between px-8'>
            <h3 className="text-xl mb-2 text-gray-900 font-bold">Products</h3>
            <button onClick={()=>setOpenModal(true)} data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block mb-2 text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xs text-sm px-5 py-2.5 text-center" type="button">
                Add new product
            </button>
        </div>
        {openModal&& <Modal setOpenModal={setOpenModal} handleFetch={handleFetch}/>}
        <hr/>
        {Filter.length===0?(<p className='p-10 text-center'>No products found!</p>):(
            <div className="lg:grid lg:grid-cols-4 lg:gap-3 px-8 py-2  my-4 sm:block">
                {Filter.map((product)=>{
                    return <Card key={product.id} id={product.id} handleFetch={handleFetch} image={product.image} category={product.Category} price={product.price} description={product.description}/>
                })}
            </div>
        )}

        
        </>
  )
}
