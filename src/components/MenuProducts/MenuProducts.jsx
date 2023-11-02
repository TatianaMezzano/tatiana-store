const MenuProducts = ({ item }) => {
    if (item) {
        const cardStyle = {
            width: '18rem'
        };

        return (
            <div className="card card-home" style={cardStyle}>
                <img src={item.imageURL} className="card-img-top" alt={item.title} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <b className="card-text">${item.price}</b>
                    
                </div>
            </div>
        );
    } else {
        return <div>No se ha proporcionado un elemento válido.</div>;
    }
};

export default MenuProducts;
