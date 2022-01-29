
const FavouriteMealList = (props) => {
    return (
        <div>
            {props.listData.map(item => (

                <div key={Math.random()} >
                    <h3>{item.title}</h3><br />
                    <label>Duration: <span>{item.duration}</span></label><br />
                    <label>Complexity: <span>{item.complexity}</span></label><br />
                    <label>Affordability: <span>{item.affordability}</span></label><br />
                    <label>Ingredients: <span>{item.ingredients.map(ingredients => <li key={Math.random()} >{ingredients}</li>)}</span></label><br />
                    <label>Steps: <span>{item.steps.map(step => <li key={Math.random()} >{step}</li>)}</span></label><br />
                </div>
            ))}
        </div>
    )
}

export default FavouriteMealList