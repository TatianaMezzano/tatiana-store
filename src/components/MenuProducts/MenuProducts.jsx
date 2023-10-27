const MenuProducts = ({product}) => {
    return(
        <div className="card-contenedor">
            <img className="img-galeria" src={product.img} alt={product.title} />
            <div className="info-product-galeria">
                <b>{product.title}</b>
                <b>${product.price}</b>
            </div>
        </div>
    )
} 
export default MenuProducts