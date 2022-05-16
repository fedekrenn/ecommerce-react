import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    return (
        <div className="item-list__container">
            <ItemList greeting="Venzo Frida" price={67000} img="venzo-frida.jpg"/>
            <ItemList greeting="Trinx Gravel" price={185000} img="trinx-gravel.jpg"/>
            <ItemList greeting="Raleigh M2.0" price={82300} img="raleigh.jpg"/>
        </div>
    );
}

export default ItemListContainer