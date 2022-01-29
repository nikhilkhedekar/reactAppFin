import { useState } from 'react'

import ProductList from './productlist'
import NewProduct from './newproduct'

const productList = [{
    productID: 1,
    productName: 'PanasonicTV',
    productImpDate: new Date(2019, 0, 1),
    productPrice: 32000
},
{
    productID: 2,
    productName: 'SamsungTV',
    productImpDate: new Date(2020, 3, 1),
    productPrice: 35000
},{
    productID: 3,
    productName: 'SonyTV',
    productImpDate: new Date(2021, 7, 1),
    productPrice: 38000
}]

const FilterChartCSS = () => {
    const [list, setList] = useState(productList);
    const listHandler = newList => {
        setList(prev => 
            [newList , ...prev]
        )
    }
    return(
        <div>
            <NewProduct list={list} listHandler={listHandler} />
            <ProductList list={list} /> 
        </div>
    )
}

export default FilterChartCSS