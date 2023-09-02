import logueado from "./logueado";
import obtenerUsuario from "./obtenerUsuario";

const esAdmin = () => {
    if(logueado()) {
        const admin = obtenerUsuario().usuario.admin;
        return admin;
    }
}

export default esAdmin;