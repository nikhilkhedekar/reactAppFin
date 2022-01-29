import React, { useState, useRef } from 'react'

import Input from './input'

const InputForm = (props) => {
    const quantityRef = useRef()
    const [validQuantity, setValidQuantity] = useState(true)
    const submitHandler = (e) => {
        e.preventDefault()
        const enteredQuantity = quantityRef.current.value;
        const quantity = +enteredQuantity;
        if(quantity < 1 || quantity > 5){
            setValidQuantity(false);
            return 
        }
        props.addItemToCart(quantity)
    }
    return(
        <form onSubmit={submitHandler} >
            <Input 
            label='quantity'
            ref={quantityRef}
            input={{
                id: props.id,
                min: '1',
                max: '5',
                defaultValue: '1',
                step: '1',
                type: 'number'
            }}     />
            <button>Add Item</button>
        </form>
    )
}

export default InputForm