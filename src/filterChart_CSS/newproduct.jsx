import ProductForm from './productform'
import './newproduct.css'

const NewProduct = (props) => {
    const newProduct = item => {
        const product = {
            productID: Math.ceil(Math.random() * 10) + 1,
            ...item,
        }
        console.log(product)
        props.listHandler(product)
    }
    
    return(
        <div className='new-item' >
           <ProductForm newProduct={newProduct} />
        </div>
    )
}

export default NewProduct