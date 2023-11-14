import './App.css';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ProductItem from './pages/ProductItem'; // Asegúrate de importar ProductItem correctamente
import { CartProvider } from './context/CartContext';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Loading from './components/Loading/Loading'; // Importa el componente Loading
import { getFirestore } from 'firebase/firestore';
import Layout from './components/Layout';
import { AppUseEffect } from './components/UseEffects';
import NotFound from './components/NotFound';
import EnlacesIconos from './components/EnlacesIconos';
import TerminarCompra from './components/TerminarCompra';

function App() {

  const db = getFirestore();

 const {items, loading} = AppUseEffect (db)

  return (
    <CartProvider>
      <div className='app-container'>
        <Layout>
          <Routes>
            <Route path="/" element={loading ? ( // Mostrar el componente Loading mientras se carga
              <Loading />
            ) : (
              <ItemListContainer greeting={<Home items={items} />} />
            )} />
            <Route path="/category/:categoryName" element={<ItemListContainer greeting={<CategoryPage data={db} />} />}  />
            <Route path="/item/:productTitle" element={<ItemDetailContainer greeting={<ProductItem data={db} />} />} /> {/* Cambié ProducItem a ProductItem */}
            <Route path="/cart" element={<Cart />} >
              <Route path="terminarCompra" element={<TerminarCompra />}/>             
            </Route>          
            
            <Route path="*" element={<NotFound/>} />
            <Route path="iconos" element={<EnlacesIconos/>}/>
          </Routes>
        </Layout>
      </div>
    </CartProvider>
  );
}

export default App;
