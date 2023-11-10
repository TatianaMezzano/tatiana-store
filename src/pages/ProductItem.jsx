import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductItemUseEffect } from "../components/UseEffects";
import { CartContext } from "../context/CartContext";
import Loading from "../components/Loading/Loading";
import Counter from "../components/ItemDetail/Counter";
const ProductItem = ({ data }) => {
  
  const { productTitle } = useParams();
  const { addItem } = useContext(CartContext);

  const [count, setCount] = useState(1);

  const { resultsFound, filteredProduct, loading } = ProductItemUseEffect(data, productTitle);

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
        <div className="no-product contenedor">
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
            <button className="add-to-cart" onClick={handleAddClick}>
              Agregar al carrito
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductItem;
