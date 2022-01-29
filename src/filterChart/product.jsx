import React, {useState} from 'react'
import NewProduct from './newProduct'

import ProductList from './productList'
import FilterList from './filterList'
import Chart from './chart'

const DUMMY = [{
    id: Math.random().toString(),
    name: 'Nike',
    price: 1000,
    date: new Date(2021, 8, 13),
},{
    id: Math.random().toString(),
    name: 'Puma',
    price: 1000,
    date: new Date(2020, 5, 13),
},{
    id: Math.random().toString(),
    name: 'Adidas',
    price: 1000,
    date: new Date(2019, 3, 13),
},]

const Product = () => {
    const [list, setList] = useState(DUMMY);
    const [filterYear, setFIlterYear] = useState('select');
    
    const addNewProduct = product => {
        setList(prevList => {
            const oldList = [...prevList];
            const newList = product;
            oldList.unshift(newList);
            return oldList;
        })
    }
    const filterHandler = year => {
        setFIlterYear(year)
    }
    const filterList = list.filter(item => {
        return item.date.getFullYear().toString() === filterYear;
    })
    const renderList = filterList.map(item => {
        return(
            <ProductList key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            date={item.date}
            
             />
        )
    })
    
    return(
        <div>
            <NewProduct addNewProduct={addNewProduct} />
            <Chart filterList={filterList} />
            <FilterList filterHandler={filterHandler} filterYear={filterYear} />
            {renderList   }
        </div>
    )
}

export default Product