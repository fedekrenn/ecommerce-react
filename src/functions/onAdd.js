import Swal from 'sweetalert2';

const onAdd = (count) => {
    Swal.fire({
        title: 'Agregado!',
        text: `Se agregaron ${count} productos correctamente`,
        icon: 'success',
        confirmButtonText: 'Seguir comprando'
    })
}

export default onAdd