import "./style.css";
import { useContext, useEffect, useState } from "react";
import {services} from "../../services";
import Producto from "../../components/Producto";
import { useLocation } from "react-router-dom";
import SearchContext from "../../contexts/SearchContext";

const Productos = () => {
    let searchContext = useContext(SearchContext);
    const [productos, setProductos] = useState([]);
    let {state} = useLocation();
    

    useEffect(() => {
            let allProductos = [];
            //por buscador
            if(searchContext.search) {
                const getAllFiltrados = async() => {
                    allProductos = await services.getSearch(searchContext.search);
                    setProductos(allProductos);
                }
                getAllFiltrados();
            }
            else {
                //por categoria del subheader
                if(state) {
                    const getAllProductos = async() => {
                        allProductos = await services.getProductosByTipo(state.value);
                        setProductos(allProductos);
                    }
                    getAllProductos();
                }
            }
    }, [searchContext.search, state]);

    return (
        <>
            <div className="productos"> 
                {productos.length !== 0 ?    
                    <ul className="productos-list">
                        {productos.map((prod) => {
                            return <li key={prod.id} className="productos-item"><Producto producto={prod}/></li>
                        })}
                    </ul> 
                :
                    <h3>No hay resultados de la busqueda...</h3>
                }
            </div>
        </> 
    )
}

export default Productos;