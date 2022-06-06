import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({ prop }) => {

    const { title, price, stock, pic1, pic2, pic3, pic4 , sizes, description } = prop;

    const [bike, setBike] = useState(pic1)
    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)

    const onAdd = () => {
        Swal.fire({
            title: 'Agregado!',
            text: `Se agregaron ${cantidad} productos correctamente`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
        setShowButton(true)
    }

    // Función para seleccionar la imagen principal en el grid
    const selectBike = (img) => {
        setBike(img)
    }

    return (

        <div className="container">

            <img className="primary-pic" alt={`Bicicleta ${title}`} src={`../assets/images/${bike}`}></img>

            <img className="pic1 pic-detail" onClick={() => selectBike(pic1)} alt={`Bicicleta ${title}`} src={`../assets/images/${pic1}`}></img>
            <img className="pic2 pic-detail" onClick={() => selectBike(pic2)} alt={`Bicicleta ${title}`} src={`../assets/images/${pic2}`}></img>
            <img className="pic3 pic-detail" onClick={() => selectBike(pic3)} alt={`Bicicleta ${title}`} src={`../assets/images/${pic3}`}></img>
            <img className="pic4 pic-detail" onClick={() => selectBike(pic4)} alt={`Bicicleta ${title}`} src={`../assets/images/${pic4}`}></img>

            <div className='title'>
                <h3>{title}</h3>
                <h4 className='price'>${price}</h4>
            </div>

            <div className="detail">
                <p>Llega gratis en 5 días</p>
                <p>Abonalo en <span>12 cuotas sin interés</span> de ${parseInt(price / 12)}</p>
                <p className='detail__description'>{description}</p>
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
                
                {!showButton ? 
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} actualizarCantidad={setCantidad} />
                    :
                    <Button variant="contained"><Link to="/cart">Finalizar compra</Link></Button> }
            </div>

        </div>

    )
}

export default ItemDetail