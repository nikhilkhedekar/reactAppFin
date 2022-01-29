import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom' 
import React from 'react'

import MealList from './mealList'

const CategoryDetailPage = () => {
    const params = useParams();
    const catId = params.categoryIds;
    console.log('catId: ' + catId)
    
    const availableMeals = useSelector(state => state.meals.filters)
    const displayMeals = availableMeals.filter(item => item.categoryIds.indexOf(catId) >= 0)
    console.log( availableMeals)
    console.log(displayMeals)
    return(
        <div>
            <h3>Meals</h3>
            <span>{catId}</span>
            
            <MealList listData={displayMeals} catId={catId} />
        </div>
    )
}

export default CategoryDetailPage