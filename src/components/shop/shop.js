import Product from "../product/product.js";
import "./shop.css";
import { useState } from "react";
import Filters from "../filters/filters.js"

const Shop = (props) => {
    const {products} = props;

    const [search, setSearch] = useState('')
    console.log(search);

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    };

    return (
        <div>
            <h2>SHOP</h2>
            <Filters
                handleInputChange={handleInputChange}
            >
            </Filters>
            <div className="products-container">
                {products
                    .filter((product) => {
                        return search.toLowerCase().trim() === ''
                        ? product : product.name.toLowerCase().includes(search);
                    })
                    .map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                        >
                        </Product>
                    ))}
            </div>
        </div>
    );
}

export default Shop;