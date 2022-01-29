import ProductDate from './date'
import Card from './card'
import './product.css'

const Product = (props) => {

    return (
        <li>
            <Card className='item' >
                <div><ProductDate date={props.date} /></div>
                <div className='item-description' >
                    <h2>{props.name}</h2>
                    <span className='item-price' >{props.price}</span>
                </div>
            </Card>
        </li>
    )
}

export default Product