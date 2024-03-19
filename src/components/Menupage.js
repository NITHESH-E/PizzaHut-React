import React from 'react'
import Navbar from './Navbar'
import Pizza_details from '../pages/pizza_details';
import {Listing} from '../pages/Listing'
import './MenuPage.css'
function Menupage(){
const renderListings = Pizza_details.map((pizza) => (
  <Listing
    
    title={pizza.Title}
    price={pizza.price}
    img={pizza.img}
    size={pizza.size}
  />
));
  return (
    <div className='M_body'>
        <div>
            <Navbar/>
            <div className='render'>
              {renderListings}
            </div>
        </div>
    </div>
  )
}

export default Menupage