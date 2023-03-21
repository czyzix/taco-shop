import "./filters.css";

const Filters = (props) => {

    const { handleInputChange } = props;

    return (
        <div className="filters-container">
            <input 
                className="search-bar" 
                type="text" onChange={handleInputChange}
                placeholder="Search for a product..."
            />
            <select className="sort-by">
                <option value="">Sort by:</option>
                <option value="a-z">Name A-Z</option>
                <option value="z-a">Name Z-A</option>
                <option value="cheap-exp">Lowest price</option>
                <option value="exp-cheap">Highest price</option>
            </select>
            <select className="product-type">
                <option value="">Product type:</option>
                <option value="cd">CD</option>
                <option value="vinyl">Vinyl</option>
                <option value="clothes">Clothes</option>
            </select>
        </div>
    );
}
 
export default Filters;