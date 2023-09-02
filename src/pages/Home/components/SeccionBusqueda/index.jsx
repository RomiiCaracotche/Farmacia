import { useEffect, useState, useContext } from "react";
import SearchContext from "../../../../contexts/SearchContext";
import { services } from "../../../../services";
import Producto from "../../../../components/Producto";


const SeccionBusqueda = () => {
    const { search, setSearch } = useContext(SearchContext);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        if(search !== "") {
            const getAll = async() => {
                const allProductos = await services.getSearch(search);
                setProductos(allProductos);
            }
            getAll();
        }
        else {
            setProductos([]);
        }
    }, [search]); 
            
    return (
        <>
            { (productos.length > 0) &&
                <section>
                    <h2>Resultados de la Búsqueda</h2>
                    <div className="resultados-busqueda">
                        <ul className="productos-list">
                            {productos.length !== 0 ? 
                                productos.map((prod, index) => {
                                    return <li key={index} className="productos-item"><Producto producto={prod}/></li>
                                }) 
                                : <h3>No se encontraron resultados...</h3>
                        }
                             
                        </ul> 
                    </div>
                </section>   
            }
        </>  
    );
}

export default SeccionBusqueda;