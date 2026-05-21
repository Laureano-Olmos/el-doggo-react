import React, { useState } from 'react';

function FormularioCliente({ onClienteAgregado }) {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    }

    const handleTelefonoChange = (e) => {
        setTelefono(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim() === '' || telefono.trim() === '') {
            alert('Por favor, completa ambos campos.');
            return;
        }

        const nuevoCliente = {
            id: Date.now(),
            nombre: nombre,
            telefono: telefono,
        };

        onClienteAgregado(nuevoCliente);
        setNombre('');
        setTelefono('');
    };

    return (
        <form onSubmit={handleSubmit} className="formulario-cliente">
            <h3>Nuevo Cliente</h3>
            <label>
                Nombre Completo:
                <input type="text" value={nombre} onChange={handleNombreChange} required />
            </label>
            <label>
                Teléfono:
                <input type="tel" value={telefono} onChange={handleTelefonoChange} required />
            </label>
            <button type="submit">Registrar Cliente</button>
        </form>
    );
}

export default FormularioCliente;