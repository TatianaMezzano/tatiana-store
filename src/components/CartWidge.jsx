import CartIcon from "./CartIcon"
import CartItems from "./CartItems"

const CartWidge = () => {
    return (
        <div className="bg-warning rounded-circle p-3 position-relative">
            <CartIcon color= "#4192D5"/>
            <CartItems num={3} />
        </div>
    )
}

export default CartWidge;