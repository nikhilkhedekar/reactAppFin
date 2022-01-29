import React, { Component, } from 'react'
import { useParams } from 'react-router-dom'

import RenderMealList from './renderMealList'

const MealList = (props) => {
    const catId = useParams().categoryIds;
    const meaList = props.filteredMealList.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    return (
        <div>
            <RenderMealList listData={meaList} />
        </div>
    )
}

export default MealList

// export default class MealList extends Component {
//     constructor(props) {
//         super(props)
//         //this.meaList = this.props.filteredMealList.filter(meal => meal.categoryIds.indexOf(this.props.params.categoryIds) >= 0 );
//     }

//     render() {
//         const catId = this.props.params.categoryIds;
//         console.log('categoryIds', catId)
//         return (
//             <div>
//                 {/**<RenderMealList listData={this.state.meaList} /> */}
//             </div>
//         )
//     }
// }