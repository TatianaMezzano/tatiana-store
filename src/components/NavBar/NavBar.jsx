import Brand from "./Brand"
import MenuButton from './MenuButton';
import CartWidge from '../Cart/CartWidge';
import PastaIcon from "./Iconos/PastaIcon";
import PizzaIcon from "./Iconos/PizzaIcon";
import BurgerIcon from "./Iconos/BurgerIcon";
import SaladIcon from "./Iconos/SaladIcon";
import TacoIcon from "./Iconos/TacoIcon";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import { ResizeUseEffect } from "../UseEffects";

const NavBar = () => {

    const {isMobile} = ResizeUseEffect() 


    return (
        <div>
          {isMobile ? (
    
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <CartWidge/>

                    <Brand/>
                    <MenuButton/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CategoryItem name="Pastas"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem name="Pizzas"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem name="Hamburguesas"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem name="Ensaladas"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem name="Tacos"/>
                        </li>
                        
                    </ul>
                    </div>
                    
                </div>
            </nav>
          ) : (
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
          )}
        </div>
      );
}

export default NavBar


