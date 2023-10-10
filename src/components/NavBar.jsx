import Brand from "./Brand"
import CategoryItem from './CategoryItem';
import MenuButton from './MenuButton';
import CartWidge from './CartWidge';

const NavBar = () => {
    return  (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Brand/>
                <MenuButton/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <CategoryItem name="Notebooks"/>
                    </li>
                    <li className="nav-item">
                        <CategoryItem name="Celulares"/>
                    </li>
                    
                   
                </ul>
                
                </div>
                <CartWidge/>
            </div>
        </nav>
    )
}

export default NavBar