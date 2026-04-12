import { useState } from 'react';
import './App.css';
import Clientes from './components/Clientes';
import Mascotas from './components/Mascotas';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  const nombreApp = "El Dogo - Gestion de Veterinaria";

  const handleLogin = (e) => {
    e.preventDefault();
    // Validación básica
    if (user && password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <h1>{nombreApp}</h1>
        <form onSubmit={handleLogin}>
          <h2>Iniciar Sesión</h2>
          <div style={{ marginBottom: '10px' }}>
            <label>Usuario: </label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Contraseña: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    );
  }

  return (
    <>
      <div>
        <h1> {nombreApp} </h1>
        <p>¡Bievenido! Acá gestionarás a tus Clientes y Mascotas.</p>

        {/* Menú de navegación simple */}
        <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <button onClick={() => setActiveTab('home')}>Inicio</button>
          <button onClick={() => setActiveTab('clientes')}>Clientes</button>
          <button onClick={() => setActiveTab('mascotas')}>Mascotas</button>
        </nav>

        {/* Renderizado condicional */}
        <section style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          {activeTab === 'home' && <p>Selecciona una opción del menú para comenzar.</p>}
          {activeTab === 'clientes' && <Clientes />}
          {activeTab === 'mascotas' && <Mascotas />}
        </section>
        <button onClick={() => setIsLoggedIn(false)} style={{ marginTop: '20px' }}>Cerrar Sesión</button>
      </div>
    </>
  )
}

export default App;
