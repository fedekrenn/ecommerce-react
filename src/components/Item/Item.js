import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import onAdd from '../../functions/onAdd';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Item = ({item}) => {

    const {title, price, pic1, stock, id} = item;

    return (
            <div className='item-list'>
            <img alt={`Bicicleta ${title}`} src={`./assets/images/${pic1}`}></img>
            <h3>{title}</h3>
            <p>${price}</p>
            <Button variant="contained">
                <Link to={`/item/${id}`}>Ver detalles</Link>
            </Button>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default Item