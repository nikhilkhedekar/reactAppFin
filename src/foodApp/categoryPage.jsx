import React from 'react'
import { Link } from 'react-router-dom'

import { CATEGORIES } from './DUMMY'



//naviagte

const CategoryPage = () => {
    let categoryIds = null;
    const renderCategory = CATEGORIES.map(item => {
        categoryIds = item.id;
        console.log('categoryIds: ' + categoryIds)
        return (
            <div key={item.id} >
                <Link to={`categoryDetailPage/${categoryIds}`}>
                    {item.title}
                </Link>
                <br />
            </div>
        )
    })
    console.log(renderCategory)
    return (
        <div>
            <h3>Categories</h3>
            {renderCategory}
        </div>
    )
}

export default CategoryPage