import { Component, useEffect, useState } from 'react'
import axios from 'axios'
import RenderProducts from './renderProducts';

const ProductsPage = () => {
    const [products, setProducts] = useState();
    useEffect(async () => {
        const response = await axios.get('https://react-fetch-req-default-rtdb.firebaseio.com/fin/-Mn5opT6_He6tPPlW7pJ.json')
        const responseData = response.data;
        console.log('responseData', responseData)
        const formatData = [];
        for (let key in responseData) {
            formatData.push({
                productKey: key,
                id: responseData[key].id,
                productName: responseData[key].productName,
                description: responseData[key].description,
                price: responseData[key].price,
            })
        }
        console.log('formatData', formatData)
        const renderProducts = formatData.map((item) => {
            return (
                <RenderProducts key={item.id}
                productKey={item.productKey}
                id={item.id}
                productName={item.productName}
                description={item.description}
                price={item.price}
                />
            )
        })
        setProducts(renderProducts)
    }, [])
    return (
        <div>
            <div>{products}</div>
        </div>
    )
}

export default ProductsPage

// export default class ProductsPage extends Component{
//     constructor() {
//         super()

//     }
//     render(){
//         return(
//             <div>
//                 Products page
//             </div>
//         )
//     }
// }