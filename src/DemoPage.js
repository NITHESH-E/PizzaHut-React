import Image from './header_img.png';
import Dimage1 from './deals_img1.jpg';
import Dimage2 from './deals_img2.jpg';
import Dimage3 from './deals_Img3.jpg';
import './demoPage.css';

function DemoPage() {
  return (
    <div className="myApp">
      <div >
        <h1 className="header">PizzaHut</h1>
        <div className="header_op">
            <h2 className="home">Home</h2>
            <h2 className="menu">Menu</h2>
            <h2 className="order">Order</h2>
            <h2 className="aboutus">AboutUs</h2>
        </div>
        <hr className="hr"></hr>
        </div>
         <div className="image_div">
          <img className="image1"src={Image} alt="img3"/>
        </div>
        <div className="deals_text">
        <h1>Our most popular deals</h1>
        </div>
        <div>
          <img  className="deals_img1" src={Dimage1} alt="image1"/>
          <img className="deals_img2" src={Dimage2} alt="image2"/>
          <img className="deals_Img3" src={Dimage3} alt="image2"/>
          
          <br/>
          <h2 className="pizza_Pa">Paneer Tikka</h2>
          <h2 className="pizza_Ct">Chicken Tikka</h2>
          <h2 className="pizza_Tc">Tandoori Chicken Pizza</h2>
          <hr size="5" color="white" className="hr"/>
          <div>
          <h2 className="footer">Follow Us On:</h2>
          <h3 className="insta">Instagram: <span className="id">pizza_Hut_offical</span></h3>
          <h3 className="insta">Facebook: <span className="id">pizza_Hut_offical</span></h3>
          <h3 className="insta">Twitter: <span className="id">pizza_Hut_offical</span></h3>
          </div>
        </div>
    </div>
  );
}

export default DemoPage;
