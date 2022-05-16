import './ItemList.css'
import Button from '@mui/material/Button';

const ItemList = (prop) => {
    const {greeting, img, price} = prop;
    return (
        <div className='itemList'>
            <img alt={`Bicicleta ${greeting}`} src={`./assets/images/${img}`}></img>
            <h3>{greeting}</h3>
            <p>${price}</p>
            <Button variant="outlined">Comprar</Button>
        </div>
    )
}

export default ItemList