import React from 'react'

import CartButton from './cartButton'

const Header = (props) => {
    return(
        <div>
            <h1>React App</h1>
            <CartButton showCartHandler={props.showCartHandler} />
        </div>
    )
}

export default Header