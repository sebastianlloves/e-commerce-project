import './TarjetaProducto.css'

const TarjetaProducto = ({nombre, precio, url_imagen}) => {
    return (
        <div className="tarjeta">
            <h2>{nombre}</h2>
            <h3>Precio: $ {precio}</h3>
            <img src={url_imagen} alt="" className="img_tarjeta"></img>
        </div>
    )
}

export default TarjetaProducto