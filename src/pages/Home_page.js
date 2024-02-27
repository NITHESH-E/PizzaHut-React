import React from 'react';
import Navbar from '../components/Navbar';
import './Home_page.css';
import Header_img from './header_img.png';

function Home_page() {
  return (
    <div className="body">
        <div><Navbar/></div>
        <><hr/></>
        <div className="imgdiv">
            <img className="headerimg" src={Header_img}/>
        </div>
        <hr className="hrLine" size="5"/>
        <div className="offer"></div>
        </div>
  )
}

export default Home_page