import React, { Component, Fragment } from 'react'
import { combineReducers, createStore } from 'redux'
import { foodReducer } from './foodReducer'
import { Provider } from 'react-redux'

import MealNav from './mealNav'
import { store } from './foodReducer'

export default class ClassFoodApp extends Component {

    render() {
        return (
            <Fragment>
                <h2> Food App </h2>
                <Provider store={store} >
                    <MealNav />
                </Provider>
            </Fragment>

        )
    }
}