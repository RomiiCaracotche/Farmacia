import {v4 as uuidv4} from 'uuid';

const getProductos = async () => {
    try {
        const productos = await fetch('http://localhost:5000/productos');
        const productosJson = await productos.json();
        return productosJson;

    } catch(e) {
        console.error(e)
    }
}

const getProductosByTipo = async (tipo) => {
    try {
        const productos = await getProductos();
        const productosFiltrados = productos.filter((prod) => prod.tipo == tipo);
        return productosFiltrados;
    } catch(e) {
        console.error(e)
    }
}

const getSearch = async (producto) => {
    try{
        const productos = await getProductos();
        const productosFilter = productos.filter((prod) => {
            if(prod.nombreComercial.includes(producto) || prod.nombreGenerico.includes(producto)) {
                return prod;
            }
        })
        return productosFilter;
    }
    catch(e) {
        console.error(e)
    }
}

const getByUsuario = async (nombre) => {
    try{
        const getUsuarios = await fetch(`http://localhost:5000/usuarios`);
        const usuarios = await getUsuarios.json();
        const usuarioFilter = usuarios.filter((usr) => {
            if(usr.usuario === nombre) {
                return usr;
            }
        })
        return usuarioFilter[0] || [];
    }
    catch(e) {
        console.error(e)
    }
}

const addUsuario = async (nombre,apellido,dni,email,fechaNac,usuario,pass) => {
    try{
        return fetch("http://localhost:5000/usuarios", {
            method: "POST",
    		headers: { "Content-Type": "application/json"},
    		body: JSON.stringify({
                "id": uuidv4(),
                "nombre": nombre,
                "apellido": apellido,
                "dni": dni,
                "email": email,
                "fechaNac": fechaNac,
                "usuario": usuario,
                "contrasena": pass,
                "admin": false,
                "carrito": []
              })
        })
    }
    catch(e) {
        console.error(e)
    }
}

export const services = {
    getProductos,
    getProductosByTipo,
    getSearch,
    getByUsuario,
    addUsuario
}
