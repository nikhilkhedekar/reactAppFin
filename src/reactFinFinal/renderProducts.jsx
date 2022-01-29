import { Link, useHistory, } from 'react-router-dom'

import DeleteProduct from "./deleteProduct"
import EditProduct from "./editProduct"

const RenderProducts = (props) => {
    const history = useHistory();
    const onEdit = () => {
        history.push(`/editProduct/${props.productKey}`)
    }
    return(
        <div>
            <div>
            <strong> {props.productName} </strong>
            <br /><br />
            <p>Specificatons: {props.description} </p><br />
            <i>Price: {props.price} </i><br />
            <DeleteProduct productKey={props.productKey} id={props.id} />
            <button onClick={onEdit} >Edit</button>
            </div><br /><br />
        </div>
    )
}

export default RenderProducts