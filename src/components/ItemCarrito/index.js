import { useContext } from "react";
import modificarUsuario from "../../funciones/modificarUsuario";
import CarritoContext from "../../contexts/CarritoContext";
import UsuarioContext from "../../contexts/UsuarioContext";

const ItemCarrito = ({item, mykey}) => {
    const carritoContext = useContext(CarritoContext);
    const usuarioContext = useContext(UsuarioContext);
    const itemParse = JSON.parse(item);

    const modifCant = (op) => {
        const id = itemParse.producto.id;

        const carritoMod = carritoContext.carrito.map((it) => {
            const prod = JSON.parse(it);
            if(prod.producto.id === id) {
                if(op === "inc") {
                    prod.cantidad++;
                }
                else {
                    if(prod.cantidad > 1) {
                        prod.cantidad--;
                    }
                }
            }
            return JSON.stringify(prod);
        });

        usuarioContext.carrito = carritoMod;
        modificarUsuario(usuarioContext);
        carritoContext.setCarrito(carritoMod)
    }

    const borrarItem = (id) => {
        const carritoActualizado = carritoContext.carrito.filter((item) => {
                const prod = JSON.parse(item);
                if(prod.producto.id !== id) {
                    return JSON.stringify(prod);
                }
        });

        carritoContext.setCarrito(carritoActualizado);
        modificarUsuario(usuarioContext);
    }

    return (
            <tr key={mykey}>
                <td><img src={itemParse.producto.foto} alt="foto producto"/></td>
                <td>{itemParse.producto.nombreComercial}</td>
                <td>
                    <button onClick={() => modifCant("inc")}>+</button>
                    {itemParse.cantidad}
                    <button onClick={() => modifCant("dec")}>-</button>
                </td> 
                <td>${itemParse.cantidad * itemParse.producto.precio}</td>
                <td><button onClick={() => borrarItem(itemParse.producto.id)}>X</button></td>
            </tr>   
    )
}

export default ItemCarrito;