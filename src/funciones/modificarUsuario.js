const modificarUsuario = (usuario) => {
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
}

export default modificarUsuario;