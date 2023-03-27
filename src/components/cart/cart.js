import "./cart.css";
import { FiChevronRight, FiChevronLeft, FiTrash2 } from "react-icons/fi";

const Cart = (props) => {

    const { cartItems, onAdd, onRemove, onDelete } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingPrice = itemsPrice > 200 ? 0 : 20;
    const totalPrice = itemsPrice + shippingPrice;

    return (
        <div>
            <h2>CART</h2>
            <div className="cart-container">
                {cartItems.length === 0 && <p className="cart-is-empty">Cart is empty...</p>}
                <div className="cart-items-container">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img className="cart-item-img" src={`../productsphotos/${item.imgs.img_first}.jpg`} alt={item.name} />
                            <strong className="item-name">{item.name}</strong>
                            <div className="item-qty-section">
                                <FiTrash2 onClick={() => onDelete(item)} className="qty-btn delete" />
                                <FiChevronLeft onClick={() => onRemove(item)} className="qty-btn" />
                                <p>{item.qty}</p>
                                <FiChevronRight onClick={() => onAdd(item)} className="qty-btn" />
                            </div>
                            <p className="item-price">{item.price.toFixed(2)}zł x {item.qty} = <strong>{(item.qty * item.price).toFixed(2)} zł</strong></p>
                        </div>
                    ))}
                </div>
                {cartItems.length > 0 &&
                    <div className="payment-container">
                        <div className="row">
                            <label>Products price</label>
                            <p>{itemsPrice.toFixed(2)} zł</p>
                        </div>
                        <div className="row">
                            <label>Shipping price</label>
                            <p>{shippingPrice.toFixed(2)} zł</p>
                        </div>
                        <div className="row">
                            <label>TOTAL</label>
                            <p>{totalPrice.toFixed(2)} zł</p>
                        </div>
                        <button className="payment-btn">PAYMENT</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart;