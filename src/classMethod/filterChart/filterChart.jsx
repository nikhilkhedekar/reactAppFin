import React, { Component } from 'react'

import FilterChartItem from './filterChartItem'

export default class FilterChart extends Component{
    render(){
        const chartValues = this.props.chartValues.map(product => product.value)
        const maxValue = Math.max(...chartValues)
        console.log('maxValue', maxValue)
        const renderChart = this.props.chartValues.map((product, i) => {
            return(
                <FilterChartItem key={i}
                month={product.month}
                value={product.value}
                maxValue={maxValue}
                />
            )
        })

        return(
            <div>
                <div> {renderChart} </div>
            </div>
        )
    }
}