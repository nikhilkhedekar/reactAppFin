import React from 'react'

const CartButton = (props) => {
    return(
        <div>
            <button onClick={props.showCartHandler} > Cart </button>
        </div>
    )
}

export default CartButton