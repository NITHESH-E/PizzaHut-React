import React from 'react'
import './Listing.css'
import { CarIcon } from 'lucide-react'

export function Listing({
  Title,
  price,
  img,
  size,
  cart





  
}

) {
  return (
    <div className='Main m-3 wid  items-center rounded-2 '>
      <div className='wid2 items-center flex justify-center'><img className="wid2" src={img}></img></div>
      <div className='list-T '>
        <div className='list-T pl-4' >
        <h2 className='title'>  Pizza: {Title} </h2>
        <br />
        <p > Price: {price} </p>
        <br />
        <p>Size Available in: {size}</p>
        </div>
        
        <div className='p-3'>
          <button className='border-2 hover:bg-[#FF0000] rounded-full bg-[#000000] transition-all duration-400ms w-full'>Add to cart</button>
        </div>

      </div>
    </div>


  )
}



