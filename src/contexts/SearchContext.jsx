import { createContext, useEffect, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({children}) => {
    const [search, setSearch] = useState("");

    // useEffect(() => {
    //     console.log("productoProvider")
    //     setProductos()
    // }, [])

    return <SearchContext.Provider value={ {search, setSearch} }> {children} </SearchContext.Provider>
}

export {SearchProvider};
export default SearchContext;