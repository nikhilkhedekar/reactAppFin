import { useParams, Link } from "react-router-dom"


const RenderMealListItem = (props) => {
    const catId = useParams().categoryIds;
    return(
        <div>
            <div key={props.id} >
                <div> <h3> {props.title} </h3> </div>
                <div>Duration: {props.duration} </div>
                <div>Complexity: {props.complexity} </div>
                <div>Affordability: {props.affordability} </div>
                <Link to={`/mealDetail/${catId}/${props.id}`} > More Details </Link>
            </div>
        </div>
    )
}

export default RenderMealListItem