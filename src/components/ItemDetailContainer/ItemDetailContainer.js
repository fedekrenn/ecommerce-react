import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore'
// import bikes from '../../utils/bikesMocks';
import ItemDetail from '../ItemDetail/ItemDetail';
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader';
import db from '../../utils/firebaseConfig';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const navigate = useNavigate()

    const { id } = useParams()

    //Llamado a firebase
    const productFilter = async () => {

        const productSnapshot = await getDocs(collection(db, "bicicletas"));
        //Se guarda un array de todos los productos y se suma el ID
        const productList = productSnapshot.docs.map(doc => {
            let product = doc.data()
            product.id = parseInt(doc.id)
            return product
        });

        // Método para acceder al detalle del producto seleccionado por el usuario
        const prueba = productList.find((product) => {
            return product.id === parseInt(id)
        })

        // Condicional para redirigir a pagina de error si no encuentra el Id de producto
        if (prueba === undefined) {
            navigate('/*')
        } else {
            setItem(prueba)
        }
    }

    useEffect(() => {

        productFilter()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {Object.keys(item).length === 0 ? <SpinnerLoader /> : <ItemDetail prop={item} />}
        </>
    )
}

export default ItemDetailContainer