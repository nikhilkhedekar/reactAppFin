import React, { useState } from 'react'

import ProductForm from './productForm' 
import ProductList from './productList'

const Product = () => {
    const [productList, setProductList] = useState([]);
    const onAddProduct = newProduct => {
        setProductList(prevList => {
            const oldList = [...prevList];
            const newProductAdd = {id: Math.random(), ...newProduct};
            oldList.push(newProductAdd);
            return oldList;
        })
    }
    const onDeleteProduct = id => {
        setProductList(prevList => {
            return prevList.filter(item => item.id !== id);
        })
    }
    return(
        <div>
            <ProductForm onAddProduct={onAddProduct} />
            <ProductList productList={productList} onDeleteProduct={onDeleteProduct} />
        </div>
    )
}

export default Product