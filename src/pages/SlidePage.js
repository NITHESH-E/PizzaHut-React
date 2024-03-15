import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './sliderimg2.jpg';
import img2 from './sliderimg3.jpg';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function SlidePage() {
    return (
        <div>
            <style>
                {`
                    .carousel {
                        max-width: 1000px; /* Adjust this value as needed */
                        margin-top:20px;
                        margin-left:17% /* Centers the carousel */
                    }
                    .carousel-item img {
                        max-height: 450px; /* Adjust this value to control the height of carousel images */
                        width: auto; /* Ensures images maintain aspect ratio */
                        margin: auto; /* Centers the images horizontally */
                    }
                `}
            </style>
            <Carousel id="carouselExampleInterval" interval={null}>
                <Carousel.Item>
                    <img src={img1} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} className="d-block w-100" alt="..." />
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
}

export default SlidePage;
