import Brand from "./Brand"
import MenuButton from './MenuButton';
import CartWidge from '../Cart/CartWidge';
import PastaIcon from "./Iconos/PastaIcon";
import PizzaIcon from "./Iconos/PizzaIcon";
import BurgerIcon from "./Iconos/BurgerIcon";
import SaladIcon from "./Iconos/SaladIcon";
import TacoIcon from "./Iconos/TacoIcon";
import { Link } from "react-router-dom";

const NavBar = () => {
    return  (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Brand/>
                <MenuButton/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/category/Pastas"><PastaIcon/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/Pizzas"><PizzaIcon/></Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/category/Hamburguesas"><BurgerIcon/></Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/category/Ensaladas"><SaladIcon/></Link>
                    </li>     
                    
                    <li className="nav-item">
                        <Link to="/category/Tacos"><TacoIcon/></Link>
                    </li>
                    
                   
                </ul>
                
                </div>
                <CartWidge/>
            </div>
        </nav>
    )
}

export default NavBar