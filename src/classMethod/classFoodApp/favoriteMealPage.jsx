import React, { Component } from 'react'
import RenderFavoriteList from './renderFavoriteList'

export default class FavoriteMealPage extends Component{
    constructor(props){
        super(props)
        this.renderFavoriteList = this.props.favoriteList
    }
    render(){
        return(
            <div>
                <h2>Faorite</h2>
                <div> <RenderFavoriteList renderFavoriteList={this.renderFavoriteList} /> </div>
            </div>
        )
    }
}