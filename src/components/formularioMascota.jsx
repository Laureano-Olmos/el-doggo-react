import React, { useState } from 'react';

function FormularioMascota({ clientes, onMascotaAgregada }) {
    const [nombre, setNombre] = useState('');
    const [especie, setEspecie] = useState('');
    const [raza, setRaza] = useState('');
    const [clienteId, setClienteId] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre || !especie || !clienteId) {
            alert('Por favor, completa Nombre, Especie y Dueño.');
            return;
        }
        const nuevaMascota = {
            id: Date.now(),
            nombre,
            especie,
            raza,
            clienteId: Number(clienteId),
        };
        onMascotaAgregada(nuevaMascota);
        setNombre('');
        setEspecie('');
        setRaza('');
        setClienteId('');
    };
    return (
        <form onSubmit={handleSubmit} className="formulario-mascota">
            <h3>Nueva Mascota</h3>
            <label>
                Dueño:
                <select value={clienteId} onChange={(e) => setClienteId(e.target.value)} required>
                    <option value="">Seleccionar cliente</option>
                    {clientes.map(cliente => (
                        <option key={cliente.id} value={cliente.id}>
                            {cliente.nombre}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Nombre:
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </label>
            <label>
                Especie:
                <input type="text" value={especie} onChange={(e) => setEspecie(e.target.value)} required />
            </label>
            <label>
                Raza:
                <input type="text" value={raza} onChange={(e) => setRaza(e.target.value)} required />
            </label>
            
            <button type="submit">Registrar Mascota</button>
        </form>
    );
}
export default FormularioMascota;