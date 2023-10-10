import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        getProductsList()
            .then((data) => {
                if (data && data.results) {
                    setProductsList(data.results);
                } else {
                    throw new Error("Datos de API incorrectos o falta la propiedad 'results'.");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>Productos</h1>
            <ul>
                {productsList.map((product) => (
                    <li key={product.id}>
                        <Link to={`/item/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;
