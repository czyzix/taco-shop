import "./product.css";
import { useState } from "react";
import ModalDetails from "../modal-details/modal-details";
import ModalOnAdd from "../modal-onadd/modal-onadd"

const Product = (props) => {

    const { product, onAdd } = props;

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const productPrice = product.price;
    const firstImg = product.imgs.img_first;
    const secondImg = product.imgs.img_second;
    const imgSrc = isHovered && secondImg ? secondImg : firstImg;

    const buttonStyle = {
        top: isHovered ? '0px' : '-50px',
        transform: isHovered ? 'translate(0%, -135%)' : 'none',
        transition: 'all 0.25s ease-in-out',
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    if (isModalOpen) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
    }

    const [isModalOnAddOpen, setIsModalOnAddOpen] = useState(false);

    if (isModalOnAddOpen) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
    }

    const onAddEvents = (product) => {
        onAdd(product);
        setIsModalOnAddOpen(true);
    }

    return (
        <div className="container">
            <div className="card">
                <div className="img-button-container">
                    <img
                        className="product-img"
                        src={process.env.PUBLIC_URL + `/productsphotos/${imgSrc}.jpg`}
                        alt={product.name}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={() => setIsModalOpen(true)}
                    />
                    <button
                        className="add-to-cart-btn"
                        style={buttonStyle}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={() => onAddEvents(product)}
                    >ADD TO CART</button>
                </div>
                <p className="product-name">{product.name}</p>
                <strong>{productPrice.toFixed(2)} zł</strong>
                <ModalDetails 
                    open={isModalOpen} 
                    onClose={() => setIsModalOpen(false)}
                    product={product}
                    onAddEvents={onAddEvents}
                    setIsModalOpen={setIsModalOpen}
                ></ModalDetails>
                <ModalOnAdd
                    open={isModalOnAddOpen}
                    onClose={() => setIsModalOnAddOpen(false)}
                    product={product}
                    setIsModalOnAddOpen={setIsModalOnAddOpen}
                ></ModalOnAdd>
            </div>
        </div>
    );
}

export default Product;