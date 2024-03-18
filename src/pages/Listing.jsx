import React from 'react'
import './Listing.css'

export function Listing({
    title,
    price,
    img
}
    
) {
  return (
    <div className='flex flex-row justify-between'><img  className="img_N"src ={img}></img>{title},{price}</div>
    
  )
}



