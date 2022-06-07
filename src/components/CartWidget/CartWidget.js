import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import * as React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CartWidget = () => {

    const { cartListItems } = useContext(CartContext)

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
                <MenuItem>
                    {cartListItems.length === 0 && <h4>No hay productos en el carrito</h4>}
                    {cartListItems.map((product, i) => {
                        return (
                            <div className='cart-items-products' key={i}>
                                <img src={`../assets/images/${product.pic1}`} alt={`Bicicleta ${product.title}`}></img>
                                <div className='cart-items-products__detail'>
                                    <h4>{product.title}</h4>
                                    <p><b>${product.price}</b> - Cantidad: {product.quantity}</p>
                                </div>
                                <DeleteForeverIcon />
                            </div>
                        )
                    })}
                </MenuItem>
            </Menu>
        </>
    )
}

export default CartWidget