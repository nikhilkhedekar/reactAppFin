import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { CATEGORIES } from './DUMMY'

export default class MealCategoryPage extends Component{
    constructor(){
        super()
        this.mealCategoryList = CATEGORIES.map(category => {
            return(
                <div key={category.id} > 
                    <Link to={`/mealList/${category.id}`} >{category.title} </Link>
                </div>
                
            )
        })
    }


    render(){
        
        return(
            <div>
                <h2> Meal Categories </h2>
                {this.mealCategoryList}
            </div>
        )
    }
}
