
const CartItem = (props) => {
  return (
    <>
      <div className="cartItem-container">
        <button className="button-delete-cart-item">X</button>
        <p className="cart-item">{props.title}</p>
        <p className="cart-item">Precio: ${props.price}</p>
        <p className="cart-item">Cantidad: {props.quantity}</p>
        
        
      </div>
      <hr />
    </>
  );
};

export default CartItem;
