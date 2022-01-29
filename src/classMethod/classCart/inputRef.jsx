import React, { Component, createRef } from 'react'

import Input from './input'

export default class InputRef extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validateInput: true,
            callInputRef: createRef(),
        }

        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler = (e) => {
        e.preventDefault()
        const inputValue = this.state.callInputRef.current.value;
        const productQuantity = +inputValue;
        if (productQuantity < 1 || productQuantity > 5) {
            this.setState({ validateInput: false })
        }
        this.props.getQuantity(productQuantity)
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.submitHandler} >

                        {/**
                         * <div> <Input ref={this.state.callInputRef} id={this.props.id} input={{
                            label: 'Quantity',
                            min: '1',
                            max: '5',
                            step: '1',
                            defaultValue: '1'
                        }} />
                        </div>
                         */}
                         <label htmlFor={this.props.id} >Quantity: 
                        <input ref={this.state.callInputRef} id={this.props.id} min='1' max='5' step='1' defaultValue='1' type='number' />
                         </label>
                        <button> Add </button>
                    </form>
                </div>
            </div>
        )
    }
}