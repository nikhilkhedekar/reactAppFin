import DeleteButton from './deleteButton'

const ProductList = (props) => {
    const productList = props.productList.map(item => {
        console.log(item.name)
        return(
            <DeleteButton key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price} 
            onDeleteProduct={props.onDeleteProduct} />
        )
    })
    return(
        <div>
            {productList}
        </div>
    )
}

export default ProductList