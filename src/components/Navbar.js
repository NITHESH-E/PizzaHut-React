import { useNavigate } from 'react-router';
import './navbar.css'

function Navbar(){
    const nav = useNavigate()
    function handleCick(){
        nav('/new')
    }
    return(
        <div className="nav-bar">
            <div className="Logo">
                <h1>PizzaHut</h1>
            </div>
            <div className="nav jusB">
                <h2 className="new" onClick={handleCick}>New</h2>
                <h2 className="menu">Menu</h2>
                <h2 className="order">Order</h2>
                <h2 className="aboutus">AboutUs</h2>
                </div>

        </div>

    );
}

export default Navbar;