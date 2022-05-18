import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    return (
        <div className="item-list__container">
            <ItemList greeting="Venzo Frida" price={67000} img="venzo-frida.jpg" stock={4}/>
            <ItemList greeting="Trinx Gravel" price={185000} img="trinx-gravel.jpg" stock={1}/>
            <ItemList greeting="Raleigh M2.0" price={82300} img="raleigh.jpg" stock={9}/>
        </div>
    );
}

export default ItemListContainer