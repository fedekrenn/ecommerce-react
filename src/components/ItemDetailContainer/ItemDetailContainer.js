import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import bikes from '../../utils/bikesMocks';
import { useParams , useNavigate } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const navigate = useNavigate()

    const { id } = useParams()
    
    const getItem = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(productFilter)
            }, 2000)
        })
    };

    useEffect(() => {

        getItem()
            .then((res) => {
                if(res === undefined){
                    navigate('/*')
                }else {
                    setItem(productFilter)
                }
            })
            .catch((rej) => {
                console.log(rej)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const productFilter = bikes.find( (product) => {
        return product.id == id
    })

    return (
        <>
            {Object.keys(item).length === 0 ? <h2>Cargando detalle producto...</h2> : <ItemDetail prop={item} />}
        </>
    )
}

export default ItemDetailContainer