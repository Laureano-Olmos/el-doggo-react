import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import VistaClientes from './components/VistaClientes';
import VistaMascotas from './components/VistaMascotas';
import VistaConfiguracion from './components/VistaConfiguracion';
import Navegacion from './components/Navegacion';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (estado) => {
    setIsLoggedIn(estado);
  };

  return (
    <div className="App-Container">
      <h1>El Dogo - Gestión de veterinaria</h1>

      {isLoggedIn ? (
        <>
          <Navegacion />
          <Routes>
            <Route path="/" element={<VistaClientes />} />
            <Route path="/mascotas" element={<VistaMascotas />} />
            <Route path="/config" element={<VistaConfiguracion />} />
            <Route path="*" element={<h2>404 - Pagina no encontrada</h2>} />
          </Routes>
          <button className="btn-logout" onClick={() => setIsLoggedIn(false)}>Cerrar Sesion</button>
        </>
      ) : (
        <Login onLoginExitoso={handleLogin} />
      )}
    </div>
  );
}

export default App;
