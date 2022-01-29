import React from 'react'

import NewProductForm from './newProductForm'

const NewProduct = (props) => {
    const newProduct = product => {
        const addNewProduct = {
            id: Math.random().toString(),
            ...product
        }
        console.log(addNewProduct)
        props.addNewProduct(addNewProduct)

    }
    return(
        <div>
            <NewProductForm newProduct={newProduct} />
        </div>
    )
}

export default NewProduct