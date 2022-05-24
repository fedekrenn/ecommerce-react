import './ItemList.css'
import Item from '../Item/Item';


const ItemList = ({items}) => {
    
    return (
        <>
            {
                items.map((bike, index) =>{
                    return (
                        <Item item={bike} key={index}/>
                    )
                })
            }
        </>
    )
}

export default ItemList