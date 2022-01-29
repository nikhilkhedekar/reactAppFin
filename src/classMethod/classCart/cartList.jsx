import React, { Component } from 'react'
import CartItem from './cartItem'
import { addItemDispatcher, removeItemDispatcher, store } from './cartReducer'

export default class CartList extends Component{
    constructor() {
        super()
        this.state = {
            items: [],
            totalPrice: 0,
        }
    }

    updateState = () => {
        this.setState({
            items: store.getState().items,
            totalPrice: store.getState().totalPrice,
        })
    }

    componentDidMount(){
        this.updateState()
        store.subscribe(this.updateState.bind(this))
    }

    onAddItem = (item) => {
        store.dispatch(addItemDispatcher({ ...item, productQuantity: 1 }))
    }

    onRemoveItem = id => {
        store.dispatch(removeItemDispatcher(id))
    }

    render(){
        console.log('caartItem', this.state.items)
        console.log('totalPrice', this.state.totalPrice)
        const renderCartItems = this.state.items.map((product, i) => {
            return(
                <CartItem key={i} 
                productName={product.productName}
                productPrice={product.productPrice}
                productQuantity={product.productQuantity}
                incProductCount={this.onAddItem.bind(this, product)}
                decProductCount={this.onRemoveItem.bind(this, product.id)} 
                />
            )
        }) 
        return(
            <div>
                <div>
                    {renderCartItems}
                    <div><strong>Total Price:</strong> {this.state.totalPrice}</div>
                </div>
            </div>
        )
    }
}