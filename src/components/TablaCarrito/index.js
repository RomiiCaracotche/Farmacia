
import ItemCarrito from "../ItemCarrito";


const TablaCarrito = ({carrito}) => {
    console.log("tabla carrito", carrito)
    return (
                <table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Imagen</th> 
                                <th>Producto</th> 
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                                {carrito.map((item, index) => {
                                    return <ItemCarrito mykey={index} item={item}/>
                                    // JSON.parse(item).producto.id
                                })}
                        </tbody>
                </table>
    )
}

export default TablaCarrito;