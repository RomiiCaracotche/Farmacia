import "./style.css";
import Logo from "../Logo";
import Buscador from "../Buscador";
import { NavLink, useLocation} from "react-router-dom";
import logueado from "../../funciones/logueado";
import CarritoDropdown from "../CarritoDropdown";
import obtenerUsuario from "../../funciones/obtenerUsuario";
import BotonIngresar from "../BotonIngresar";
import BotonSalir from "../BotonSalir";


const Header = () => {
    const location = useLocation();

    return (
            <header className="flex justify-between items-center">
                <NavLink to="/" className="item-header"><Logo/></NavLink>
                <Buscador placeholder="¿Qué desea buscar?"/> 
                
                <div className="box-user">
                    { ((location.pathname !== "/ingresar") && (!logueado())) && 
                        <BotonIngresar/>
                    }   
                    {
                        logueado() &&
                        <div className="flex">
                            <CarritoDropdown carrito={obtenerUsuario().carrito}/>
                            <BotonSalir/>
                        </div>
                    }
                </div>
            </header>
    )
}

export default Header;
