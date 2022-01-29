import React from 'react'

const DeleteButton = (props) => {
    const deleteProduct = () => {
        props.onDeleteProduct(props.id);
    }
    return(
        <div>
            <ul>
                <label>Name: <li>{props.name}</li></label>
                <label>Description: <li>{props.description}</li></label>
                <label>Price: <li>{props.price}</li></label>
                <button onClick={deleteProduct} > Delete Product </button>
            </ul>
        </div>
    )
   
}

export default DeleteButton