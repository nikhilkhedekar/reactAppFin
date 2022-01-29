import React, { Component } from 'react'

import FilterList from './filterList'
import ListItem from './listItem'
import Chart from './chart'

export default class RenderList extends Component{
    constructor(){
        super()
        this.state = {
            filteredYear: '',
           
        }
        this.filterChartHandler = this.filterChartHandler.bind(this)
        
    }
    
    filterChartHandler(filteredYearValue){
        this.setState({ filteredYear: filteredYearValue })
    }

    render(){
        const filteredList = this.props.list.filter(listProduct => {
                return listProduct.productDate.getFullYear().toString() === this.state.filteredYear
            }) 
            
        const renderList = filteredList.map((listItem, i) => (
            <ListItem key={i}
            productName={listItem.productName}
            productDescription={listItem.productDescription}
            productDate={listItem.productDate}
            productPrice={listItem.productPrice}
            />
        ))
        return(
            <div>
                <FilterList filteredYear={this.state.filteredYear} setFilteredYear={this.filterChartHandler} />
                <hr />
                <Chart filteredList={filteredList} />
                <hr />
                <div> {renderList} </div>
            </div>
        )
    }
}