import React from 'react'

import ChartItem from './chartItem';

const ChartList = (props) => {
    const value = props.dataPoints.map(item => item.value)
    console.log(value)
    const maxValue = Math.max(...value);
    console.log(maxValue)
    return(
        <div>
            {props.dataPoints.map(item => [
                <ChartItem key={item.month}
                maxValue={maxValue} 
                
                value={item.value}
                month={item.month} />
            ])}
            
        </div>
    )
}

export default ChartList