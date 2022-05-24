import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const bikes = [
        {
            id: 1,
            title: "Venzo Frida",
            description: "lorem impsum",
            price: 67000,
            pictureUrl: "venzo-frida.jpg",
            stock: 4
        },
        {
            id: 2,
            title: "Trinx Gravel",
            description: "lorem impsum",
            price: 185000,
            pictureUrl: "trinx-gravel.jpg",
            stock: 2
        },
        {
            id: 3,
            title: "Raleigh M2.0",
            description: "lorem impsum",
            price: 82300,
            pictureUrl: "raleigh.jpg",
            stock: 9
        }
    ];

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