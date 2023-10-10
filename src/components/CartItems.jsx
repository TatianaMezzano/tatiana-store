const CartItems = ({num}) => {
    return (
        <div className = "position-absolute bg-primary rounded-circle px-2"
        style={{top:0, right:0}}>
            <span style={{fontSize: "10px", color: "white"}}>
                {num}
            </span>
        </div>
    )
}

export default CartItems;