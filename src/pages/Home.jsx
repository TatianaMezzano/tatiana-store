import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";



const Home = () => {
    const [products, setProducts] = useState([]);
    const { data } = useFetch("/productos.json");

    useEffect(() => {
        if (data) {
            setProducts(data);
            console.log(products)
        }
    }, [data]);

    return (
        <div className="contenedor">
            <h1>Bienvenid@ a TatiBar!</h1>
            <div className="galeria-container">
                {products.map((product) => (
                    <div key={product.id} className="producto">
                        <Link to={`/item/${product.id}`}>
                            <div className="card-contenedor">
                                <img className="img-galeria" src={product.img} alt={product.title} />
                                <b>{product.price}</b>
                            </div>
                        </Link>
                        
                        
                    </div>
                ))}
            </div>

            
        </div>
    );
}

export default Home;

