import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2';

const Item = ({item}) => {

    const {title, price, pictureUrl, stock} = item;

    const onAdd = (count) => {
        Swal.fire({
            title: 'Agregado!',
            text: `Se agregaron ${count} productos correctamente`,
            icon: 'success',
            confirmButtonText: 'Seguir comprando'
        })
    }

    return (
        <div className='item-list'>
            <img alt={`Bicicleta ${title}`} src={`./assets/images/${pictureUrl}`}></img>
            <h3>{title}</h3>
            <p>${price}</p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default Item