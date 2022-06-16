import { createContext, useState } from "react";
import Swal from 'sweetalert2';

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartListItems, setCartListItems] = useState([])

    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {

        // Busco en el cartListItems el producto a agregar, si no lo encuentra (carga por primera vez), lo agrega
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)

        if (!isInCart) {
            setCartListItems(cartListItems => [...cartListItems, product])
            setTotalPrice(totalPrice + product.price * product.quantity)

            Swal.fire({
                title: 'Agregado!',
                text: `Se agregaron ${product.quantity} productos correctamente`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })

        } else {

            // La siguiente lógica sirve para actualizar la cantidad del carrito en caso que el usuario 
            // vuelva a elegir la misma bicicleta, incluye lógica para que nunca supere el stock disponible

            const refreshQuantity = cartListItems.find(cartItem => cartItem.id === product.id)

            if (refreshQuantity.quantity + product.quantity <= product.stock) {

                refreshQuantity.quantity += product.quantity

                // Filtro todos los productos distintos al elegido, los vuelvo a setear en el setCartListItems
                // para así haber eliminado el que voy a actualizar, luego le agrego a esos productos 
                // el nuevo con la cantidad modificada
                const filteredProduct = cartListItems.filter(cartItem => cartItem.id !== product.id)
                setCartListItems(filteredProduct)
                setCartListItems(filteredProduct => [...filteredProduct, refreshQuantity])

                setTotalPrice(totalPrice + product.price * product.quantity)

                Swal.fire({
                    title: 'Atención!',
                    text: `Ya tenías de este producto en el carrito, agregamos ${product.quantity} más`,
                    icon: 'info',
                    confirmButtonText: 'Aceptar'
                })

            } else {
                Swal.fire({
                    title: 'Error',
                    text: `Ya tienes el máximo de cantidad de este producto, nuestro stock es de ${product.stock}`,
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                })
            }
        }
    }

    const data = {
        cartListItems,
        setCartListItems,
        addProductToCart,
        totalPrice,
        setTotalPrice
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }