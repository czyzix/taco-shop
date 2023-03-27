import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    const {allItemsInCartQty} = props

    return ( 
        <div className="navbar">
            <h1>TACO-CART</h1>
            <div className="links">
                <Link to="/">SHOP</Link>
                <Link to="/cart" className="cart-link">CART{(allItemsInCartQty > 0) && <p>({allItemsInCartQty})</p>}</Link>
                
            </div>
        </div>
     );
}

export default Navbar;