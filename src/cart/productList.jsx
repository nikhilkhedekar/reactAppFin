import React, { useContext } from 'react'

import InputForm from './inputForm'
import CartContext from './cartContext'

const ProductList = (props) => {
    const cartContext = useContext(CartContext)
    const addItemToCart = (quantity) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            quantity: quantity
        })
    }
    return(
        <div>
            <ul>
                <li>{props.name}</li>
                <li>{props.description}</li>
                <li>{props.price}</li>
                <li><InputForm id={props.id} addItemToCart={addItemToCart} /></li>
            </ul>
        </div>
    )
}

export default ProductList