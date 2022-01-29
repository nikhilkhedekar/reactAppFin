import React, { Component } from 'react'

import ProductItem from './productItem'

export default class ProductList extends Component{
    render(){
        
        const renderList = this.props.list.map(product => (
            <ProductItem 
                key={product.id}
                id={product.id}
                productName={product.productName}
                productDescription={product.productDescription}
                productPrice={product.productPrice}
            />
        ))
        return(
            <div>
                <div> {renderList} </div>
            </div>
        )
    }
}