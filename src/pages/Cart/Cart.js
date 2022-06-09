import './Cart.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import KeepBuying from '../KeepBuying/KeepBuying';


const Cart = () => {

    const { cartListItems, totalPrice, setCartListItems } = useContext(CartContext)

    // Función para el borrado de productos
    const deleteProduct = (prod) => {
        const filteredProduct = cartListItems.filter(cartItem => cartItem !== prod)
        setCartListItems(filteredProduct)
    }

    return (
        <>
            <div className='cart-container'>
                {cartListItems.length === 0 ? 
                <KeepBuying />
                :
                <>
                    <h2>Mi Carrito</h2>
                    <div className='title-container'>
                        <h3>Producto</h3>
                        <h3>Nombre</h3>
                        <h3>Precio x U.</h3>
                        <h3>Cantidad</h3>
                        <h3>Eliminar</h3>
                    </div>
                </>
                }
                {cartListItems.map((product, i) => {
                    return (
                        <div className='cart-items-products' key={i}>
                            <img src={`../assets/images/${product.pic1}`} alt={`Bicicleta ${product.title}`} />
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                            <p>{product.quantity}</p>
                            <DeleteForeverIcon onClick={() => deleteProduct(product)} />
                        </div>
                    )
                })}
            </div>
            <div>El total de tu compra es ${totalPrice}</div>
        </>
    )
}

export default Cart