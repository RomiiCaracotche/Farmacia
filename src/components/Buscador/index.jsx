import { useContext, useEffect, useState } from "react";
import SearchContext from "../../contexts/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Buscador = ({placeholder}) => {
    let searchContext = useContext(SearchContext);
    const [search, setSearch] = useState("");

    useEffect(() => {
        searchContext.setSearch(search)
    }, [search])

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="border bg-gray-100 rounded-md border-gray-950">
            <input placeholder={placeholder} onChange={handleOnChange} className="rounded-l-md text-gray-100 text-center p-1.5 text-sm border-r border-gray-950 focus:outline-0 focus:bg-slate-100 focus:border-none focus:text-gray-950"></input>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" style={{color: "rgb(3 7 18)"}} />
        </div>
    )
}

export default Buscador;