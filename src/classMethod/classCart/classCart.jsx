import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Header from './header'
import Product from './product'
import Cart from './cart'
import { store } from './cartReducer'

export default class ClassCart extends Component {
    constructor() {
        super()
        this.state = {
            showCart: false,
        }
        this.showCart = this.showCart.bind(this)
        this.hideCart = this.hideCart.bind(this)
    }
    showCart() {
        this.setState({ showCart: true })
    }
    hideCart() {
        this.setState({ showCart: false })
    }
    render() {

        return (
            <div>
                <Provider store={store} >
                    <div>
                        <Header showCart={this.showCart} />
                    </div>
                    <div>
                        {this.state.showCart ? <Cart hideCart={this.hideCart} /> : null}
                    </div>
                    <div>
                        <Product />
                    </div>
                </Provider>
            </div>
        )
    }
}