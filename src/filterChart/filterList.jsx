import React from 'react'

const FilterList = (props) => {
    const filterHandler = (e) => {
        props.filterHandler(e.target.value);
    }
    return (
        <div>
            <label>Select Year: 
                <select onChange={filterHandler} value={props.filterYear} >
                    <option value='select' > Select </option>
                    <option value='2018' > 2018 </option>
                    <option value='2019' > 2019 </option>
                    <option value='2020' > 2020 </option>
                    <option value='2021' > 2021 </option>
                </select>
            </label>
        </div>
    )
}

export default FilterList