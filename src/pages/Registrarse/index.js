import './style.css';
import { useEffect } from "react";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { services } from '../../services';
import modificarUsuario from "../../funciones/modificarUsuario";
import { Link } from "react-router-dom";

const Registrarse = () => {

    const arreglo = []

    const registrar = async (e) => {
        e.preventDefault();
        const nombre = document.querySelector(".input-nombre").value;
        const apellido = document.querySelector(".input-apellido").value;
        const fechaNac = document.querySelector(".input-fn").value;
        const dni = document.querySelector(".input-dni").value;
        const email = document.querySelector(".input-email").value;
        const usuario = document.querySelector(".input-usuario").value;
        const contra1 = document.querySelector(".input-contrasena1").value;
        const contra2 = document.querySelector(".input-contrasena2").value;

        if(nombre == "" || apellido == "" || fechaNac == "" || dni == "" || email == "" || usuario == "" || contra1 == "" || contra2 == "") {
            console.log("debe completar todos los campos")
        }
        else {
            if( contra1 !== contra2) {
                console.log("las contrasexasno coinciden")
            }
            else {
                //si pasa las validaciones
                services.addUsuario(nombre,apellido,dni,email,fechaNac,usuario,contra1);
            }
        }
    }  

  return (
    <div>
        <div className='box-registro'>
            <h3>Registrarse</h3>
            <form action="" className='form-registro'>
                <label htmlFor="nombre">nombre:</label>
                <input type="text" name='nombre' placeholder='ingrese el nombre...' className='input-nombre'/>
                <label htmlFor="apellido">apellido:</label>
                <input type="text" name='apellido' placeholder='ingrese el apellido...' className='input-apellido'/>
                <label htmlFor="dni">dni:</label>
                <input type="number" name='dni' placeholder='ingrese el dni...' className='input-dni'/>
                <label htmlFor="fn">fn:</label>
                <input type="date" name='fn' placeholder='ingrese el fn...' className='input-fn'/>
                <label htmlFor="email">email:</label>
                <input type="email" name='email' placeholder='ingrese el email...' className='input-email'/>

                <label htmlFor="usuario">Usuario:</label>
                <input type="text" name='usuario' placeholder='ingrese el usuario...' className='input-usuario'/>
                <label htmlFor="contrasena1">Contraseña:</label>
                <input type="password" name='contrasena1' placeholder='ingrese la contraseña...' className='input-contrasena1'/>
                <label htmlFor="contrasena2">Repetir Contraseña:</label>
                <input type="password" name='contrasena2' placeholder='ingrese la contraseña...' className='input-contrasena2'/>
                <button type='button' onClick={registrar}>Go</button>
            </form>
        </div>  
    </div>
  )
}

export default Registrarse;