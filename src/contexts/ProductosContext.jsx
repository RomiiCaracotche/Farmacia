import { createContext, useEffect, useState } from 'react';

const ProductosContext = createContext();

const ProductosProvider = ({children}) => {
    const [productos, setProductos] = useState("");

    // useEffect(() => {
    //     console.log("productoProvider")
    //     setProductos()
    // }, [])

    return <ProductosContext.Provider value={ {productos, setProductos} }> {children} </ProductosContext.Provider>
}

export {ProductosProvider};
export default ProductosContext;