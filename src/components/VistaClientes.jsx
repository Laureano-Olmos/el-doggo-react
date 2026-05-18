import React, { useState, useEffect } from 'react';
import FormularioCliente from './formularioCliente';
import ClienteItem from './ClienteItem';

function VistaClientes() {
  const [clientes, setClientes] = useState(() => {
    const datosGuardados = localStorage.getItem('clientesDoggo');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  const agregarNuevoCliente = (nuevoCliente) => {
    setClientes([...clientes, nuevoCliente]);
  };

  const eliminarCliente = (clienteId) => {
    const listaActualizada = clientes.filter(cliente => cliente.id !== clienteId);
    setClientes(listaActualizada);
  };

  const actualizarCliente = (clienteActualizado) => {
    const listaActualizada = clientes.map(cliente => {
      if (cliente.id === clienteActualizado.id) {
        return clienteActualizado;
      }
      return cliente;
    });
    setClientes(listaActualizada);
  };

  useEffect(() => {
    console.log("Detectado cambio en la lista de clientes. ¡Guardando!");
    localStorage.setItem('clientesDoggo', JSON.stringify(clientes));
  }, [clientes]);

  return (
    <section>
      <h2>Gestión de Clientes</h2>
      <p>Total de clientes registrados: **{clientes.length}**</p>
      <hr />
      <FormularioCliente onClienteAgregado={agregarNuevoCliente} />

      <h2>Clientes Actuales</h2>
      <ul className='lista-clientes'>
        {clientes.map(cliente => (
          <ClienteItem 
            key={cliente.id} 
            cliente={cliente} 
            onEliminar={eliminarCliente} 
            onGuardar={actualizarCliente} 
          />
        ))}
      </ul>
    </section>
  );
}

export default VistaClientes;