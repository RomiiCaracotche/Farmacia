const logueado = () => {
    return sessionStorage.getItem("usuario") !== null;
};

export default logueado;
