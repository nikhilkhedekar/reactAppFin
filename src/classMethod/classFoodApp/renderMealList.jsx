import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import RenderMealListItem from './renderMealListItem';

const RenderMealList = (props) => {

    const renderMealList = props.listData.map(item => {

        return (
            <RenderMealListItem
                key={item.id}
                id={item.id}
                title={item.title}
                duration={item.duration}
                complexity={item.complexity}
                affordability={item.affordability}
            />
        )
    })
    return (
        <div>
            {renderMealList}
        </div>
    )
}

export default RenderMealList

// export default class RenderMealList extends Component{
//     constructor(props){
//         super(props)

//         this.renderMealList = this.props.listData.map(item => {
//             return(
//                 <div key={item.id} >
//                     <div> <h3> {item.title} </h3> </div>
//                     <div>Duration: {item.duration} </div>
//                     <div>Complexity: {item.complexity} </div>
//                     <div>Affordability: {item.affordability} </div>

//                 </div>
//             )
//         })

//     }
//     render(){
//         return(
//             <div>
//                 {this.renderMealList}
//             </div>
//         )
//     }
// }