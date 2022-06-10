import './Cart.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import KeepBuying from '../KeepBuying/KeepBuying';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';




const Cart = () => {

    const { cartListItems, setCartListItems, totalPrice, setTotalPrice } = useContext(CartContext)

    // Función para el borrado de productos
    const deleteProduct = (prod) => {

        // Filtro los productos distintos al que quiero borrar y los seteo en el context, por lo que eliminé el que selecciona el usuario
        const filteredProduct = cartListItems.filter(cartItem => cartItem !== prod)
        setCartListItems(filteredProduct)

        // Actualizo el precio total a mostrar
        setTotalPrice(totalPrice - prod.price * prod.quantity)
    }


    //Función para el borrado total del carrito
    const deleteAll = () => {
        setCartListItems([]);
        setTotalPrice(0)
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
                        <hr />
                    </>
                }
                {cartListItems.map((product, i) => {
                    return (
                        <div className='cart-items-products' key={i}>
                            <img src={`../assets/images/${product.pic1}`} alt={`Bicicleta ${product.title}`} />
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                            <p>{product.quantity}</p>
                            <DeleteForeverIcon className='delete-icon' onClick={() => deleteProduct(product)} />
                        </div>
                    )
                })}
            </div>
            {totalPrice > 0 &&
                <div className='check-out'>
                    <p className='check-out__total-price'>El total de tu compra es ${totalPrice}</p>
                    <div className='check-out__btn'>
                        <Link to="/check-out">
                            <Button variant="contained">Finalizar compra</Button>
                        </Link>
                        <Button variant="outlined" onClick={deleteAll}>Eliminar todo</Button>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart