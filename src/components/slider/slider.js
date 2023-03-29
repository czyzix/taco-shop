import { useState } from "react";
import "./slider.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Slider = (product) => {

    const productImgs = product.product.imgs
    const productImgsLenght = Object.keys(productImgs).length;
    const [currentImg, setCurrentImg] = useState(0);
    const [direction, setDirection] = useState("");

    const prevSlide = () => {
        setCurrentImg(currentImg === 0 ? productImgsLenght - 1 : currentImg - 1)
        setDirection("left");
    }

    const nextSlide = () => {
        setCurrentImg(currentImg === productImgsLenght - 1 ? 0 : currentImg + 1)
        setDirection("right");
    }

    return (
        <div className="container-slider">
            {currentImg > 0 && <FiChevronLeft onClick={prevSlide} className="prev-btn"/>}
            {Object.keys(productImgs).map((photo, index) => (
                <div 
                    className={index === currentImg ? `slide-active ${direction}` : "slide"}  
                    key={index}
                >
                    {index === currentImg && (<img className="slider-img" src={process.env.PUBLIC_URL + `/productsphotos/${productImgs[photo]}.jpg`}  alt={photo} />)} 
                </div>
            ))}
            {currentImg < productImgsLenght - 1 && <FiChevronRight onClick={nextSlide} className="next-btn"/>}
        </div>
    )
}
 
export default Slider;

