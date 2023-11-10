import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


const CartItem = (props) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cartItem-container-general">
      <button onClick={() => removeItem(props.id)} className="button-delete-cart-item">X</button>
      <div className="cartItem-container">        
        <p className="cart-item">{props.title}</p>
        <p className="cart-item">Precio: ${props.price}</p>
        <p className="cart-item">Cantidad: {props.quantity}</p>          
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
