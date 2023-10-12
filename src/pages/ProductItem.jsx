import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const ProducItem = () => {



    const [product, setProduct] = useState(null);
    const {productId} = useParams();

    const getItemById = (itemId) => {
      return fetch('/productos.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al cargar el archivo');
          }
          return response.json();
        })
        .then((data) => {
          // 'results' debe coincidir con la propiedad en tu archivo JSON
          const item = data.results.find((product) => product.id === itemId);
          if (!item) {
            throw new Error('Elemento no encontrado');
          }
          return item;
        });
    };
    
      
      
      

      useEffect(() => {
        getItemById(productId)
          .then((item) => {
            setProduct(item);
          })
          .catch((error) => {
            console.error(error);
            setProduct(null); 
          });
      }, [productId]);
      

    return (
        <>
          {product ? (
            <div className="contenedor">
              <h1>{product.title}</h1>
              <img className="images" src={product.img} alt={product.title} />
              <h2>Descripción: </h2>
              <p>{product.descripcion}</p>
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </>
      );
      
}

export default ProducItem