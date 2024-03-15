import React from 'react';
import Navbar from '../components/Navbar';
import SlidePage from './SlidePage';
import Pizza_details from './pizza_details'; // Assuming this contains an array of pizza details
import Listing from './Listing';

const renderListings = Pizza_details.map((pizza) => (
  <Listing
    Title={pizza.Title}
    price={pizza.price}
    img={pizza.img}
  />
));
export const NewPage = () => {
  

  return (
    <div className="maindiv">
      <Navbar />
      <div className="header">
        <SlidePage />
      </div>
      <div className="header_text">
        <h1>Newly launched Pizza's</h1>
        <div className='flex justify-between flex-row'>
          {renderListings}
          
        </div>
      </div>
    </div>
  );
};
