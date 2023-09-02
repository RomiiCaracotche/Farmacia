import './style.css';
import { services } from '../../services';
import modificarUsuario from "../../funciones/modificarUsuario";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import UsuarioContext from '../../contexts/UsuarioContext';

const Ingresar = () => {
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    const usuarioContext = useContext(UsuarioContext);

    const login = async (e) => {
        e.preventDefault();
        const user = await services.getByUsuario(usuario);

        if(user.length == 0){
            alert("No existe el usuario ", usuario)
        } else {
            if(user.contrasena === pass){
                
                const usuario = {
                    usuario: user,
                    carrito: []
                }

                modificarUsuario(usuario);  
                usuarioContext.setUsuario(usuario)
                navigate("/");
            }
            else {
                alert("Ingreso mal la contraseña");
            }
        }
    }  

    const handleChangeUsuario = (e) => {
        setUsuario(e.target.value)
    }

    const handleChangePass = (e) => {
        setPass(e.target.value)
    }

  return (
    <div>
        <div className="flex flex-col">
            <h3>Ingresar</h3>
            <form className='flex flex-col'> 
                <label htmlFor="usuario">Usuario:</label>
                <input 
                    type="text"
                    name='usuario' 
                    placeholder='ingrese el usuario...' 
                    className='input-usuario'
                    value= {usuario}
                    onChange={handleChangeUsuario}
                />
                <label htmlFor="contrasena">Contraseña:</label>
                <input 
                    type="password" 
                    name='contrasena' 
                    placeholder='ingrese la contraseña...' 
                    className='input-contrasena'
                    value= {pass}
                    onChange={handleChangePass}
                />
                <button type='button' onClick={login}>Go</button>
            </form>
            <Link to="/registrarse">Registrarse</Link>
        </div>  
    </div>
  )
}

export default Ingresar;