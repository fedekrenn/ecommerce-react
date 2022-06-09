import './Cart.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';


const Cart = () => {

    const { cartListItems, totalPrice } = useContext(CartContext)

    return (
        <>
            <h2>Mi Carrito</h2>
            <div className='title-container'>
                <h3>Producto</h3>
                <h3>Nombre</h3>
                <h3>Precio x U.</h3>
                <h3>Cantidad</h3>
                <h3>Eliminar</h3>
            </div>
            <div className='cart-container'>
                {cartListItems.length === 0 && <h4>No hay productos en el carrito</h4>}
                {cartListItems.map((product, i) => {
                    return (
                        <div className='cart-items-products' key={i}>
                            <img src={`../assets/images/${product.pic1}`} alt={`Bicicleta ${product.title}`} />
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                            <p>{product.quantity}</p>
                            <DeleteForeverIcon />
                        </div>
                    )
                })}
            </div>
            <div>El total de tu compra es ${totalPrice}</div>
        </>
    )
}

export default Cart