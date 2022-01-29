import { useSelector, useDispatch } from "react-redux"
import { useCallback } from 'react'
import { useParams } from 'react-router'

import FavouriteMealList from "./favouriteMealList"

const FavouritesPage = () => {
    const favMealList = useSelector(state => state.meals.favMeals)
    console.log(favMealList)
    return(
        <div>
            <h3>Favourite Meals</h3>
            <FavouriteMealList listData={favMealList}  />
        </div>
    )
}

export default FavouritesPage