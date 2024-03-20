import React from 'react'
import Navbar from './Navbar'
import './Aboutus.css'
import Footer from './Footer'

function Aboutus() {
  return (
    <div className='MainA'>
        <div>
            <Navbar/>
        </div>
        <div className='about'>
        <p>Welcome to PizzaBox where passion meets flavor in every slice! We're more 
        than just a pizzeria; we're a family-owned establishment dedicated to crafting the 
        perfect pie and creating memorable dining experiences for our customers.</p>

          <p>But it's not just about the food—it's about the experience. When you walk through
            our doors, you're not just a customer; you're part of the family. Our friendly staff
             is here to greet you with a smile, ready to help you choose the perfect pizza or 
             customize your own creation. Whether you're dining in with friends and family or 
             grabbing a quick slice on the go, we strive to make every visit special.</p>

             <p>At PizzaBox, we believe in giving back to the community that has
               supported us throughout the years. That's why we're proud to sponsor local 
               events, support charitable organizations, and participate in initiatives that 
               make a positive impact on the lives of those around us. Because for us, it's not
                just about serving pizza—it's about making a difference.</p>

                <p>Behind every great pizza is a team of passionate individuals,
                   and at [Pizza Place Name], we're no exception. Our journey is
                    fueled by a love for food and a dedication to excellence, 
                    embodied by each member of our staff. From our talented chefs
                     who craft culinary masterpieces to our diligent kitchen team who
                      ensures every ingredient is just right, we're united by a shared 
                      commitment to delivering the best possible dining experience.</p>
        </div>
        <div>
          <h3 className='branch'>Our Branches</h3>
          </div>
          <div className='branches'>
          <h4> Chennai</h4>
          <h4> Bangalore</h4>
          <h4> Delhi</h4>
          <h4> Agra</h4>
          <h4> Hydrabad</h4>
          <h4> Mumbai</h4>
        </div>
        <div className='footer'>
        <Footer/>
        </div>
    </div>
  )
}

export default Aboutus