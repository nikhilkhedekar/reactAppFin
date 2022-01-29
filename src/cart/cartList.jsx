import React, { useContext } from 'react'

import CartContext from './cartContext'
import CartItem from './cartItem'

const CartList = () => {
    
    const cartContext = useContext(CartContext);
    const totalPrice = cartContext.totalPrice;
    const hasItem = cartContext.items.length > 0;
    const addItemHandler = (item) => {
        cartContext.addItem({...item, quantity: 1})
    } 
    const removeItem = (id) => {
        cartContext.removeItem(id)
    }
    const cartList = cartContext.items.map( item => {
        return(
            <CartItem 
        key={item.id}
        name={item.name}
        quantity={item.quantity}
        price={item.price}
        onAdd={addItemHandler.bind(null, item)}
        removeItem={removeItem.bind(null, item.id)} />
        )
    }) 
    console.log(totalPrice)
    return(
        <div>
            <label>List: <div>{cartList}</div></label> 
            <label>Total Price: <span>{totalPrice}</span></label>
            <span>{hasItem && (<button>Confirm</button>)}</span>
        </div>
    )
}

export default CartList