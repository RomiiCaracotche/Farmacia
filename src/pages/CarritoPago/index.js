import { Link } from "react-router-dom";
import TablaCarrito from "../../components/TablaCarrito";
import { useContext } from "react";
import CarritoContext from "../../contexts/CarritoContext";

const CarritoPago = () => {
    const carritoContext = useContext(CarritoContext);
    
    const calcularTotal = () => {
        let suma = 0;
        carritoContext.carrito.forEach(element => {
            suma += JSON.parse(element).cantidad * JSON.parse(element).producto.precio
        });
        return suma;
    }

    return (
        <div>
            <h2>Mi Carrito</h2>
            <div>  
                <TablaCarrito carrito={carritoContext.carrito}/>
                <div>
                    <h2>Total a Pagar:</h2>
                    <h2>$ {calcularTotal()}</h2> 
                    <Link to="/finalizarCompra">Finalizar Compra</Link>
                </div>
            </div>
        </div>
    )
}

export default CarritoPago;