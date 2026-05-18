import { useState, useEffect } from "react";
import formularioMascota from "./formularioMascota";
import MascotaItem from "./MascotaItem";

function VistaMascotas() {


    const [mascotas, setMascotas] = useState(() => {
        const mascotasGuardadas = localStorage.getItem('mascotasDoggo');
        return mascotasGuardadas ? JSON.parse(mascotasGuardadas) : [];
    })

    const [clientes] = useState(() => {
        const clientesGuardados = localStorage.getItem('clientesDoggo');
        return clientesGuardados ? JSON.parse(clientesGuardados) : [];
    })

    const agregarMascota = (nuevaMascota) => {
        setMascotas([...mascotas, nuevaMascota]);
    }

    const eliminarMascota = (mascotaId) => {
        const listaActualizada = mascotas.filter(mascota => mascota.id !== mascotaId);
        setMascotas(listaActualizada);
    }

    const actualizarMascota = (mascotaActualizada) => {
        const listaActualizada = mascotas.map(mascota => {
            if (mascota.id === mascotaActualizada.id) {
                return mascotaActualizada;
            }
            return mascota;
        });
        setMascotas(listaActualizada);
    }

    useEffect(() => {
        console.log("Detectado cambio en la lista de mascotas. ¡Guardando!");
        localStorage.setItem('mascotasDoggo', JSON.stringify(mascotas));
    }, [mascotas]);

    return (
        <div>
            <section>
                <h2>Gestión de Mascotas</h2>
                <p>Total de mascotas registradas: **{mascotas.length}**</p>
                <hr />
                <formularioMascota clientes={clientes} onMascotaAgregada={agregarMascota} />
                <h2>Mascotas actuales</h2>
                <ul>
                    {mascotas.map((mascota) => (
                        <MascotaItem key={mascota.id} mascota={mascota} onEliminar={eliminarMascota} onActualizar={actualizarMascota} clientes={clientes} />
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default VistaMascotas;
