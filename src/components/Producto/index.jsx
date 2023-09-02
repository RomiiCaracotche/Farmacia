import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import logueado from "../../funciones/logueado";
import obtenerUsuario from "../../funciones/obtenerUsuario";
import modificarUsuario from "../../funciones/modificarUsuario";
import esAdmin from "../../funciones/esAdmin";
import { useContext } from "react";
import CarritoContext from "../../contexts/CarritoContext";
import { Link, useNavigate } from "react-router-dom";

const Producto = ({producto}) => {
    const {id, nombreComercial, nombreGenerico, concentracionDroga, laboratorio, formula, lote, vencimiento, troquel, presentacion, conservacion, foto, precio} = producto;
    const carrito = useContext(CarritoContext);
    const navigate = useNavigate();
    
    const comprar = () => {

        if(logueado()) {
            let usuario = obtenerUsuario();

            const itemCompra = {
                cantidad: 1,
                producto: producto
            }

            //si el carrito tiene algo
            if(usuario.carrito.length > 0) {
                let existe = false;
                const nuevoCarrito = usuario.carrito.map((item) => {
                    const itemJson = JSON.parse(item);
                    //si ya existe el producto en el carrito lo incremento
                    if(itemJson.producto.id == id) {
                        itemJson.cantidad++; 
                        existe = true; 
                    }
                    return JSON.stringify(itemJson);
                })

                //si no existe el producto en el carrito lo agrego
                if(!existe) {
                   usuario.carrito.push(JSON.stringify(itemCompra));
                }
                else {
                    usuario.carrito = nuevoCarrito;
                }
            }
            else {
                //el carrito esta vacio
                usuario.carrito.push(JSON.stringify(itemCompra));
            }
            modificarUsuario(usuario);
            carrito.setCarrito(usuario.carrito);
        }
        else {
            console.log("debe ingresar para comprar")
            navigate("/ingresar");
        }
    }

    return (
        <div className="">
            <h2 className="">{nombreGenerico}</h2>
            <h3 className="">{nombreComercial} {concentracionDroga}</h3>
            <p className="">Laboratorio {laboratorio}</p>
            <img src={foto} className=""/>
            <h3 className="">${precio}</h3>
            <Link to="/verProducto" state={producto} className="">Ver <FontAwesomeIcon icon={faEye} style={{color: "#000000",}}/></Link>
            {(!esAdmin()) ?
                <button className="" onClick={comprar}>Agregar <FontAwesomeIcon icon={faCartShopping}/></button> 
                :
                <>
                    <button className="">Editar<FontAwesomeIcon icon={faPenToSquare} style={{color: "#000000",}} /></button>
                    <button className="">Eliminar<FontAwesomeIcon icon={faCartShopping}/></button>
                </>
            }
        </div>
    )
}

export default Producto;
