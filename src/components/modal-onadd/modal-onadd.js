import "./modal-onadd.css";
import { FaCheckSquare } from "react-icons/fa";

const ModalOnAdd = ({open, onClose, product, setIsModalOnAddOpen}) => {
    
    if (!open) return null

    return (
        <>
            <div className="overlay-modal" onClick={onClose}></div>
            <div className="modal onadd">
                <div className="modal-header">
                    <strong>{product.name}</strong>
                    <button className="modal-close-btn" onClick={onClose}>X</button>
                </div>
                <strong className="info-label"><FaCheckSquare className="icon"/>Added to cart.</strong>
                <div className="modal-onadd-body">
                    <img className="modal-onadd-product-img" src={`../productsphotos/${product.imgs.img_first}.jpg`} alt={product.name} />
                    <div className="texts">
                        <p>{product.name}</p>
                        <p>{product.price.toFixed(2)} zł</p>
                    </div>
                </div>
                <div className="buttons">
                    {/* try do add second button "GO TO CART" */}
                    <button className="modal-btn" onClick={() => setIsModalOnAddOpen(false)}>CONTINUE SHOPING</button>
                </div>
            </div>
        </>
    )
}
 
export default ModalOnAdd;