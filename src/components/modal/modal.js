import "./modal.css";
import ReactDOM from "react-dom";
import Slider from "../slider/slider";

const Modal = ({open, onClose, product, onAdd, setIsModalOpen}) => {
    if (!open) return null
    
    const productPrice = product.price;

    const handleOnAddFromModal = (product) => {
        onAdd(product)
        setIsModalOpen(false);
    }
    
    return ReactDOM.createPortal(
        <>
        <div className="overlay-modal" onClick={onClose}></div>
        <div className="modal">
        <div className="modal-header">
                <strong>{product.name}</strong>
                <button className="modal-close-btn" onClick={onClose}>X</button>
            </div>
            <div className="modal-body">
                <div className="left-side">
                    <Slider
                        product={product}
                    ></Slider>
                </div>
                <div className="right-side">
                    <table>
                        <tbody>
                        <tr>
                            <td className="td-title">Title</td>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <td className="td-title">Price</td>
                            <td style={{color: 'blue', fontWeight: 600}}>{productPrice.toFixed(2)} zł</td>
                        </tr>
                        </tbody>
                    </table>
                    <button className="modal-add-to-cart-btn" onClick={() => handleOnAddFromModal(product)}>ADD TO CART</button>
                    <table>
                        <tbody>
                            <tr>
                                <td className="td-title">Descr</td>
                                <td>
                                    <p className="cutoff-text">{product.descr}</p>
                                    <input type="checkbox" className="expand-btn"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>,
        document.getElementById("portal")
    );
}

export default Modal;