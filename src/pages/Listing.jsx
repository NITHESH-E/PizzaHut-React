import React from 'react'
import './Listing.css'

export function Listing({
    Title,
    price,
    img,
    size
}
    
) {
  return (
    <div className='Main m-3 wid  items-center rounded-2 flex'>
    <div className='wid2 items-center flex justify-center'><img className="wid2" src={img}></img></div>
    <div className='list-T'>
    <h2 className='title'>  Pizza: {Title} </h2>
      <br/>
      <p > Price: {price} </p>
      <br/>
      <p>Size Available in: {size}</p>
    </div>
    </div>
    
    
  )
}



