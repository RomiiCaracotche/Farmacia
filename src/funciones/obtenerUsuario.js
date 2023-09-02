const obtenerUsuario = () => {
    //retorna un objeto
    return JSON.parse(sessionStorage.getItem("usuario"));
}

export default obtenerUsuario;