import { useEffect, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { axios } from 'axios'

const EditProduct = (props) => {
    const history = useHistory();
    const params = useParams();
    const productNameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    // const pName = useEffect( async () => {
    //     await axios.get(`https://react-fetch-req-default-rtdb.firebaseio.com/fin/-MmvP49l2D-dd3GwszIs/${params.productKey}/productName`);
    // }, [])

    console.log('product key', params.productKey)

    const onCancel = () => {
        history.push('/productsPage')
    }

    const onSave = (e) => {
        e.preventDefault();
        
        const finProducts = {
            id: Math.random(),
            productName: productNameRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
        }
        console.log(finProducts)
        const response = axios.put(`https://react-fetch-req-default-rtdb.firebaseio.com/fin/-Mn5opT6_He6tPPlW7pJ/${params.productKey}.json`, finProducts)
        console.log('response [put]', response)
    }
    return (
        <div>
            <h3>Edit Product Id : {params.productKey} </h3><br /><br />
            <form onSubmit={onSave} >
                <label htmlFor='name' >Name:
                    <input id='name' type='text' ref={productNameRef} />
                </label><br /><br />
                <label htmlFor='description' >Description:
                    <input id='description' type='text' ref={descriptionRef} />
                </label><br /><br />
                <label htmlFor='price' >Price:
                    <input id='price' type='number' ref={priceRef} />
                </label><br /><br /><br />
                <div>
                    <button>Save</button>
                    <button onClick={onCancel} >Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct