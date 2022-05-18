import './ItemCount.css';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import { useState } from "react";

const ItemCount = (prop) =>{

    const {stockNum} = prop;

    const [count, setCount] = useState(1);

    const addItem = _ => {
        if (count < stockNum) {
            setCount(count + 1)
        } else {
            Swal.fire({
                title: 'Alerta de stock!',
                text: `Por el momento solo contamos con ${stockNum} unidades en stock, por lo que no es posible agregar más`,
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente'
              })
        }
    }

    const removeItem = _ => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const confirm = _ =>{
        Swal.fire({
            title: 'Agregado!',
            text: 'El producto se agregó correctamente',
            icon: 'success',
            confirmButtonText: 'Seguir comprando'
          })
    }

    return(
        <>
            <div className='item-list__counter'>
                <Button onClick={removeItem}>-</Button>
                <p>{count}</p>
                <Button onClick={addItem}>+</Button>
            </div>
            <Button className='btn' variant="outlined" onClick={confirm}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount;