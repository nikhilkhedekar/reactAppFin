import React, { useState } from 'react'

import Product from './product'
import Header from './header'
import Cart from './cart'
import CartProvider from './cartReducer'

const CartMain = () => {
    const [showCart, setShowCart] = useState(false)
    const showCartHandler = () => {
        setShowCart(true)
    }
    const hideCartHandler = () => {
        setShowCart(false)
    }
    return(
        <CartProvider>
            <Header showCartHandler={showCartHandler} />
            <div>{showCart && <Cart hideCartHandler={hideCartHandler} />}</div>
            <Product />
        </CartProvider>
    )
}

export default CartMain