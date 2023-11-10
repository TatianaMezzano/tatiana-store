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

        //cantidad de cada producto y precio total
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
                <button className="button-back-menu"><Link to="/">Volver al menú</Link></button>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <div className="cartProduct-container">
                {/*articulos del carrito*/}
                {cart.map((p) => (
                    <CartItem key={p.id} {...p} />                    
                ))}                                           
            </div>
                       
            <p className="total-price">Total: ${total}</p>

            <div className="buttons-cart">                
                <button className="button-clear-cart" onClick={() => clearCart()}>Limpiar carrito</button>
                <button className="button-pay"><Link to="/pagar">Pagar: ${total}</Link></button>
            </div>
        </div>
    );
}

export default Cart;

