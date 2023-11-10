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
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Layout from './components/Layout';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const db = getFirestore();

  useEffect(() => {
    const itemsCollection = collection(db, 'items');

    // Simula una demora de 2 segundos antes de cargar los datos
    const delay = 700; // 2 segundos

    setTimeout(() => {
      // Cargar los datos y establecer el estado de carga en falso una vez que se complete
      getDocs(itemsCollection)
        .then((info) => {
          if (!info.empty) {
            setItems(info.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            })));
          }
          setLoading(false); // Marcar como no cargando
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); // Marcar como no cargando en caso de error
        });
    }, delay);
  }, [db]);

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
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Layout>
      </div>
    </CartProvider>
  );
}

export default App;
