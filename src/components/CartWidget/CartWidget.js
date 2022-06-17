import './CartWidget.css'
import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Menu from '@mui/material/Menu';
import KeepBuying from '../KeepBuying/KeepBuying'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { cartListItems, setCartListItems, totalPrice, setTotalPrice } = useContext(CartContext)


    // Función para el borrado de productos
    const deleteProduct = (prod) => {
        
        // Filtro los productos distintos al que quiero borrar y los seteo en el context, por lo que eliminé el que selecciona el usuario
        const filteredProduct = cartListItems.filter(cartItem => cartItem !== prod)
        setCartListItems(filteredProduct)

        // Actualizo el precio total a mostrar
        setTotalPrice(totalPrice - prod.price * prod.quantity)
    }


    // Importación de Material
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <ShoppingCartIcon
                className='icon-cart'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div>
                    {cartListItems.map((product, i) => {
                        return (
                            <div className='cart-items-products' key={i}>
                                <img src={`../assets/images/${product.pic1}`} alt={`Bicicleta ${product.title}`}/>
                                <div className='cart-items-products__detail'>
                                    <h4>{product.title}</h4>
                                    <p><b>${product.price}</b> - Cantidad: {product.quantity} - Talle {product.size}</p>
                                </div>
                                <DeleteForeverIcon className='delete-icon' onClick={() => deleteProduct(product)} />
                            </div>
                        )
                    })}
                    {cartListItems.length === 0 ?
                        <KeepBuying />
                        :
                        <div className="checkout">
                            <Button variant="contained">
                                <Link to="/cart" onClick={handleClose}>Finalizar compra</Link>
                            </Button>
                        </div>}
                </div>
            </Menu>
        </>
    )
}

export default CartWidget