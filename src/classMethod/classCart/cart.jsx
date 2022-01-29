import React, { Component } from 'react'

import CartList from './cartList'

export default class Cart extends Component{
    render(){
        return(
            <div>
                <div>
                    <CartList />
                </div>
                <button onClick={this.props.hideCart} >Close</button>
            </div>
        )
    }
} 