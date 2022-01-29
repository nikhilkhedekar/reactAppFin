import { useCallback, } from "react"
import {  useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

import { addFovoriteDispatcher } from "./foodReducer"


const MealDetail = (props) => {
    const mealId = useParams().mealIds
    console.log('mealId', mealId)
    const selectedMeal = props.mealList.find(meal => meal.id === mealId)
    console.log('selectedMeal', selectedMeal)
     
    /**
     * const availableMeals = useSelector(state => state.meals.meals)
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)
    console.log(selectedMeal)
     */
    
 
    
    const dispatchFavoriteMeal = useCallback(() => {
        props.addFavorite(mealId, selectedMeal)
    }, [props.addFavorite, mealId, selectedMeal, ])
   
    return(
        
        <div>
           <h3> {selectedMeal.title} </h3>
            <button onClick={dispatchFavoriteMeal} > Add/Remove Favorite </button><br />
            <span>Duration: {selectedMeal.duration} </span><br />
            <span>Complexity: {selectedMeal.complexity} </span><br />
            <span>Affordability: {selectedMeal.affordability} </span><br />
            <div>Ingredients: {selectedMeal.ingredients.map((ingredient, i) => ( <ol key={i} > <li> {ingredient} </li> </ol> ))} </div>
            <div>Steps to Follow: {selectedMeal.steps.map((step, i) => ( <ol key={i} > <li> {step} </li> </ol> ))} </div> 
        </div>
         
    )
}

export default MealDetail

// import React, { Component } from 'react'

// export default class MealDetail extends Component{
//     render(){
//         return(
//             <div>
                
//             </div>
//         )
//     }

// }