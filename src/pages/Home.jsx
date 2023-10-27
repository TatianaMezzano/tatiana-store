import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import MenuProducts from "../components/MenuProducts/MenuProducts";



const Home = () => {
    const [products, setProducts] = useState([]);
    const { data } = useFetch("/productos.json");

    useEffect(() => {
        if (data) {
            setProducts(data);
            
        }
    }, [data]);

    return (
        <div className="contenedor">
            <h1>Bienvenid@ a TatiBar!</h1>
            <div className="galeria-container">
                {products.map((product) => (
                    <div key={product.id} className="producto">
                        <Link to={`/item/${product.id}`}>
                            <MenuProducts product={product}/>
                        </Link>
                        
                        
                    </div>
                ))}
            </div>

            
        </div>
    );
}

export default Home;

