
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
        <li key={mascota.id}>
            {isEditing ? (
                <form onSubmit={handleGuardar}>
                    <input type="text" value={nombreEditado} onChange={(e) => setNombreEditado(e.target.value)} />
                    <input type="text" value={especieEditado} onChange={(e) => setEspecieEditado(e.target.value)} />
                    <input type="text" value={razaEditado} onChange={(e) => setRazaEditado(e.target.value)} />
                    <select value={clienteIdEditado} onChange={(e) => setClienteIdEditado(e.target.value)}>
                        <option value="">Seleccionar dueño</option>
                        {clientes.map((cliente) => (
                            <option key={cliente.id} value={cliente.id}>
                                {cliente.nombre}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Guardar</button>
                    <button type="button" onClick={handleCancelar}>Cancelar</button>
                </form>
            ) : (
                <>
                    ** {mascota.nombre} ** - Raza: {mascota.raza} - Especie: {mascota.especie} - Dueño: {getDuenio(mascota.clienteId)}
                    <button className="btn-editar" onClick={handleEditar}> Editar</button>
                    <button className="btn-eliminar" onClick={handleEliminar}> 🗑️ Eliminar</button>
                </>
            )}
        </li>
    )
}
export default MascotaItem