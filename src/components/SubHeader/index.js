import "./style.css";
import { NavLink} from "react-router-dom";

const SubHeader = () => {
    return (
            <nav className="sub-header">
                <ul className="list-subheader">
                    <li><NavLink to="productos" state={ {value: "medicamento"} } className="item-subheader">Medicamentos</NavLink></li>
                    <li><NavLink to="productos" state={ {value: "dermocosmetica"} }  className="item-subheader">Dermocosmética</NavLink></li>
                    <li><NavLink to="productos" state={ {value: "suplemento"} } className="item-subheader">Suplementos</NavLink></li>
                    <li><NavLink to="productos" state={ {value: "cuidadopersonal"} } className="item-subheader">Cuidado Personal</NavLink></li>
                </ul>
            </nav>
    )
}

export default SubHeader;