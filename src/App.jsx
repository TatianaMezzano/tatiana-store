import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ProducItem from './pages/ProductItem'; // Asumiendo que este es el componente de un producto
import { CartProvider } from './context/CartContext';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart'

function App() {
    return (
        <>
           
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={<Home />} />} />
                        <Route path="/category/:categoryName" element={<ItemListContainer greeting={<CategoryPage />} />} />
                        <Route path="/item/:productId" element={<ItemDetailContainer greeting={<ProducItem />} />} />
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Routes>
                </CartProvider>
            
        </>
    );
}

export default App;
