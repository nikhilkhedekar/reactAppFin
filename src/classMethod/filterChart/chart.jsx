import React,{ Component } from 'react'

import FilterChart from './filterChart'

export default class Chart extends Component{
    render(){
        const chartValues = [
            {month: 'Jan', value: 0},
            {month: 'Feb', value: 0},
            {month: 'Mar', value: 0},
            {month: 'Apr', value: 0},
            {month: 'May', value: 0},
            {month: 'Jun', value: 0},
            {month: 'Jul', value: 0},
            {month: 'Aug', value: 0},
            {month: 'Sep', value: 0},
            {month: 'Oct', value: 0},
            {month: 'Nov', value: 0},
            {month: 'Dec', value: 0},
        ]
        for(let product of this.props.filteredList){
            const getMonth = product.productDate.getMonth()
            chartValues[getMonth].value += product.productPrice
        }
        console.log('chartValues', chartValues)
        return(
            <div>
                <FilterChart chartValues={chartValues} />
            </div>
        )
    }
} 