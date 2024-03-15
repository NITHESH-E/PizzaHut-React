import React from "react"
import './NewPages.css'
import Navbar from "../components/Navbar"
import deals_img1 from './deals_img1.jpg';
import SlidePage from "./SlidePage";

function NewPage() {
    
  return (
    <div className="maindiv">
      <div>
       <Navbar/>
       </div>
      <div className="header">
      <SlidePage/>
      </div>
      <div className="header_text">
        <h1>Newly lanuched Pizza's</h1>
      </div>
      <div>
        
        
      </div>
    </div>
  )
}

export default NewPage