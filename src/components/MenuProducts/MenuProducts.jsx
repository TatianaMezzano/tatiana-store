const MenuProducts = ({ item }) => {
    if (item ) {
        return (
            <div className="card-contenedor">
                <img className="img-galeria" src={item.imageURL} alt={item.title} />
                <div className="info-product-galeria">
                    <b>{item.title}</b>
                    <b>${item.price}</b>
                </div>
            </div>
        );
    } else {
        return <div>No se ha proporcionado un elemento válido.</div>;
    }
};

export default MenuProducts;
