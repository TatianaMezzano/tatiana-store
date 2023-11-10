import { createContext, useState, useEffect } from "react";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState();
  const [total, setTotal] = useState();

  const addItem = (item, quantity) => {
    //si el producto no esta en el carrito se agrega, sino se despliega el toast
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
        Toastify({
          text: "Este producto ya fue agregado",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", 
          position: "right", 
          stopOnFocus: true, 
          style: {
            background: "#000000",
            borderRadius: "10px"
          },
          onClick: function(){} 
        }).showToast();
      }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const updateTotals = () => {
    const newTotalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const newTotal = cart.reduce((total, item) => total + item.price * item.quantity, 1);

    setTotalQuantity(newTotalQuantity);
    
    setTotal(newTotal);
    
  };

  useEffect(() => {
    updateTotals();
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

