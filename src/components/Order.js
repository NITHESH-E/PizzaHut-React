import React from 'react'
import Navbar from './Navbar'
import Pizza_details from '../pages/pizza_details';
import { Listing } from '../pages/Listing'

function Order() {
  const renderListings = Pizza_details.map((pizza) => (
    <Listing

      Title={pizza.Title}
      price={pizza.price}
      img={pizza.img}
      size={pizza.size}
    />
  ));
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div></div>
    </div>
  )
}
export default Order
