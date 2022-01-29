import React,{ Component } from 'react'

import ProductForm from './productForm'

export default class NewProduct extends Component{
    constructor(props) {
        super(props)
        this.onAddNewProduct = this.onAddNewProduct.bind(this)
    }
    onAddNewProduct(productDetails){
        const newProduct = {
            id: Math.random().toString(),
            ...productDetails,
        }
        console.log('newProduct', newProduct)
        this.props.addProductHandler(newProduct)
    }
    render() {
        return(
            <div>
                <ProductForm onAddNewProduct={this.onAddNewProduct} />
            </div>
        )
    }
}