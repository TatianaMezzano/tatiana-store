import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../components/ItemDetail/Counter";
import { CartContext } from "../context/CartContext";
import { where, query, getDocs, collection } from "firebase/firestore";
import Loading from "../components/Loading/Loading";

const ProductItem = ({ data }) => {
  const { productTitle } = useParams();
  const { addItem } = useContext(CartContext);

  const [count, setCount] = useState(1);
  const [resultsFound, setResultsFound] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (productTitle) {
      // Simula una demora de 2 segundos antes de cargar los datos
      const delay = 700; // 2 segundos

      setTimeout(() => {
        const q = query(collection(data, "items"), where("title", "==", productTitle));
        getDocs(q)
          .then((info) => {
            if (info.size === 0) {
              // No se encontraron resultados
              setResultsFound(true);
              setFilteredProduct(null);
            } else {
              // Se encontró un producto
              setFilteredProduct({
                id: info.docs[0].id,
                ...info.docs[0].data(),
              });
            }

            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching product:", error);
            setResultsFound(true);
            setFilteredProduct(null);
            setLoading(false);
          });
      }, delay);
    }
  }, [productTitle]);

  const handleAddClick = () => {
    if (filteredProduct) {
      const item = {
        id: filteredProduct.id,
        title: filteredProduct.title,
        price: filteredProduct.price,
      };
      addItem(item, count);
    }
  };

  return (
    <>
      {loading ? ( // Mostrar el componente Loading mientras se carga
        <Loading />
      ) : resultsFound ? (
        <div className="contenedor">
          <p>No se encontraron resultados para {productTitle}.</p>
        </div>
      ) : filteredProduct ? (
        <div className="contenedor">
          <h1 className="product-title">{filteredProduct.title}</h1>
          <img className="images" src={filteredProduct.imageURL} alt={filteredProduct.title} />
          <p className="description">{filteredProduct.description}</p>
          <b className="price">${filteredProduct.price}</b>
          <div className="counter-container">
            <Counter count={count} setCount={setCount} />
            <button className="add-to-cart" onClick={handleAddClick}>Agregar al carrito</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductItem;
