import React from 'react'
import Cards from '../Components/Cards'
import Navigation from '../Components/Navigation'
import Footer from '../Components/footer'

export default function Homepage() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
        <Cards/>
        <Footer/>
    </div>
  )
}
