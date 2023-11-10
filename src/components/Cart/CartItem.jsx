import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


const CartItem = (props) => {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <div className="cartItem-container">
        <button onClick={() => removeItem(props.id)} className="button-delete-cart-item">X</button>
        <p className="cart-item">{props.title}</p>
        <p className="cart-item">Precio: ${props.price}</p>
        <p className="cart-item">Cantidad: {props.quantity}</p>          
      </div>
      <hr />
    </>
  );
};

export default CartItem;
