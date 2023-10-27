import useFetch from "../useFetch.js" 
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CategoryPage = () => {

    const { categoryName } = useParams();    
    const [filteredProducts, setFilteredProducts] = useState([]);    
    const { data } = useFetch("/productos.json")

    useEffect(() => {
        if (data.length > 0) {
            const filtered = data.filter(product => product.category === categoryName)
            setFilteredProducts(filtered);
        }
    }, [categoryName, data]);

    return (
        <div className="contenedor">
            <h1>{categoryName}</h1>
            <ul className="category-list">
                {filteredProducts.map((product) => (
                    <li className="list-item" key={product.id}>
                        <Link to={`/item/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );


}


export default CategoryPage;