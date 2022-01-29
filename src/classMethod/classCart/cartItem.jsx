const CartItem = (props) => {
    return (
        <div>
            <h3> {props.productName} </h3>
            <span>Product Price:  {props.productPrice} </span><br />
            <span>Product Quantity: {props.productQuantity} </span><br />
            <div>
            <button onClick={props.incProductCount}> + </button>
            <button onClick={props.decProductCount} > - </button>
            </div>
        </div>
    )
}

export default CartItem