import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const BotonIngresar = () => {
    return (
        <Link to="ingresar" className="border border-gray-950 rounded-md p-2 mr-8 hover:border-gray-500 hover:bg-gray-100">
            <span className="mr-1 text-gray-950">Ingresar</span>
            <FontAwesomeIcon icon={faArrowRightToBracket} className="text-gray-950"/>
        </Link>
    )
}

export default BotonIngresar;