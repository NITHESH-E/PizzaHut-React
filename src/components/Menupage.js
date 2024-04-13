import React from 'react'
import Navbar from './Navbar'
import Pizza_details from '../pages/pizza_details';
import { Listing } from '../pages/Listing'
import './MenuPage.css'
import Footer from './Footer'
import Searchbox from './Searchbox';
function Menupage() {
  const renderListings = Pizza_details.map((pizza) => (
    <Listing

      Title={pizza.Title}
      price={pizza.price}
      img={pizza.img}
      size={pizza.size}
    />
  ));
  return (
    <div className='M_body'>
      <div>
        <Navbar />
        <Searchbox/>
      </div>

      <div className='menus '>
        <h2 className='text-3xl'>Our Menu</h2>
        <p className='text'>Explore our incredible menu of tasty pizza and drink options,</p>
      </div>

      <div className='render'>
        {renderListings}
      </div>
      <div>
        <Footer/>
      </div>

      

    </div>
  )
}

export default Menupage