import './ItemList.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemList = (prop) => {
    const {greeting, img, price} = prop;
    return (
        <div className='item-list'>
            <img alt={`Bicicleta ${greeting}`} src={`./assets/images/${img}`}></img>
            <h3>{greeting}</h3>
            <p>${price}</p>
            <ItemCount/>
        </div>
    )
}

export default ItemList