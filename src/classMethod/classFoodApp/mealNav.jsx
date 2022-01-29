import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom'

import FavoriteMealPage from './favoriteMealPage'
import FilterPage from './filterPage'
import { addFovoriteDispatcher, filterSettings } from './foodReducer'
import MealCategoryPage from './mealCategoryPage'
import MealDetail from './mealDetail'
import MealList from './mealList'

class MealNav extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavLink to='/' exact> Meal Category </NavLink>
                <NavLink to='/favoriteMealPage' > Favorite Meal </NavLink>
                <NavLink to='/filterPage' > Filters </NavLink>
                <Switch>
                    <Route path='/' exact>
                        <MealCategoryPage />
                    </Route>
                    <Route path='/favoriteMealPage' >
                        <FavoriteMealPage favoriteList={this.props.favorite} />
                    </Route>
                    <Route path='/filterPage' >
                        <FilterPage setFilter={this.props.setFilter} />
                    </Route>
                    <Route path='/mealList/:categoryIds' >
                        <MealList filteredMealList={this.props.filters} />
                    </Route>
                    <Route path='/mealDetail/:categoryIds/:mealIds' >
                        <MealDetail addFavorite={this.props.addFavorite} mealList={this.props.meals} favoriteList={this.props.favorite} />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    console.log('meals', state.meals.meals)
    console.log('filters', state.meals.filters)
    console.log('favorite', state.meals.favorite)
    return{
        meals: state.meals.meals, 
        filters: state.meals.filters,
        favorite: state.meals.favorite,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setFilter: (settings) => {
            dispatch(filterSettings(settings))
        },
        addFavorite: (id, favoriteMeal) => {
            dispatch(addFovoriteDispatcher(id, favoriteMeal))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealNav)