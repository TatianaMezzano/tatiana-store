import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
const CartNumber = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <div className = "position-absolute rounded-circle px-2"
        style={{top:0, right:0}}>
            <span style={{fontSize: "10px", color: "white"}}>
                {totalQuantity}
            </span>
        </div>
    )
}

export default CartNumber;