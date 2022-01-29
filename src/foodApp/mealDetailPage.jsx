import React, { useCallback, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router'
import { V4 as uuidV4 } from 'uuid'

import { favFoodHandler } from './foodReducer'

const MealDetailPage = () => {

    const availableMeals = useSelector(state => state.meals.meals)
    const params = useParams()
    const mealId = params.mealIds
    const selectedMeal = availableMeals.find(item => item.id === mealId)
    console.log(selectedMeal)
    const favMeals = useSelector(state => state.meals.favMeals)
    const favMeal = favMeals.some(meal => meal.id === mealId)
    const dispatch = useDispatch()
    const dispatchFavMeal = useCallback(() => {

        dispatch(favFoodHandler(mealId, selectedMeal))
        console.log(dispatch)
    }, [dispatch, mealId, selectedMeal])
    return (
        <div>
            <div>
                <h3>{selectedMeal.title}</h3>
                <button onClick={dispatchFavMeal} > Add/Remove Favourites</button>
            </div>
            <hr />
            <label>Duration: <span>{selectedMeal.duration}</span></label><br />
            <label>Complexity: <span>{selectedMeal.complexity}</span></label><br />
            <label>Affordability: <span>{selectedMeal.affordability}</span></label><br />
            <label>Ingredients: <span>{selectedMeal.ingredients.map(ingredients => <li key={Math.random()} >{ingredients}</li>)}</span></label><br />
            <label>Steps: <span>{selectedMeal.steps.map(step => <li key={Math.random()} >{step}</li>)}</span></label><br />
        </div>
    )
}

export default MealDetailPage