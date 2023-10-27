import CartIcon from "./CartIcon"
import CartNumber from "./CartNumber"
import { Link } from "react-router-dom"

const CartWidge = () => {
    return (
        <Link to="/cart">
            <div className="bg-warning rounded-circle p-3 position-relative">
                <CartIcon color= "#4192D5"/>
                <CartNumber />
            </div>
        </Link>
    )
}

export default CartWidge;