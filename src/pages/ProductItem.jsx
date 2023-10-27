import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../useFetch";
import Counter from "../components/ItemDetail/Counter";
import { CartContext } from "../context/CartContext";

const ProductItem = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { data } = useFetch("/productos.json");
  const { addItem } = useContext(CartContext);

  const [count, setCount] = useState(1); // Inicializa el estado local de count en 1

  useEffect(() => {
    if (data.length > 0) {
      const foundProduct = data.find((product) => product.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [productId, data]);

  const handleAddClick = () => {
    
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
    };

    addItem(item, count); 
    console.log(item)
    console.log(count)
  };

  return (
    <>
      {product ? (
        <div className="contenedor">
          <h1>{product.title}</h1>
          <img className="images" src={product.img} alt={product.title} />
          <h3>Descripción: </h3>
          <p>{product.descripcion}</p>
          <b>${product.price}</b>
          <div className="counter-container">

            <Counter count={count} setCount={setCount} />
            
            <button onClick={handleAddClick}>Agregar al carrito</button>
          </div>
          <Link to="/cart">Ir al carrito</Link>
            
          
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default ProductItem;