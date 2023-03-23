import "./cart.css";
import { FiChevronRight, FiChevronLeft, FiTrash2 } from "react-icons/fi";

const Cart = (props) => {

    const { cartItems, onAdd, onRemove, onDelete, onChangeQty } = props;

    return (
        <div>
            <h2>CART</h2>
            <div>
                {cartItems.length === 0 && <p className="cart-is-empty">Cart is empty...</p>}
                <div className="cart-items-container">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img className="cart-item-img" src={`../productsphotos/${item.imgs.img_first}.jpg`} alt={item.name} />
                            <strong className="item-name">{item.name}</strong>
                            <div className="item-qty-section">
                                <FiTrash2 onClick={() => onDelete(item)} className="qty-btn delete" />
                                <FiChevronLeft onClick={() => onRemove(item)} className="qty-btn" />
                                <input type="number" value={item.qty} className="input-qty" onChange={() => onChangeQty(item)} />
                                {/* <p>{item.qty}</p> */}
                                <FiChevronRight onClick={() => onAdd(item)} className="qty-btn" />
                            </div>
                            <p className="item-price">{item.price.toFixed(2)}zł x {item.qty} = <strong>{(item.qty * item.price).toFixed(2)} zł</strong></p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Cart;