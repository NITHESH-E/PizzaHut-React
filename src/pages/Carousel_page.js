import React from 'react'
import { Carousel } from 'react-bootstrap';
import deals_img1 from './deals_img1.jpg';
import deals_img2 from './deals_img2.jpg';
import deals_img3 from './deals_Img3.jpg';
import "bootstrap/dist/css/bootstrap.min.css"

function Carousel_page() {
  return (
    <div> 
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={deals_img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={deals_img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={deals_img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
  )
}

export default Carousel_page