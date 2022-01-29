const CartItem = (props) => {
    return(
        <div>
            <div>
                <label>Name: <span>{props.name}</span><br /></label>
                <label>Quantity: <span>{props.quantity}</span><br /></label>
                <label>Price: <span>{props.price}</span></label>
            </div>
            <div>
                <button onClick={props.onAdd} > + </button>
                <button onClick={props.removeItem} > - </button>
            </div>
        </div>
    )
}

export default CartItem