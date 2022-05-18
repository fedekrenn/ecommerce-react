import './ItemCount.css'
import Button from '@mui/material/Button';

const ItemCount = () =>{
    return(
        <>
            <div className='item-list__counter'>
                <Button>-</Button>
                <p>1</p>
                <Button>+</Button>
            </div>
            <Button className='btn' variant="outlined">Agregar al carrito</Button>
        </>
    )
}

export default ItemCount;