import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Counter from "../components/Counter";

const ProducItem = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { data } = useFetch("/productos.json");

  useEffect(() => {
    if (data.length > 0) {
      const foundProduct = data.find((product) => product.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [productId, data]);

  return (
    <>
      {product ? (
        <div className="contenedor">
          <h1>{product.title}</h1>
          <img className="images" src={product.img} alt={product.title} />
          <h3>Descripción: </h3>
          <p>{product.descripcion}</p>
          <b>{product.price}</b>
          <div className="counter-container">
            <b>Cantidad: </b>
            <Counter />
          </div>
          
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default ProducItem;
