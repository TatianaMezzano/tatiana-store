import { Link } from "react-router-dom";
import MenuProducts from "../components/MenuProducts/MenuProducts";



const Home = ({items}) => {
    
    
    return (
        <div className="contenedor">
            <h1>Bienvenid@ a TatiBar!</h1>
            <div className="galeria-container">
                {items.map((item) => (
                    <div key={item.id} className="producto">
                        <Link to={`/item/${item.title}`}>
                            <MenuProducts item={item}/>
                        </Link>
                        
                        
                    </div>
                ))}
            </div>

            
        </div>
    );
}

export default Home;

