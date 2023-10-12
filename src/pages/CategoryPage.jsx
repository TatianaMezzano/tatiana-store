import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const getProductsList = () => {
  return fetch('/productos.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el archivo');
      }
      return response.json();
    });
}

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [productsList, setProductsList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        getProductsList()
            .then((data) => {
                if (data && data.results) {
                    setProductsList(data.results);
                } else {
                    throw new Error("error");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        // Filtra los productos basados en la categoría actual
        const filtered = productsList.filter(product => product.category === categoryName);
        setFilteredProducts(filtered);
    }, [categoryName, productsList]);

    return (
        <div className="contenedor">
            <h1>{categoryName}</h1>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <Link to={`/item/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;
