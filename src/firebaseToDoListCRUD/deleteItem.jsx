const DeleteItem = (props) => {
    const deleteItemHandler = async () => {
        const response = await fetch(`https://{firebaseDB}.firebaseio.com/data/${props.listId}/mainList/list/${props.itemId}.json`, {
            method: 'DELETE',
        })
        const responseData = response.json()
        console.log(responseData)
    }
    return(
        <button onClick={deleteItemHandler} > Delete Item </button>
    )
}

export default DeleteItem