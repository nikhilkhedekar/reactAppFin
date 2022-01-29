import React from 'react'

import ProductList from './productList'

const DUMMY = [{
    id: 'p0',
    name: 'nike',
    description: 'description',
    price: '100',
},{
    id: 'p1',
    name: 'puma',
    description: 'description',
    price: '200',
},{
    id: 'p2',
    name: 'adidas',
    description: 'description',
    price: '300',
},]

const Product = () => {
    
    const renderList = DUMMY.map(item => {
        return(
            <ProductList 
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price} />
        )
    })
    return(
        <div>
            {renderList}
        </div>
    )
}

export default Product