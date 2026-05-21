import React, { useState } from 'react';
import styles from "./MascotaItem.module.css";

function MascotaItem({mascota,onEliminar,onActualizar,clientes}) {

    const getDuenio = (id) => {
        const duenio = clientes.find((cliente) => cliente.id === id);
        return duenio ? duenio.nombre : 'Dueño desconocido';
    };

    const [isEditing, setIsEditing] = useState(false);
    
    const[nombreEditado, setNombreEditado] = useState(mascota.nombre);
    const[especieEditado, setEspecieEditado] = useState(mascota.especie);
    const[razaEditado, setRazaEditado] = useState(mascota.raza);
    const[clienteIdEditado, setClienteIdEditado] = useState(mascota.clienteId);

    const handleEliminar = () => {
        if(window.confirm(`¿Seguro que quieres eliminar a ${mascota.nombre}?`)){
            onEliminar(mascota.id);
        }
    }

    const handleEditar = () => {
        setIsEditing(true);
    }

    const handleGuardar = (e) => {
        e.preventDefault();
        
        const mascotaActualizada = {
            ...mascota,
            nombre: nombreEditado,
            especie: especieEditado,
            raza: razaEditado,
            clienteId: Number(clienteIdEditado)
        }
        onActualizar(mascotaActualizada);
        setIsEditing(false);
    }

    const handleCancelar = () => {
        setIsEditing(false);
    }

    return(
        <li key={mascota.id} className={styles.tarjetaMascota}>
            {isEditing ? (
                <form onSubmit={handleGuardar} className={styles.modoEdicion}>
                    <input type="text" placeholder='Nombre Mascota' value={nombreEditado} onChange={(e) => setNombreEditado(e.target.value)} />
                    <input type="text" placeholder='Especie' value={especieEditado} onChange={(e) => setEspecieEditado(e.target.value)} />
                    <input type="text" placeholder='Raza' value={razaEditado} onChange={(e) => setRazaEditado(e.target.value)} />
                    <select value={clienteIdEditado} onChange={(e) => setClienteIdEditado(e.target.value)}>
                        <option value="">Seleccionar dueño</option>
                        {clientes.map((cliente) => (
                            <option key={cliente.id} value={cliente.id}>
                                {cliente.nombre}
                            </option>
                        ))}
                    </select>
                    <button type="submit">💾 Guardar</button>
                    <button type="button" onClick={handleCancelar}>❌ Cancelar</button>
                </form>
            ) : (
                <div className={styles.infoMascota}>
                    <strong className={styles.nombreMascota}>{mascota.nombre}</strong>Raza: {mascota.raza} - Especie: {mascota.especie} - <span className={styles.duenio}>Dueño: {getDuenio(mascota.clienteId)}</span>
                    <div className={styles.acciones}>
                        <button onClick={handleEditar}>📝 Editar</button>
                        <button onClick={handleEliminar}> 🗑️ Eliminar</button>
                    </div>
                </div>
            )}
        </li>
    )
}
export default MascotaItem;