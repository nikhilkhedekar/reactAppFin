import axios from 'axios'

const DeleteProduct = (props) => {
    const onClickHandler = () => {
        
        const response = axios.delete(`https://react-fetch-req-default-rtdb.firebaseio.com/fin/-Mn5opT6_He6tPPlW7pJ/${props.productKey}.json`)
        console.log('product key', props.productKey)
        console.log('product id', props.id)
        console.log('delete product', response)
    }
    return(
        <div>
            <button onClick={onClickHandler} >Delete</button>
        </div>
    )
}

export default DeleteProduct