import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ prop }) => {

    const {title, price, pictureUrl, stock, pic1, pic2, pic3, pic4} = prop;

    console.log(prop)

    return (
        <div className="container">
            <img className="primary-pic" alt={`Bicicleta ${title}`} src={`./assets/images/${pictureUrl}`}></img>
            {/* <div className="pic1"></div>
            <div className="pic2"></div>
            <div className="pic3"></div> */}
            <img className="pic1" alt={`Bicicleta ${title}`} src={`./assets/images/${pic1}`}></img>
            <img className="pic2" alt={`Bicicleta ${title}`} src={`./assets/images/${pic2}`}></img>
            <img className="pic3" alt={`Bicicleta ${title}`} src={`./assets/images/${pic3}`}></img>
            <img className="pic4" alt={`Bicicleta ${title}`} src={`./assets/images/${pic4}`}></img>
            <h3 className="title">{title}</h3>
            <h4 className="price">${price}</h4>
            <div className="detail"></div>
            <div className="buy">
                <ItemCount stock={stock} initial={1}/>
            </div>
        </div>
    )
}

export default ItemDetail