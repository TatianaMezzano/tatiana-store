import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { where, query, getDocs, collection } from "firebase/firestore";
import Loading from "../components/Loading/Loading";

const CategoryPage = ({ data }) => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [resultsFound, setResultsFound] = useState(false);
  const [prevCategoryName, setPrevCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryName !== prevCategoryName) {
      // Realizar la solicitud a la base de datos solo si la categoría ha cambiado
      setLoading(true); // Activa la animación de carga

      // Simula una demora de 2 segundos antes de cargar los datos
      const delay = 700; // 2 segundos
      setTimeout(() => {
        const q = query(collection(data, 'items'), where("category", "==", categoryName));
        getDocs(q)
          .then((info) => {
            if (info.size === 0) {
              setResultsFound(false);
              setFilteredProducts([]);
            } else {
              setResultsFound(true);
              setFilteredProducts(info.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
              })));
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setResultsFound(false);
          })
          .finally(() => {
            setLoading(false); // Desactiva la animación de carga
          });
        setPrevCategoryName(categoryName);
      }, delay);
    }
  }, [categoryName, data, prevCategoryName]);

  return (
    <div>
      {loading ? ( // Mostrar el componente Loading mientras se carga
        <Loading />
      ) : resultsFound ? ( // Si se encontraron resultados, se muestran
        <div className="contenedor">
          <h1>{categoryName}</h1>
          <ul className="category-list">
            {filteredProducts.map((product) => (
              <li className="list-item" key={product.id}>
                <Link to={`/item/${product.title}`}>
                  <button className="category-button">{product.title}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No se encontraron resultados para {categoryName}.</p>
      )}
    </div>
  );
};

export default CategoryPage;



