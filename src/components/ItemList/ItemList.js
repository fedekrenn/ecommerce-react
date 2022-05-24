import './ItemList.css'
import Item from '../Item/Item';


const ItemList = ({bikes}) => {
    
    return (
        <>
            {
                bikes.map((bike, index) =>{
                    const {title, price, pictureUrl, stock} = bike
                    return (
                        <Item productName={title} price={price} img={pictureUrl} stock={stock} key={index}/>
                    )
                })
            }
        </>
    )
}

export default ItemList