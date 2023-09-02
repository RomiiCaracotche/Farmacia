import './style.css';
import HeaderFull from './../../components/HeaderFull';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    return (
        <>
            {((location.pathname === "/registrarse") || (location.pathname === "/ingresar")) ? 
                <Header/> 
                : 
                <HeaderFull/>
            } 
            <Outlet/>
            {(location.pathname === "/") && 
                <>
                    <p>formas de pago</p>
                    <p>obras sociales</p>
                    <p>descuentos</p>
                </>
            }
            <Footer/>
        </>
    )
}

export default Home;