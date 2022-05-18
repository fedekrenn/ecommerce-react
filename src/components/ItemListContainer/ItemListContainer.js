import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    return (
        <section>
            <h2>{greeting}</h2>
            <div className="item-list__container">
                <ItemList productName="Venzo Frida" price={67000} img="venzo-frida.jpg" stock={4}/>
                <ItemList productName="Trinx Gravel" price={185000} img="trinx-gravel.jpg" stock={2}/>
                <ItemList productName="Raleigh M2.0" price={82300} img="raleigh.jpg" stock={9}/>
            </div>
        </section>
    );
}

export default ItemListContainer