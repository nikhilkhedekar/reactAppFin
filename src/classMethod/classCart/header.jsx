import React, { Component } from 'react'

export default class Header extends Component{
    render(){
        return(
            <div>
                <h1> React Cart App </h1>
                <button onClick={this.props.showCart} > Cart </button>
            </div>
        )
    }
}