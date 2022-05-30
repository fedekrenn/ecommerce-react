import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import onAdd from '../../functions/onAdd';
import { Carousel } from 'react-bootstrap'

const ItemDetail = ({ prop }) => {

    const { title, price, pictureUrl, stock, pic1, pic2, pic3, pic4, sizes } = prop;


    return (

        <div className="container">

            {/* <img className="primary-pic" alt={`Bicicleta ${title}`} src={`./assets/images/${pictureUrl}`}></img> */}
            <Carousel className="primary-pic" variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-item__img"
                        src={`./assets/images/${pictureUrl}`}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-item__img"
                        src={`./assets/images/${pic1}`}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-item__img"
                        src={`./assets/images/${pic2}`}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-item__img"
                        src={`./assets/images/${pic3}`}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-item__img"
                        src={`./assets/images/${pic4}`}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <img className="pic1 pic-detail" alt={`Bicicleta ${title}`} src={`./assets/images/${pic1}`}></img>
            <img className="pic2 pic-detail" alt={`Bicicleta ${title}`} src={`./assets/images/${pic2}`}></img>
            <img className="pic3 pic-detail" alt={`Bicicleta ${title}`} src={`./assets/images/${pic3}`}></img>
            <img className="pic4 pic-detail" alt={`Bicicleta ${title}`} src={`./assets/images/${pic4}`}></img>

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