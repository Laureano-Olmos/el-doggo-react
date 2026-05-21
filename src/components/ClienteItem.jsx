import React, { useState } from 'react';
import styles from './ClienteItem.module.css';

function ClienteItem({ cliente, onEliminar, onGuardar }) {

  const [isEditing, setIsEditing] = useState(false);
  const [nombreEditado, setNombreEditado] = useState(cliente.nombre);
  const [telefonoEditado, setTelefonoEditado] = useState(cliente.telefono);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleGuardar = (e) => {
    e.preventDefault();

    const clienteActualizado = {
      ...cliente,
      nombre: nombreEditado,
      telefono: telefonoEditado,
    };

    onGuardar(clienteActualizado);
    setIsEditing(false);
  };

  const handleEliminarClick = () => {
    if (window.confirm(`¿Seguro que quieres eliminar a ${cliente.nombre}?`)) {
      onEliminar(cliente.id);
    }
  };

  return (
    <li key={cliente.id} className={styles.tarjetaCliente}>
      {isEditing ? (
      <form onSubmit={handleGuardar} >
        <input placeholder='Nombre Cliente' value={nombreEditado} onChange={(e) => setNombreEditado(e.target.value)} />
        <input placeholder='Teléfono' value={telefonoEditado} onChange={(e) => setTelefonoEditado(e.target.value)} />
        <button type="submit">💾 Guardar</button>
        <button type="button" onClick={() => setIsEditing(false)}>❌ Cancelar</button>
      </form>
      ) : (
      <div className={styles.infoCliente}>
        <strong className={styles.nombreCliente}>{cliente.nombre}</strong> - Tel: {cliente.telefono}
        <div className={styles.acciones}>
          <button className="btn-editar" onClick={handleEditClick}>📝 Editar</button>
          <button className="btn-eliminar" onClick={handleEliminarClick}>🗑️ Eliminar</button>
        </div>
      </div>
    )}
    </li>
  );
}
export default ClienteItem;