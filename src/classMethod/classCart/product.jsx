import React, { Component } from 'react'

import ProductList from './productList'

export default class Product extends Component{
    constructor(){
        super()
        this.state = {
            productList: [
                {
                    id: 'p1',
                    productName: 'M21',
                    productDescription: 'discription',
                    productPrice: 15000
                },
                {
                    id: 'p2',
                    productName: 'M32',
                    productDescription: 'discription',
                    productPrice: 20000
                },
                {
                    id: 'p3',
                    productName: 'F32',
                    productDescription: 'discription',
                    productPrice: 25000
                },
            ]
        }
    }
    render(){
        return(
            <div>
                <ProductList list={this.state.productList} />
            </div>
        )
    }
}