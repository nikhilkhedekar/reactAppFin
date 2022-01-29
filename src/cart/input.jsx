import React from 'react'

const Input = React.forwardRef((props, ref) => {
    return(
        <div>
            <label htmlFor={'quantity_' + props.input.id} >{props.label}: 
            <input ref={ref} {...props.input}  />
            </label>

        </div>
    )
})

export default Input