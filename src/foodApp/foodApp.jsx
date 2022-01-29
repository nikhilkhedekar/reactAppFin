import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { foodReducer } from './foodReducer'
import Nav from './nav'
import Header from './header'

const FoodApp = () => {
    const rootReducer = combineReducers({
        meals: foodReducer
    })
    const store = createStore(rootReducer)

    return(
        <div>
            <Provider store={store} >
                <Header />
            <Nav />
            </Provider>    
        </div>
    )
}

export default FoodApp