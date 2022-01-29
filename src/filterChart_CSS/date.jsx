import './date.css'

const ProductDate = (props) => {
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const month = props.date.toLocaleString('en-US', {month: 'short'})
    const year = props.date.getFullYear()
    return(
        <div className='date' >
            <div className='date-month' >
                {month}
            </div>
            <div className='date-year' >
                {year}
            </div>
            <div className='data-day' >
                {day}
            </div>
        </div>
    )
}

export default ProductDate