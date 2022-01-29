import React from 'react'

import ProductDate from './productDate'

const ProductList = (props) => {
    
    return(
        <div>
            <div>{props.name}</div>
            <div>{props.price}</div>
            <div><ProductDate date={props.date} /></div>
        </div>
    )
}

export default ProductList