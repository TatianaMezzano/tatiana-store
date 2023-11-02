import Brand from "./Brand"
import CategoryItem from './CategoryItem';
import MenuButton from './MenuButton';
import CartWidge from '../Cart/CartWidge';

const NavBar = () => {
    return  (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
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
                        <CategoryItem name="Empanadas"/>
                    </li>
                    <li className="nav-item">
                        <CategoryItem name="Hamburguesas"/>
                    </li>
                    <li className="nav-item">
                        <CategoryItem name="Milanesas"/>
                    </li>
                    <li className="nav-item">
                        <CategoryItem name="Ensaladas"/>
                    </li>                   
                    
                    
                   
                </ul>
                
                </div>
                <CartWidge/>
            </div>
        </nav>
    )
}

export default NavBar