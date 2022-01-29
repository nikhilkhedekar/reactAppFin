import React from 'react'

const MealItem = (props) => {
    const setMealIds = () => {
        props.getMealIds(props.id)
    }
    return (
        <div>
            <div onClick={setMealIds} >
                <div>{props.children}</div>
                
            </div><br />
        </div>
    )
}

export default MealItem