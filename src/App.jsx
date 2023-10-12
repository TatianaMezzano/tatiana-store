import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';




import { Route, Routes} from 'react-router-dom';
import ProducItem from './pages/ProductItem';



function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<ItemListContainer greeting={<Home/>}/>} />
                <Route exact path="/category/:categoryName" element={<ItemListContainer greeting={<CategoryPage/>}/>} />
                <Route exact path="/item/:productId" element={<ItemDetailContainer greeting={<ProducItem/>}/>}/>   
                <Route exact path="/"/>
                <Route path="*" element={<h1>Not Found</h1>}/>          
            </Routes>
        </>
    )
  }
  
  export default App;


