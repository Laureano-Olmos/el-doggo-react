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
    <li key={cliente.id} className="cliente-item">
      {isEditing ? (
      <form onSubmit={handleGuardar} >
        <input value={nombreEditado} onChange={(e) => setNombreEditado(e.target.value)} />
        <input value={telefonoEditado} onChange={(e) => setTelefonoEditado(e.target.value)} />
        <button type="submit">💾 Guardar</button>
        <button type="button" onClick={() => setIsEditing(false)}>❌ Cancelar</button>
      </form>
      ) : (
      <div>
        <strong>{cliente.nombre}</strong> - Tel: {cliente.telefono}
        <button className="btn-editar" onClick={handleEditClick}> Editar</button>
        <button className="btn-eliminar" onClick={handleEliminarClick}>🗑️ Eliminar</button>
      </div>
    )}
    </li>
  );
}
export default ClienteItem;