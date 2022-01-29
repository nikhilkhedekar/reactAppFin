import React, { Component } from 'react'

export default class FilterList extends Component{
    constructor(props){
        super(props)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(e){
        this.props.setFilteredYear(e.target.value)
    }

    render(){
        return(
            <div>
                <label htmlFor='selectYear' >Select Year:
                    <select id='selectYear' onChange={this.onChangeHandler} value={this.props.filteredYear} >
                        <option value='select' > select </option>
                        <option value='2019' > 2019 </option>
                        <option value='2020' > 2020 </option>
                        <option value='2021' > 2021 </option>
                    </select>
                </label>
            </div>
        )
    }
}