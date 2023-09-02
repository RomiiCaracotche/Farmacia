import { useLocation, useNavigate } from "react-router-dom";

const ProductoDetalle = () => {
    const {state} = useLocation();
    let navigate = useNavigate();

    return (
        <div className="">
            <p className="">Detalle del Producto</p>
            <h3>Nombre Genérico: {state.nombreGenerico}</h3>
            <h3>Nombre Comercial: {state.nombreComercial}</h3>
            <h3>Concentracion de la droga: {state.concentracionDroga}</h3>
            <h3>Fórmula: {state.formula}</h3>
            <h3>Laboratorio: {state.laboratorio}</h3>
            <h3>Presentación: {state.presentacion}</h3>
            <h3>Tipo: {state.tipo}</h3>
            <h3>Vencimiento: {state.vencimiento}</h3>
            <h3>Precio: {state.precio}</h3>
            <img src={state.foto}/>
            <button onClick={() => navigate(-1)}>cerrar</button>
        </div>
    )
}

export default ProductoDetalle;