import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { foodFilter } from "./foodReducer"

//localstorage to store filtered state
<div class="form-check form-switch">

    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>

const FilterPage = () => {
    const [vegan, setVegan] = useState(false)
    const [lactoseFree, setLactoseFree] = useState(false)
    const [vegetarian, setVegetarian] = useState(false)
    const [glutenFree, setGlutenFree] = useState(false)
    const dispatch = useDispatch()
    const saveFilterSetting = useCallback(() => {
        const appliedFilters = {
            isVegan: vegan,
            isLactoseFree: lactoseFree,
            isGlutenFree: glutenFree,
            isVegetarian: vegetarian,
        }
        dispatch(foodFilter(appliedFilters))

    }, [vegan, lactoseFree, glutenFree, vegetarian])
    console.log(vegan)
    console.log(lactoseFree)
    console.log(vegetarian)
    console.log(glutenFree)
    const veganHandler = () => {
        setVegan(!vegan);
        let veganFood;
        if (vegan === true) {
            veganFood = document.getElementById('vegan').style.color = 'green';
            return veganFood
        } else {
            veganFood = document.getElementById('vegan').style.color = 'red';
        }
    }
    const lactoseFreeHandler = () => {
        setLactoseFree(!lactoseFree);
        let lactoseFreeFood;
        if (lactoseFree === true) {
            lactoseFreeFood = document.getElementById('lactoseFree').style.color = 'green';
            return lactoseFreeFood
        } else {
            lactoseFreeFood = document.getElementById('lactoseFree').style.color = 'red';
        }
    }

    const glutenFreeHandler = () => {
        setGlutenFree(!glutenFree);
        let glutenFreeFood;
        if (glutenFree === true) {
            glutenFreeFood = document.getElementById('glutenFree').style.color = 'green';
            return glutenFreeFood
        } else {
            glutenFreeFood = document.getElementById('glutenFree').style.color = 'red';
        }
    }
    const vegetarianHandler = () => {
        setVegetarian(!vegetarian);
        let vegetarianFood;
        if (vegetarian === true) {
            vegetarianFood = document.getElementById('vegetarian').style.color = 'green';
            return vegetarianFood
        } else {
            vegetarianFood = document.getElementById('vegetarian').style.color = 'red';
        }
    }
    return (
        <div>
            <h3>Filters</h3>
            
        
            <button id='vegan' onClick={veganHandler} style={{color: 'gray'}} >Vegan</button>
            <button id='lactoseFree' style={{color: 'gray'}} onClick={lactoseFreeHandler} >LactoseFree</button>
            
            <button id='glutenFree' style={{color: 'gray'}} onClick={glutenFreeHandler} >GlutenFree</button>
            <button id='vegetarian' style={{color: 'gray'}} onClick={vegetarianHandler} >Vegetarian</button>

            <button onClick={saveFilterSetting} > Save Filter Settings </button>
        </div>
    )
}

export default FilterPage