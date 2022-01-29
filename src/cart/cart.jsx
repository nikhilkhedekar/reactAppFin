import React from 'react'

import CartList from './cartList'

const Cart = (props) => {

    return(
        <div>
            <h1>Cart</h1>
            <div><CartList /></div>
            <button onClick={props.hideCartHandler} >Close</button>
        </div>
    )
}

export default Cart