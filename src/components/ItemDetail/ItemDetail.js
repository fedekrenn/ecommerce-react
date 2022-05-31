import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import onAdd from '../../functions/onAdd';
import { useState } from 'react';

const ItemDetail = ({ prop }) => {

    const { title, price, pictureUrl, stock, pic1, pic2, pic3, sizes } = prop;

    const [bike, setBike] = useState(pictureUrl)

    // Función para seleccionar la imagen principal en el grid
    const selectBike = (img) => {
        setBike(img)
    }

    return (

        <div className="container">

            <img className="primary-pic" alt={`Bicicleta ${title}`} src={`../assets/images/${bike}`}></img>

            <img className="pic1 pic-detail" onClick={() => selectBike(pictureUrl)} alt={`Bicicleta ${title}`} src={`../assets/images/${pictureUrl}`}></img>
            <img className="pic2 pic-detail" onClick={() => selectBike(pic1)} alt={`Bicicleta ${title}`} src={`../assets/images/${pic1}`}></img>
            <img className="pic3 pic-detail" onClick={() => selectBike(pic2)} alt={`Bicicleta ${title}`} src={`../assets/images/${pic2}`}></img>
            <img className="pic4 pic-detail" onClick={() => selectBike(pic3)} alt={`Bicicleta ${title}`} src={`../assets/images/${pic3}`}></img>

            <div className='title'>
                <h3>{title}</h3>
                <h4 className='price'>${price}</h4>
            </div>

            <div className="detail">
                <p>Llega gratis en 5 días</p>
                <p>Abonalo en <span>12 cuotas sin interés</span> de ${parseInt(price / 12)}</p>
                <Autocomplete
                    disablePortal
                    className='autocomplete'
                    id="combo-box-demo"
                    options={sizes}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Talle" />}
                />
            </div>

            <div className="buy">
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            </div>

        </div>

    )
}

export default ItemDetail