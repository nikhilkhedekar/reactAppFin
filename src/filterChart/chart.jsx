import React from 'react'
import ChartList from './chartList';
import FilterList from './filterList'

const Chart = (props) => {
    const dataPoints = [{month: 'jan', value: 0},
    {month: 'feb', value: 0},
    {month: 'mar', value: 0},
    {month: 'apr', value: 0},
    {month: 'may', value: 0},
    {month: 'jun', value: 0},
    {month: 'jul', value: 0},
    {month: 'aug', value: 0},
    {month: 'sep', value: 0},
    {month: 'oct', value: 0},
    {month: 'nov', value: 0},
    {month: 'dec', value: 0},]
    for (let obj of props.filterList){
        const getMonth = obj.date.getMonth();
        dataPoints[getMonth].value += obj.price; 
    }
    
    return(
        <div>
            <ChartList dataPoints={dataPoints} />
        </div>
    )
}

export default Chart