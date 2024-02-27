import './navbar.css'

function Navbar(){
    return(
        <div className="nav-bar">
            <div className="Logo">
                <h1>PizzaHut</h1>
            </div>
            <div className="nav">
                <h2 className="home">Home</h2>
                <h2 className="menu">Menu</h2>
                <h2 className="order">Order</h2>
                <h2 className="aboutus">AboutUs</h2>
            </div>

        </div>

    );
}

export default Navbar;