import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ProducItem from './pages/ProductItem';
import { CartProvider } from './context/CartContext';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function App() {
    const [items, setItems] = useState([]);
    const db = getFirestore();


    useEffect(()=>{
        const itemsCollection = collection(db, 'items');

        getDocs(itemsCollection).then((info) => {
            if (!info.empty) {
                setItems(info.docs.map(doc => {
                    return {
                        id: doc.id, 
                        ...doc.data()
                    }
                }))
                
            }
        }, [])
    })
    return (
        <CartProvider>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer greeting={<Home items={items}/>} />} />
                <Route path="/category/:categoryName" element={<ItemListContainer greeting={<CategoryPage data={db} />}/>}  />
                <Route path="/item/:productTitle" element={<ItemDetailContainer greeting={<ProducItem data={db}/>} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </CartProvider>
    );
}

export default App;
