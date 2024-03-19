import React from 'react'
import './Listing.css'

export function Listing({
    title,
    price,
    img,
    size
}
    
) {
  return (
    <div className='Main'>
    <div><img  className="img_N"src ={img}></img></div>
    <div className='list-T'>
    <h2>  Pizza: {title} </h2>
      <br/>
      <p> Price: {price} </p>
      <br/>
      <p>Size Available in: {size}</p>
    </div>
    </div>
    
    
  )
}



