import React from 'react'
import { Route, NavLink, Switch, BrowserRouter, useHistory } from 'react-router-dom'

import CategoryPage from './categoryPage'
import FilterPage from './filterPage'
import FavouritesPage from './favouritesPage'
import CategoryDetailPage from './categoryDetailPage'
import MealDetailPage from './mealDetailPage'

const Nav = () => {
    
    return (
        <BrowserRouter history={useHistory()} >
            <NavLink to={'/'} exact >
                Category Page
            </NavLink>

            <NavLink to='/favouritesPage' >
                favourites
            </NavLink>
            <NavLink to='/filterPage' >
                filters
            </NavLink>
            <Switch>
                <Route path='/' exact >
                    <CategoryPage />
                </Route>

                <Route path='/favouritesPage' >
                    <FavouritesPage />
                </Route>
                <Route path='/filterPage' >
                    <FilterPage />
                </Route>
                <Route path={'/categoryDetailPage/:categoryIds'} >
                    <CategoryDetailPage />
                </Route>
                <Route path='/mealDetailPage/:categoryIds/:mealIds' >
                    <MealDetailPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Nav