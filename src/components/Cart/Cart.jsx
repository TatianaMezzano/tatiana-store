import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let newTotalQuantity = 0;
        let newTotal = 0;

        cart.forEach((item) => {
            newTotalQuantity += item.quantity;
            newTotal += item.price * item.quantity;
        });

        setTotalQuantity(newTotalQuantity);
        setTotal(newTotal);
    }, [cart]);

    if (totalQuantity === 0) {
        return (
            <div className="noProduct-container">
                <h3>No hay productos en el carrito</h3>
                <Link to="/">Volver al menu</Link>
            </div>
        );
    }

    return (
        <>
            <div className="cartProduct-container">
                {cart.map((p) => (
                    <CartItem key={p.id} {...p} />
                ))}

                
            </div>
            
            <p className="total-price">Total: ${total}</p>

            <div className="buttons-cart">
                
                <button onClick={() => clearCart()}>Limpiar carrito</button>
                <Link to="/pagar">Pagar</Link>
            </div>
        </>
    );
}

export default Cart;

