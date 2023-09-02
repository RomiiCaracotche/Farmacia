import "./assets/style.css";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { useState } from "react";
import Ingresar from "./pages/Ingresar";
import Home from './pages/Home';
import Productos from './pages/Productos';
import Page404 from './pages/Page404';
import CarritoPago from "./pages/CarritoPago";
import PagoTarjeta from "./pages/PagoTarjeta";
import Registrarse from "./pages/Registrarse";
import ProductoDetalle from "./pages/ProductoDetalle";
import CarritoContext, { CarritoProvider } from "./contexts/CarritoContext";
import UsuarioContext, { UsuarioProvider } from "./contexts/UsuarioContext";
import SearchContext, { SearchProvider } from "./contexts/SearchContext";

function App() {
  const [carrito, setCarrito] = useState("");
  const [usuario, setUsuario] = useState("");
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <UsuarioContext.Provider value={{usuario, setUsuario}}>
      {/* <UsuarioProvider>
      <CarritoProvider> */}
        <CarritoContext.Provider value={{carrito, setCarrito}}> 
        <SearchContext.Provider value={{search, setSearch}}> 
          <Routes>
              <Route path='/' element={<Home />}> 
                <Route path='/ingresar' element={<Ingresar/>}/> 
                <Route path='/registrarse' element={<Registrarse/>}/>
                <Route path='/productos' element={<Productos/>}>
                  <Route path=':verProducto' element={<ProductoDetalle/>}/>
                </Route>
                <Route path='verProducto' element={<ProductoDetalle/>}/>
                <Route path='/miCarrito' element={<CarritoPago/>}/>
                <Route path='/finalizarCompra' element={<PagoTarjeta/>}/>
              </Route>
              <Route path='*' element={<Page404/>}/>
          </Routes>
        </SearchContext.Provider>
        </CarritoContext.Provider>
      </UsuarioContext.Provider>
        {/* </CarritoProvider>
      </UsuarioProvider> */}
    </BrowserRouter>
  );
}

export default App;
