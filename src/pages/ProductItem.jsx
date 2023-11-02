import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Counter from "../components/ItemDetail/Counter";
import { CartContext } from "../context/CartContext";
import { where, query, getDocs, collection } from "firebase/firestore";

const ProductItem = ({ data }) => {
  const { productTitle } = useParams();
  const { addItem } = useContext(CartContext);

  const [count, setCount] = useState(1);
  const [resultsFound, setResultsFound] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState(null);

  useEffect(() => {
    if(productTitle){
    const q = query(collection(data, 'items'), where("title", "==", productTitle));
    getDocs(q)
      .then((info) => {
        if (info.size === 0) {
          // No se encontraron resultados
          setResultsFound(true);
          setFilteredProduct(null); // Establecer producto como null
        } else {
          // Se encontró un producto
          setFilteredProduct({
            id: info.docs[0].id,
            ...info.docs[0].data(),
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setResultsFound(true);
        setFilteredProduct(null);
      });}
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
      {resultsFound ? (
        // Mostrar mensaje de "no se encontraron resultados" o manejar el error aquí
        <div className="contenedor">
          <p>No se encontraron resultados para {productTitle}.</p>
        </div>
      ) : filteredProduct ? (
        // Mostrar el producto si se encontró
        <div className="contenedor">
          <h1>{filteredProduct.title}</h1>
          <img className="images" src={filteredProduct.imageURL} alt={filteredProduct.title} />
          
          <p className="description">{filteredProduct.description}</p>
          <b className="price">${filteredProduct.price}</b>
          <div className="counter-container">
            <Counter count={count} setCount={setCount} />
            <button className="add-to-cart" onClick={handleAddClick}>Agregar al carrito</button>
          </div>
          
        </div>
      ) : (
        // Mostrar mensaje de "Cargando..." mientras se obtiene el producto
        <div className="contenedor">
          <p>Cargando...</p>
        </div>
      )}
    </>
  );
};

export default ProductItem;
