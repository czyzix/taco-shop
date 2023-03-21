import Product from "../product/product.js";
import "./shop.css";
import { useState } from "react";
import Filters from "../filters/filters.js"

const Shop = (props) => {
    const {products} = props;
    const [search, setSearch] = useState('')
    const handleInputChange = (e) => {
        setSearch(e.target.value)
    };

    const [productsType, setProductsType] = useState('');
    const handleProductsTypeChange = (e) => {
        setProductsType(e.target.value)
    };

    const [visibleProducts, setVisibleProducts] = useState(products);
    const [selectedSortByOption, setSelectedSortByOption] = useState('');
    const handleSortByChange = (e) => {
        setSelectedSortByOption(e.target.value);
        sortByProducts(e.target.value);
    }
    const sortByProducts = (sortOption) => {
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
    }

    return (
        <div>
            <h2>SHOP</h2>
            <Filters
                handleInputChange={handleInputChange}
                handleSortByChange={handleSortByChange}
                selectedSortOption={selectedSortByOption}
                handleProductsTypeChange={handleProductsTypeChange}
            >
            </Filters>
            <ul className="products-container">
                {visibleProducts
                    .filter((product) => {
                        return (
                            (product.name.toLowerCase().includes(search.toLowerCase().trim()) && 
                            (!productsType || product.type === productsType))
                        )
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