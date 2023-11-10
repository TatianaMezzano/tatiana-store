import { useState, useEffect } from "react";
import { where, query, getDocs, collection } from "firebase/firestore";

const CartUseEffect = (cart) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotalQuantity = 0;
    let newTotal = 0;

    // Cantidad de cada producto y precio total
    cart.forEach((item) => {
      newTotalQuantity += item.quantity;
      newTotal += item.price * item.quantity;
    });

    setTotalQuantity(newTotalQuantity);
    setTotal(newTotal);
  }, [cart]);

  return { totalQuantity, total };
};


const ResizeUseEffect = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {isMobile}
}

const CategoryPageUseEffect = (data, categoryName) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [resultsFound, setResultsFound] = useState(false);
  const [prevCategoryName, setPrevCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryName !== prevCategoryName) {
      // Realizar la solicitud a la base de datos solo si la categoría ha cambiado
      setLoading(true); // Activa la animación del loading

    // Simula una demora antes de cargar los datos para que se vea la animacion del loading
    const delay = 700; 
      setTimeout(() => {
        const q = query(collection(data, 'items'), where("category", "==", categoryName));
        getDocs(q)
          .then((info) => {
            if (info.size === 0) {
              setResultsFound(false);
              setFilteredProducts([]);
            } else {
              setResultsFound(true);
              setFilteredProducts(info.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
              })));
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setResultsFound(false);
          })
          .finally(() => {
            setLoading(false); // Desactiva la animación del loading
          });
        setPrevCategoryName(categoryName);
      }, delay);
    }
  }, [categoryName, data, prevCategoryName]);

  return { filteredProducts, resultsFound, loading };
};

const ProductItemUseEffect = (data, productTitle) => {
  const [resultsFound, setResultsFound] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (productTitle) {
    // Simula una demora antes de cargar los datos para que se vea la animacion del loading
    const delay = 700; 

      setTimeout(() => {
        const q = query(collection(data, "items"), where("title", "==", productTitle));
        getDocs(q)
          .then((info) => {
            if (info.size === 0) {
              // No se encontraron resultados
              setResultsFound(true);
              setFilteredProduct(null);
            } else {
              // Se encontró un producto
              setFilteredProduct({
                id: info.docs[0].id,
                ...info.docs[0].data(),
              });
            }

            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching product:", error);
            setResultsFound(true);
            setFilteredProduct(null);
            setLoading(false); // Desactiva la animación del loading
          });
      }, delay);
    }
  }, [productTitle, data]);



  return { resultsFound, filteredProduct, loading };
};



const AppUseEffect = (db) => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const itemsCollection = collection(db, 'items');

    // Simula una demora antes de cargar los datos para que se vea la animacion del loading
    const delay = 700; 

    setTimeout(() => {
      // Cargar los datos 
      getDocs(itemsCollection)
        .then((info) => {
          if (!info.empty) {
            setItems(info.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            })));
          }
          setLoading(false); 
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); // Desactiva la animación del loading
        });
    }, delay);
  }, [db]);

  return {items, loading}
}

export { CartUseEffect, CategoryPageUseEffect, ProductItemUseEffect, AppUseEffect, ResizeUseEffect  };
