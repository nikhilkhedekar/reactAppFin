import React, { Component } from 'react'

import NewProduct from './newProduct'
import RenderList from './renderList'

export default class ProductList extends Component{
    constructor(){
        super()
        this.state = {
            productList: [
                {
                    id: 'p1',
                    productName: 'fastrack',
                    productDescription: 'productDescription',
                    productDate: new Date(2019, 3, 5),
                    productPrice: 2000,
                },{
                    id: 'p2',
                    productName: 'MI',
                    productDescription: 'productDescription',
                    productDate: new Date(2020, 7, 17),
                    productPrice: 2000,
                },{
                    id: 'p3',
                    productName: 'Samsung',
                    productDescription: 'productDescription',
                    productDate: new Date(2021, 9, 23),
                    productPrice: 2000,
                },
            ]
        }
        this.addProductHandler = this.addProductHandler.bind(this)
    }

    addProductHandler(newProduct){
        console.log('productListNewProduct', newProduct)
        this.setState({productList: [newProduct, ...this.state.productList]})
    }

    render(){
        return(
            <div>
                <NewProduct addProductHandler={this.addProductHandler} />
                <hr />
                <RenderList list={this.state.productList} />
            </div>
        )
    }
}