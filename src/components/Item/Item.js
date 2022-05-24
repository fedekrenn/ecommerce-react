import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = (prop) => {
    const {productName, img, price, stock} = prop;
    return (
        <div className='item-list'>
            <img alt={`Bicicleta ${productName}`} src={`./assets/images/${img}`}></img>
            <h3>{productName}</h3>
            <p>${price}</p>
            <ItemCount stock={stock} initial={1}/>
        </div>
    )
}

export default Item