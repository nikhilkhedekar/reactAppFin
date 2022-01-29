import { useState } from 'react'

import Product from './product'
import FilterList from './filterlist'
import ItemChart from './itemchart'
import Card from './card'
import './productlist.css'

const ProductList = (props) => {
    const [filterList, setFilterList] = useState('');
    const filterListHandler = filterYear => {
        setFilterList(filterYear)
    }
    console.log(filterList)
    const filterData = props.list.filter((newList) => {
        return newList.productImpDate.getFullYear().toString() === filterList
    })

    return (
        <div>
            <Card className='items' >
            <div>
                <FilterList filterList={filterList} filterListHandler={filterListHandler} />
            </div>
            <div>
                <ItemChart filterData={filterData} />
            </div>
            <div>
                {(filterList.length === 0)? <h2 className='items.list__fallback' > No Items Found </h2> : <div className='items.list' >{filterData.map((newList) => {
                    return (
                        <Product id={newList.productID}
                            name={newList.productName}
                            date={newList.productImpDate}
                            price={newList.productPrice} />
                    )
                })}</div>}
            </div>
            </Card>
            
        </div>
    )
}

export default ProductList