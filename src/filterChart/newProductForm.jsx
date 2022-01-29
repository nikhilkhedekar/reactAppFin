import React, { useState } from 'react'

const NewProductForm = (props) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState();
    const [date, setDate] = useState('');
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const priceHandler = (e) => {
        setPrice(e.target.value)
    }
    const dateHandler = (e) => {
        setDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newProduct = {
            name: name,
            price: +price,
            date: new Date(date)
        }
        console.log(newProduct)
        props.newProduct(newProduct)
       
    }
    return(
        <form onSubmit={submitHandler} >
            <label>Add Product: <hr />
            <label>Name:
            <input onChange={nameHandler} value={name} type='text' placeholder='Name' /></label><br />
            <label>Price: 
            <input onChange={priceHandler} value={price} type='number' min='500' max='7000' step='100' /></label><br />
            <label>Date:
            <input onChange={dateHandler} value={date} type='date'  min='1018-0-1' max='2021-12-31' /></label><br />
            <button>Add Product</button>
            <hr />
            
            </label>
        </form>
    )
}

export default NewProductForm