import { combineReducers, createStore } from "redux"
import { MEALS } from "./DUMMY"


export const ADDFAVORITE = 'ADDFAVORITE'
export const FILTERMEAL = 'FILTERMEAL'

export const addFovoriteDispatcher = (id, favoriteMeal) => {
    return {
        type: ADDFAVORITE,
        mealId: id,
        addToFavorite: favoriteMeal,
    }
}

export const filterSettings = (settings) => {
    return {
        type: FILTERMEAL,
        filters: settings
    }
}

export const initialState = {
    meals: MEALS,
    filters: MEALS,
    favorite: [],
}

export const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDFAVORITE:
            const existingItemIndex = state.favorite.indexOf(item => item.id === action.mealId)
            if (existingItemIndex) {
                const updatedFavorite = [...state.favorite]
                updatedFavorite.splice(existingItemIndex, 1)
                return {
                    ...state,
                    favorite: updatedFavorite,
                }
            } else {

                return {
                    ...state,
                    favorite: state.favorite.concat(action.addToFavorite),
                }
            }
        case FILTERMEAL:
            const setFilters = action.filters
            const updatedFilters = state.meals.filter(item => {
                if (!item.isGlutenFree && setFilters.isGlutenFree) {
                    return false
                }
                if (!item.isLactoseFree && setFilters.isLactoseFree) {
                    return false
                }
                if (!item.isVegan && setFilters.isVegan) {
                    return false
                }
                if (!item.isVegetarian && setFilters.isVegetarian) {
                    return false
                }
                return true
            })
            return {
                ...state,
                filters: updatedFilters
            }
        default: return state
    }
}

export const rootReducer = combineReducers({
    meals: foodReducer,
})

export const store = createStore(rootReducer)