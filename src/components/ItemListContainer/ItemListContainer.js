import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import bikes from '../../utils/bikesMocks';


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(bikes)
            }, 2000)
        })
    };

    useEffect(() => {

        getProducts()
            .then((res) => {
                setProducts(res)
            })
            .catch((rej) => {
                console.log(rej)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <section>
            <h2>{greeting}</h2>
            <div className="item-list__container">
                <ItemList items={products} />
            </div>
        </section>
    );
}

export default ItemListContainer