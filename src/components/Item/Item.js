import './Item.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Item = ({item}) => {

    const {title, price, pic1, id} = item;

    return (
            <div className='item-list'>
            <img alt={`Bicicleta ${title}`} src={`../assets/images/${pic1}`}></img>
            <h3>{title}</h3>
            <p>${price}</p>
            <Button variant="contained">
                <Link to={`/item/${id}`}>Ver detalles</Link>
            </Button>
        </div>
    )
}

export default Item