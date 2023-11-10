import { createContext, useState, useEffect } from "react";
import CartToastify from "./Toastify";



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
    {!isInCart(item.id) ?
      (setCart((prev) => [...prev, { ...item, quantity }]))
    : 
    CartToastify()     
      
    }
  }
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

