import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import bikes from '../../utils/bikesMocks';
import { useParams , useNavigate } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader';

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
                    setItem(res)
                }
            })
            .catch((rej) => {
                console.log(rej)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const productFilter = bikes.find( (product) => {
        return product.id === parseInt(id)
    })

    return (
        <>
            {Object.keys(item).length === 0 ? <SpinnerLoader/> : <ItemDetail prop={item} />}
        </>
    )
}

export default ItemDetailContainer