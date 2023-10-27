
const CartItem = (props) => {
  return (
    <div className="cartItem-container">
      <p className="item">{props.title}</p>
      <p className="item">Precio: ${props.price}</p>
      <p className="item">Cantidad: {props.quantity}</p>
      
    </div>
  );
};

export default CartItem;
