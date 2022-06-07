import { createContext, useState } from "react";
import Swal from 'sweetalert2';

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartListItems, setCartListItems] = useState([])

    const addProductToCart = (product) => {

        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)

        if (!isInCart) {
            setCartListItems(cartListItems => [...cartListItems, product])
            Swal.fire({
                title: 'Agregado!',
                text: `Se agregaron ${product.quantity} productos correctamente`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
        } else {
            Swal.fire({
                title: 'Atención!',
                text: 'Ya tienes de este producto en el carrito',
                icon: 'info',
                confirmButtonText: 'Aceptar'
            })
        }
    }

    const data = {
        cartListItems,
        addProductToCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }