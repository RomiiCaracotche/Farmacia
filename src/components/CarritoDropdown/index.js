import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TablaCarrito from "../TablaCarrito";
import { useEffect, useState } from "react";
import { useContext } from "react";
import CarritoContext from "../../contexts/CarritoContext";

const CarritoDropdown = () => {
    const [isActive, setActive] = useState(false);
    const carritoContext = useContext(CarritoContext);
    const [carrito, setCarrito] = useState("");

    useEffect(() => {
        setCarrito(carritoContext.carrito)
    }, [carritoContext.carrito])

    const verDropdown = () => {
        setActive(!isActive);
    }

    const ocultarDropdown = () => {
        setActive(!isActive);
    }

    return (
        <div className="">
            <button onClick={verDropdown}>
                <span className="mr-1">{carrito.length }</span>
                <FontAwesomeIcon className="" icon={faCartShopping} size="lg"/>
            </button>
            {/* <div onClick={verDropdown} className="cursor-pointer"> 
                <span className="">{carrito.length }</span>
                <FontAwesomeIcon className="" icon={faCartShopping} size="lg"/>
            </div> */}
            <div className={isActive ? "dropdown dropdown-visible" : "dropdown dropdown-invisible"} onMouseLeave={ocultarDropdown}>
                <h2>carrito</h2>
                { (carrito.length > 0) ? 
                    <>
                        {console.log("carritodrop", carrito)}
                        <TablaCarrito carrito={carrito}/>
                        <Link to="/miCarrito">Ir al carrito</Link>
                    </>
                    :
                    <p>Su carrito esta vacio</p>
                } 
            </div> 
        </div>
    );
};


export default CarritoDropdown;