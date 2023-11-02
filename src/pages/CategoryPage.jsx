import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { where, query, getDocs, collection } from "firebase/firestore";

const CategoryPage = ({data}) => {
    const { categoryName } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [resultsFound, setResultsFound] = useState(false);
    const [prevCategoryName, setPrevCategoryName] = useState("");


    useEffect(() => {
        if (categoryName !== prevCategoryName) {
            // Realizar la solicitud a la base de datos solo si la categoría ha cambiado
            const q = query(collection(data, 'items'), where("category", "==", categoryName));
            getDocs(q).then((info) => {
                if (info.size === 0 && !resultsFound) {
                    console.log("no results");
                    setResultsFound(true);
                } else {
                    setFilteredProducts(info.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    })));
                }
            });
            setPrevCategoryName(categoryName);

        }
        
    }, [categoryName]);
    

    return (
        <div className="contenedor">
            <h1>{categoryName}</h1>
            <ul className="category-list">
                {filteredProducts.map((product) => (
                    <li className="list-item" key={product.id}>
                        <Link to={`/item/${product.title}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );


}


export default CategoryPage;