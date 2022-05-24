import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({item}) => {
    const {title, price, pictureUrl, stock} = item;
    return (
        <div className='item-list'>
            <img alt={`Bicicleta ${title}`} src={`./assets/images/${pictureUrl}`}></img>
            <h3>{title}</h3>
            <p>${price}</p>
            <ItemCount stock={stock} initial={1}/>
        </div>
    )
}

export default Item