import React, { useState } from 'react'

import AddButton from './addButtton'

const ProductForm = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }
    const priceHandler = (e) => {
        setPrice(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const newProduct = {
            name: name,
            description: description,
            price: +price,
        }
        props.onAddProduct(newProduct)
        setPrice('');
        setDescription('')
        setName('')
    }
    return(
        <form onSubmit={submitHandler} >
            <label>Name: <input onChange={nameHandler} value={name} /></label>
            <label>Description: <input onChange={descriptionHandler} value={description} /></label>
            <label>Price: <input onChange={priceHandler} value={price} /></label>
            <AddButton />
        </form>
    )
}

export default ProductForm