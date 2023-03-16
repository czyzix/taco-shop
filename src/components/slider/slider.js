import { useState } from "react";
import "./slider.css";

const Slider = (product) => {

    /* const [images, setImages] = useState([
        product.product.img_first,
        product.product.img_second ? product.product.img_second : product.product.img_first,
        product.product.img_third ? product.product.img_third : product.product.img_second,
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImg = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImg = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    return (
        <div className="slider-container">
            <button onClick={prevImg}>prev</button>
            <img 
                className="slider-img"
                src={`../productsphotos/${images[currentIndex]}.jpg`} 
                alt="img"
            />
            <button onClick={nextImg}>next</button>
        </div>
    ); */

    const productImg = product.product.imgs

    console.log(productImg);

    return (
        <div className="container-slider">
            {Object.keys(productImg).map((key) => (
                <img className="slider-img" src={`../productsphotos/${productImg[key]}.jpg`}  alt={key} />
            ))}
        </div>
    )
}
 
export default Slider;