import './Cart.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import KeepBuying from '../../components/KeepBuying/KeepBuying';
import Button from '@mui/material/Button';
import Modal from '../../components/Modal/Modal'
import TextField from '@mui/material/TextField';



const Cart = () => {

    const { cartListItems, setCartListItems, totalPrice, setTotalPrice, deleteProduct } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        mail: ''
    })
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map(item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            }
        }),
        total: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue, total: totalPrice})
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
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
                            <h3>Talle</h3>
                            <h3>Precio x U.</h3>
                            <h3>Cantidad</h3>
                            <h3>Eliminar</h3>
                        </div>
                        <hr />
                    </>
                }
                {cartListItems.map((product, i) => {
                    const { title, pic1, price, size, quantity } = product
                    return (
                        <div className='cart-items-products' key={i}>
                            <img src={`../assets/images/${pic1}`} alt={`Bicicleta ${title}`} />
                            <p>{title}</p>
                            <p>{size}</p>
                            <p>${price}</p>
                            <p>{quantity}</p>
                            <DeleteForeverIcon className='delete-icon' onClick={() => deleteProduct(product)} />
                        </div>
                    )
                })}
            </div>
            {totalPrice > 0 &&
                <div className='check-out'>
                    <p className='check-out__total-price'>El total de tu compra es ${totalPrice}</p>
                    <div className='check-out__btn'>
                        <Button variant="contained" onClick={() => setShowModal(true)}>Finalizar compra</Button>
                        <Button variant="outlined" onClick={deleteAll}>Eliminar todo</Button>
                    </div>
                </div>
            }
            <Modal title={'Formulario de contacto'} open={showModal} handleClose={() => setShowModal(false)}>
                <form className='check-form' onSubmit={handleSubmit}>
                    <TextField
                        id="standard-basic"
                        name="name"
                        label="Tu nombre completo"
                        variant="standard"
                        type="text"
                        value={formValue.name}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        id="standard-basic"
                        name="phone"
                        label="Teléfono"
                        variant="standard"
                        type="number"
                        value={formValue.phone}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        id="standard-basic"
                        name="mail"
                        label="Email"
                        variant="standard"
                        type="email"
                        value={formValue.mail}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" variant="contained">Enviar</Button>
                </form>
            </Modal>
        </>
    )
}

export default Cart