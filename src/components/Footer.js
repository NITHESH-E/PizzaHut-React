import React from 'react'
import './Footer.css'
import { Facebook, Instagram, Twitter } from 'lucide-react'

function Footer() {
  return (
    
    <div className='Fbody'>
      
        <h3 className="contact">Follow us on </h3>
        <div className="follow">
        <h2 className='insta'><Instagram /></h2>
        
        <h2 className='line'>| </h2>    
        <h2 className='facebook'><Facebook/></h2>
        <h2 className='line'>| </h2>
        <h2 className='twitter'><Twitter/></h2>
        </div>
    </div>
  )
}

export default Footer