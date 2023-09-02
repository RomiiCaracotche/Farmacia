import { createContext, useEffect, useState } from 'react';
import obtenerUsuario from '../funciones/obtenerUsuario';

const UsuarioContext = createContext();

const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState("");

    useEffect(() => {
        setUsuario(obtenerUsuario().usuario)
    }, [])

    const data = {
        usuario, 
        setUsuario
    }

    return <UsuarioContext.Provider value={data}> {children} </UsuarioContext.Provider>
}

export {UsuarioProvider};
export default UsuarioContext;