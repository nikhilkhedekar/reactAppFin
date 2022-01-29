import { MEALS } from "./DUMMY";

export const FAV_FOOD = 'FAV_FOOD';

export const FOOD_FILTER = 'FOOD_FILTER'

export const favFoodHandler = (id, selectedMeal) => {
    return {
        type: FAV_FOOD,
        mealId: id,
        addToFavourite: selectedMeal,
    }
}

export const foodFilter = (filterSetting) => {
    return {
        type: FOOD_FILTER,
        
        filterSetting: filterSetting,
    }
}

export const initialState = {
    favMeals: [],
    filters: MEALS,
    meals: MEALS,
}

export const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAV_FOOD:
            const existingItemIndex = state.favMeals.findIndex(item => item.id === action.mealId)

            if (existingItemIndex >= 0) {
                const updatedItems = [...state.favMeals]
                updatedItems.splice(existingItemIndex, 1)
                return {
                    ...state,
                    favMeals: updatedItems
                }
            } else {
                return {
                    ...state,
                    favMeals: state.favMeals.concat(action.addToFavourite),
                }
            }

        case FOOD_FILTER:
            const appliedFilters = action.filterSetting
            console.log(appliedFilters)
            const filteredMeal = state.meals.filter(item => {
                if (appliedFilters.isVegan && !item.isVegan) {
                    return false
                }
                if (appliedFilters.isGlutenFree && !item.isGlutenFree) {
                    return false
                }
                if (appliedFilters.isLactoseFree && !item.isLactoseFree) {
                    return false
                }
                if (appliedFilters.isVegetarian && !item.isVegetarian) {
                    return false
                }
                return true
            })
            return {
                ...state,
                filters: filteredMeal
            }
        default: return state;
    }
}