import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import {CategoryPageUseEffect} from "../components/UseEffects"

const CategoryPage = ({ data }) => {

  const { categoryName } = useParams();

  
  const {filteredProducts, resultsFound, loading} = CategoryPageUseEffect(data, categoryName);

  

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



