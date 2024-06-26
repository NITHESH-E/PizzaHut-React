import { useNavigate } from 'react-router';
import './navbar.css'
import { Search } from 'lucide-react';

function Navbar(){
    
    const nav = useNavigate()

    function handleClick1(){
        nav('/new')
    }
    function handleClick2(){
        nav('/menu')
    }
    function handleClick3(){
        nav('/order')
    }
    function handleClick4(){
        nav('/aboutus')
    }
    function handleClick5(){
        nav('/home')
    }
    return(
        <div className="nav-bar">
            <div className="Logo text-3xl">
                <h1 onClick={handleClick5}>PizzaBox</h1>
            </div>

            <div className="nav jusB text-3xl">
                <h2 className="new" onClick={handleClick1}>New</h2>
                <h2 className="menu" onClick={handleClick2}>Menu</h2>
                <h2 className="order" onClick={handleClick3}>Order</h2>
                <h2 className="aboutus" onClick={handleClick4}>AboutUs</h2>
                </div>
                
        </div>

    );
}

export default Navbar;