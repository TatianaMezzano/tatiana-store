import CartIcon from "./CartIcon"
import CartNumber from "./CartNumber"
import { Link } from "react-router-dom"

const CartWidge = () => {
    return (
        <Link to="/cart">
            <div className="cart-icon rounded-circle p-3 position-relative">
                <CartIcon className="just-cart-icon" color= "#FFFFFF"/>
                <CartNumber />
            </div>
        </Link>
    )
}

export default CartWidge;