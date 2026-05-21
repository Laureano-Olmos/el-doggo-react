import React, { useState } from 'react';

function Login({ onLoginExitoso }) {
    const [password, setPassword] = useState('');
    const PASSWORD_SECRETA = "123";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === PASSWORD_SECRETA) {
            onLoginExitoso(true);
        } else {
            alert('Contraseña incorrecta. ¡Acceso denegado!');
            setPassword('');
        }
    }

    return (
        <div className="login-container">
            <h2>Verificación de usuario</h2>
            <p>Ingresa tu clave para acceder a la gestión de Clientes y Mascotas</p>

            <form onSubmit={handleSubmit}>
                <input type="password" placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
}

export default Login;