import React from 'react';
import Navbar from '../components/Navbar';
import './Home_page.css';
import Header_img from './header_img.png';
import deals_img1 from './deals_img1.jpg';
import deals_img2 from './deals_img2.jpg';
import deals_img3 from './deals_Img3.jpg';
import Footer from '../components/Footer';
import { Carousel } from 'react-bootstrap';
import SlidePage from './SlidePage';



function Home_page() {
  return (
    <div className="body">
        <div><Navbar/></div>
        
        <div className="imgdiv">
            <img className="headerimg" src={Header_img}/>
        </div>
        <div>
          <carousel_page/>
        </div>
        
        <div className="offer"></div>
        <div> <h1 className='deals'>Our most popular deals</h1></div>
        <div className='deals_img'>
          <img  className="dealsimg1"src={deals_img1}/>
          <img className="dealsimg1" src={deals_img2}/>
          <img className="dealsimg1"src={deals_img3}/>
        </div>
        <hr/>
        <div><Footer/></div>
        </div>
  )
}

export default Home_page