import React, { Component } from 'react'

import ProductDate from './productDate'

export default class ListItem extends Component{
    render(){
        return(
            <div>
                <div>
                    <h3> {this.props.productName} </h3>
                    <span> Description: {this.props.productDescription} </span>
                    <div> Date: <ProductDate date={this.props.productDate} /> </div>
                    <span> Price: {this.props.productPrice} </span>
                </div>
            </div>
        )
    }
}