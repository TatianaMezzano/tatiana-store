import { useState } from "react"

const TerminarCompra = () => {


    const [showAlert, setShowAlert] = useState(false);
    const handleClick = () => {
        setShowAlert(true);
    }

   
return (

    <div className="form-container">
        <div className="form-item">
            <label htmlFor="nombre">Nobre: </label>
            <input id="nombre" type="text" name="nombre"/>
        </div>

        <div className="form-item">
            <label htmlFor="telefono">Telefono: </label>
            <input id="telefono" type="text" name="telefono"/>  
        </div>  

        <div className="form-item">
            <label htmlFor="direccion">Direccion: </label>   
            <input id="direccion" type="email" name="direccion"/>
        </div>

        <button className="button-pagar" onClick={handleClick}>Pagar</button>
        <div>

            {/* Mostrar la alerta si showAlert es true */}
            {showAlert && (
                <div className="alert alert-success" role="alert">
                    <h1>¡Muchas gracias! <br/> Estamos preparando tu pedido</h1>
                </div>
            )}
        </div>
    </div>
    )
}


export default TerminarCompra;


