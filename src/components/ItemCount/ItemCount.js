import './ItemCount.css';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import { useState } from "react";

const ItemCount = (props) => {

    const { stock, initial } = props;

    const [count, setCount] = useState(initial);

    const addItem = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            Swal.fire({
                title: 'Alerta de stock!',
                text: `Por el momento solo contamos con ${stock} unidades en stock, por lo que no es posible agregar más`,
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente'
            })
        }
    }

    const removeItem = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const onAdd = () => {
        Swal.fire({
            title: 'Agregado!',
            text: `Se agregaron ${count} productos correctamente`,
            icon: 'success',
            confirmButtonText: 'Seguir comprando'
        })
    }

    return (
        <>
            <div className='item-list__counter'>
                <Button className='btn-counter' onClick={removeItem}>-</Button>
                <p>{count}</p>
                <Button className='btn-counter' onClick={addItem}>+</Button>
            </div>
            <Button className='btn' variant="outlined" onClick={onAdd}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount;