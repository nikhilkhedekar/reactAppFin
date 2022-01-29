import React, { Component } from 'react'

export default class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: '',
            productDescription: '',
            productDate: '',
            productPrice: '',
        }
        this.productNameHandler = this.productNameHandler.bind(this)
        this.productDescriptionHandler = this.productDescriptionHandler.bind(this)
        this.productDateHandler = this.productDateHandler.bind(this)
        this.productPriceHandler = this.productPriceHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    productDateHandler(e) {
        this.setState({ productDate: e.target.value })
    }
    productDescriptionHandler(e) {
        this.setState({ productDescription: e.target.value })
    }
    productNameHandler(e) {
        this.setState({ productName: e.target.value })
    }
    productPriceHandler(e) {
        this.setState({ productPrice: e.target.value })
    }

    submitHandler(e) {
        e.preventDefault()
        const productDetails = {
            productName: this.state.productName,
            productDescription: this.state.productDescription,
            productDate: new Date(this.state.productDate),
            productPrice: +this.state.productPrice,
        }
        console.log('productForm', productDetails)
        this.props.onAddNewProduct(productDetails)
        this.setState({
            productName: '',
            productDescription: '',
            productDate: '',
            productPrice: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} >
                <div>
                    <label htmlFor='productName' >Product Name:
                        <input id='productName' type='text' onChange={this.productNameHandler} value={this.state.productName} />
                    </label>
                </div>
                <div>
                    <label htmlFor='productDescription' >Description:
                        <input id='productDescription' type='text' onChange={this.productDescriptionHandler} value={this.state.productDescription} />
                    </label>
                </div>
                <div>
                    <label htmlFor='productDate' >Date:
                        <input id='productDate' type='date'  onChange={this.productDateHandler} value={this.state.productDate} />
                    </label>
                </div>
                <div>
                    <label htmlFor='productPrice' >Price:
                        <input id='productPrice' type='number' min='1000' max='10000' step='100' onChange={this.productPriceHandler} 
                        value={this.state.productPrice} />
                    </label>
                </div>
                <div>
                    <input type='submit' value='Submit' />
                </div>
            </form>
        )
    }
}