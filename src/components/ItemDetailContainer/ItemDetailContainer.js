import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { producto } from '../../utils/bikesMocks';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const getItem = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(producto)
            }, 2000)
        })
    };

    useEffect(() => {

        getItem()
            .then((res) => {
                setItem(res)
            })
            .catch((rej) => {
                console.log(rej)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    return (
        <>
            <h2>Hola</h2>
            <ItemDetail prop={item}/>
        </>
    )
}

export default ItemDetailContainer