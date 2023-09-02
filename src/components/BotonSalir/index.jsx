import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import eliminarUsuario from "../../funciones/eliminarUsuario";
import { useContext } from "react";
import UsuarioContext from "../../contexts/UsuarioContext";
import CarritoContext from "../../contexts/CarritoContext";
import { useNavigate} from "react-router-dom";

const BotonSalir = () => {
    const navigate = useNavigate();
    const usuarioContext = useContext(UsuarioContext);
    const carritoContext = useContext(CarritoContext);

    const cerrarSesion = () => {
        eliminarUsuario();
        usuarioContext.setUsuario("");
        carritoContext.setCarrito("");
        navigate("/");
    }

    return (
        <button onClick={cerrarSesion} className="border border-gray-950 rounded-md p-2 mr-8 hover:border-gray-500 hover:bg-gray-100">
            <span className="mr-1 text-gray-950">Salir</span>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-gray-950"/>
        </button>
        )
}

export default BotonSalir;