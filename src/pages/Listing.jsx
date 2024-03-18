import React from 'react'
import './Listing.css'

export function Listing({
    title,
    price,
    img
}
    
) {
  return (
    <div className='Main'>
    <div><img  className="img_N"src ={img}></img></div>
    <div className='list-T'>
      {title}
      <br/>
      {price}
    </div>
    </div>
    
    
  )
}



