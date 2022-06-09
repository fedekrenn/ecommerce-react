import './KeepBuying.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const KeepBuying = () => {
    return (
        <div className='cart-list-products'>
            <h4>No hay productos en el carrito</h4>
                <Link to="/">
                    <Button variant="contained">Seguir comprando</Button>
                </Link>
        </div>
    )
}

export default KeepBuying