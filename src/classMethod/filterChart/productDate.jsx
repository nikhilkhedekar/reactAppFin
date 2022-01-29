import React, { Component } from 'react'

export default class ProductDate extends Component{
    
    render(){
        return(
            <div>
                <div>
                    <span> {this.props.date.toLocaleString('en-US', {day: '2-digit'})} </span>
                    <span> {this.props.date.toLocaleString('en-US', {month: 'short'})} </span>
                    <span> {this.props.date.getFullYear().toString()} </span>
                </div>
            </div>
        )
    }
}