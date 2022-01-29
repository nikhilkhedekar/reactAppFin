import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { V4 as uuidV4 } from 'uuid'

import MealItem from './mealItem'

const MealList = (props) => {
    const params = useParams();
    const catId = params.categoryIds;
    return (
        <div>
            {props.listData.map(item => (
                
                    <div key={Math.random()} >
                        <h3>{item.title}</h3><br />
                        <label>Duration: <span>{item.duration}</span></label><br />
                        <label>Complexity: <span>{item.complexity}</span></label><br />
                        <label>Affordability: <span>{item.affordability}</span></label><br />
                        <div><Link to={`/mealDetailPage/${catId}/${item.id}`} >Meal Details</Link></div>
                    </div>
            ))}
        </div>
    )
}

export default MealList