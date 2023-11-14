import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, Outlet } from "react-router-dom";
import CartItem from "./CartItem";
import {CartUseEffect} from "../UseEffects";

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);

    const {totalQuantity, total} = CartUseEffect(cart);

        return totalQuantity === 0 ? (
       
                <div className="noProduct-container">
                    <h3>No hay productos en el carrito</h3>
                    <button className="button-back-menu"><Link to="/">Volver al menú</Link></button>
                </div>
            
        ) :
        (
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
                    <button className="button-pay"><Link to="/cart/terminarCompra">Terminar compra</Link></button>
                    <Outlet/>
                </div>
            </div>
        )
        

}

export default Cart;

