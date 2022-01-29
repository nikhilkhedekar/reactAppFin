import React, { Component, useCallback } from 'react'

export default class FilterPage extends Component{
    constructor(){
        super()
        this.state = {
            isVegan: false,
            isVegetarian: false,
            isLactoseFree: false,
            isGlutenFree: false,
        }
    }

    dispatchFilters = () => {
        const filterSettings = {
            isVegan: this.state.isVegan,
            isVegetarian: this.state.isVegetarian,
            isLactoseFree: this.state.isLactoseFree,
            isGlutenFree: this.state.isGlutenFree,
        }
        this.props.setFilter(filterSettings)
    }

    veganFilterHandler = () => {
        this.setState({ isVegan: !this.state.isVegan }) 
        console.log(this.state.isVegan)  
        if(this.state.isVegan){
            return document.getElementById('vegan').style.color = 'green'
        }else{
            return document.getElementById('vegan').style.color = 'red'
        }
    }

    vegetarianFilterHandler = () => {
        this.setState({ isVegetarian: !this.state.isVegetarian }) 
        console.log(this.state.isVegetarian)  
        if(this.state.isVegetarian){
            return document.getElementById('vegetarian').style.color = 'green'
        }else{
            return document.getElementById('vegetarian').style.color = 'red'
        }
    }

    lactoseFreeFilterHandler = () => {
        this.setState({ isLactoseFree: !this.state.isLactoseFree }) 
        console.log(this.state.isLactoseFree)  
        if(this.state.isLactoseFree){
            return document.getElementById('lactoseFree').style.color = 'green'
        }else{
            return document.getElementById('lactoseFree').style.color = 'red'
        }
    }

    glutenFreeFilterHandler = () => {
        this.setState({ isGlutenFree: !this.state.isGlutenFree }) 
        console.log(this.state.isGlutenFree)  
        if(this.state.isGlutenFree){
            return document.getElementById('glutenFree').style.color = 'green'
        }else{
            return document.getElementById('glutenFree').style.color = 'red'
        }
    }

    render(){
        return(
            <div>
                <h2> Filter </h2>
                <button id='vegan' onClick={this.veganFilterHandler.bind(this)} > Vegan </button>
                <button id='vegetarian' onClick={this.vegetarianFilterHandler.bind(this)} > Vegetarian </button>
                <button id='lactoseFree' onClick={this.lactoseFreeFilterHandler.bind(this)} > Lacose-Free </button>
                <button id='glutenFree' onClick={this.glutenFreeFilterHandler.bind(this)} > Gluten-Free </button>
                <button onClick={this.dispatchFilters.bind(this)} > Save Filter Settings </button>
            </div>
        )
    }
}