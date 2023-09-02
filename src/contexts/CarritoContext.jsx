import { createContext, useEffect, useState } from 'react';
import obtenerUsuario from '../funciones/obtenerUsuario';

const CarritoContext = createContext();

const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState("");

    useEffect(() => {
        console.log("carritoProvider" ,obtenerUsuario().carrito)
        setCarrito(obtenerUsuario().carrito)
    }, [])

    return <CarritoContext.Provider value={ {carrito, setCarrito} }> {children} </CarritoContext.Provider>
}

export {CarritoProvider};
export default CarritoContext;