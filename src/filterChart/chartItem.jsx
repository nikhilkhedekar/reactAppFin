import React from 'react'

const ChartItem = (props) => {
    let value = null;
    if (props.maxValue > 0){
        value = Math.round((props.value/props.maxValue) * 100)
    }
    return(
        <div key={props.month} >
            <progress min='0' max='100' value={value} > {props.month} </progress>
        </div>
    )
}

export default ChartItem