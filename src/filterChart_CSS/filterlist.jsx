import './filterlist.css'

const FilterList = (props) => {

    const filterHandler = (e) => {
        props.filterListHandler(e.target.value)
    }
    return (
        <div className='filter' >
            <div className='filter-control' >
                <label> Select Turnover Year </label>
                <select onChange={filterHandler} value={props.filterList} >
                    <option value='select' > Select </option>
                    <option value='2019' > 2019 </option>
                    <option value='2020' > 2020 </option>
                    <option value='2021' > 2021 </option>
                </select>
            </div>
        </div>

    )
}

export default FilterList