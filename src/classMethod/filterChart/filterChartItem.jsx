import React, {Component} from 'react'

export default class FilterChartItem extends Component{
    render(){
        let progress = null
        if(this.props.maxValue > 0){
            progress = Math.round((this.props.value/this.props.maxValue) * 100)
        }
        console.log(progress)
        return(
            <div>
                <div>
                    <progress max='100' min='0' value={progress} > {this.props.month} </progress>
                </div>
            </div>
        )
    }
}