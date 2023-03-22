import "./cart.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Cart = (props) => {

    const { cartItems, onAdd, onRemove } = props;

    return (
        <div>
            <h2>CART</h2>
            <div>
                {cartItems.length === 0 && <p className="cart-is-empty">Cart is empty...</p>}
                <div className="cart-items-container">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img className="cart-item-img" src={`../productsphotos/${item.imgs.img_first}.jpg`} alt={item.name} />
                            <p className="item-name">{item.name}</p>
                            <div className="item-qty-section">
                                <FiChevronLeft onClick={() => onRemove(item)} className="qty-btn" />
                                <p>{item.qty}</p>
                                <FiChevronRight onClick={() => onAdd(item)} className="qty-btn" />
                            </div>
                            <p className="item-price">{item.price.toFixed(2)}zł x {item.qty} = {(item.qty * item.price).toFixed(2)} zł</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Cart;