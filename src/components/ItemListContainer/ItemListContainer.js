import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import bikes from '../../utils/bikesMocks';
import { useParams } from 'react-router-dom';
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader';


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()

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
                setLoading(false)
                category === undefined ? 
                    setProducts(res) : 
                    setProducts(res.filter(el => el.category === category));
            })
            .catch((rej) => {
                console.log(rej)
            })

            return(() =>{
                setLoading(true);
                setProducts([])
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    return (
        <section>
            <h2>{greeting}</h2>
            <div className="item-list__container">
                {loading ? <SpinnerLoader /> : <ItemList items={products} />}
            </div>
        </section>
    );
}

export default ItemListContainer