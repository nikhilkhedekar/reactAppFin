import { useState } from 'react'

import './productform.css'

const ProductForm = (props) => {
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [price, setPrice] = useState();

    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const dateHandler = (e) => {
        setDate(e.target.value)
    }
    const priceHandler = (e) => {
        setPrice(e.target.value)
    }
    const formSubmitHandler = (e) => {
        e.preventDefault(); 
        const product = {
            productName: name,
            productImpDate: new Date(date),
            productPrice: +price,
        }
        props.newProduct(product);
        setName('')
        setDate('')
        setPrice('')
    }
    return(
        <form onSubmit={formSubmitHandler}>
            <div className='new-items' >
            <div className='new-item' >
                <label>Name: </label>
                <input type='text' onChange={nameHandler} value={name} />
            </div>
            <div className='new-item' >
                <label>Date:</label>
                <input type='date' min='2019-1-1' max='2021-5-1' onChange={dateHandler} value={date} />
            </div>
            <div className='new-item' >
                <label>Price:</label>
                <input type='number' step='5000' min='12000' onChange={priceHandler} value={price} />
            </div>
            <div className='new-item-actions' >
                <input type='submit' value='submit' />
            </div>
            </div>
        </form>
    )
}

export default ProductForm