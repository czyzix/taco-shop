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

    /* const [selectedSortOption, setSelectedSortOption] = useState('A-Z');
    const [visibleProducts, setVisibleProducts] = useState(products);

    function handleSortChange(event) {
        setSelectedSortOption(event.target.value);
        sortProducts(event.target.value);
    }

    function sortProducts(sortOption) {
        const sortedProducts = [...products];
        if (sortOption === 'a-z') {
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === 'z-a') {
          sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortOption === 'lowest-price') {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'highest-price') {
          sortedProducts.sort((a, b) => b.price - a.price);
        }
        setVisibleProducts(sortedProducts);
    } */

    return (
        <div>
            <h2>SHOP</h2>
            <Filters
                handleInputChange={handleInputChange}
                /* handleSortChange={handleSortChange}
                selectedSortOption={selectedSortOption} */
            >
            </Filters>
            <ul className="products-container">
                {products
                    .filter((product) => {
                        return search.toLowerCase().trim() === ''
                            ? product : product.name.toLowerCase().includes(search);
                    })
                    .map((product) => (
                        <li>
                            <Product
                                key={product.id}
                                product={product}
                            >
                            </Product>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Shop;