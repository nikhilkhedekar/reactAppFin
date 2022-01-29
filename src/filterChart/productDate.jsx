import React from 'react'

const ProductDate = (props) => {
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const month = props.date.toLocaleString('en-US', {month: 'short'});
    const year = props.date.getFullYear().toString()
    return(
        <div>
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    )
}

export default ProductDate