import React, { Component, createRef } from 'react'
import { addItemDispatcher, store } from './cartReducer'

import InputRef from './inputRef'

export default class ProductItem extends Component{
    constructor(props){
        super(props)
        this.getQuantity = this.getQuantity.bind(this);
    }

    getQuantity = productQuantity => {
        store.dispatch(addItemDispatcher({
            id: this.props.id,
            productName: this.props.productName,
            productPrice: this.props.productPrice,
            productQuantity,
        }))
    }

    render(){
        return(
            <div>
                <div>
                    <h3> {this.props.productName} </h3>
                    <span>Product Info: {this.props.productDescription} </span><br />
                    <span>Price: {this.props.productPrice} </span><br />
                    <div> <InputRef id={this.props.id} getQuantity={this.getQuantity} /> </div> 
                </div>
            </div>
        )
    }
}