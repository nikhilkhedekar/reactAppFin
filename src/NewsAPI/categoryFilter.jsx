import React from 'react'

const CategoryFilter = (props) => {
    return(
        <div>
            <label>Select Category: 
                <select onChange={(e) => {props.setCategoryParam(e.target.value)}} value={props.categoryParam} >
                    <option value={'business'} >Business</option>
                    <option value={'entertainment'} >Entertainment</option>
                    <option value={'general'} >General</option>
                    <option value={'health'} >Health</option>
                    <option value={'science'} >Science</option>
                    <option value={'sports'} >Sports</option>
                    <option value={'technology '} >Technology</option>
                </select>
            </label>
        </div>
    )
}

export default CategoryFilter