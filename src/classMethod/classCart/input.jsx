import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const Input = forwardRef((props, ref) => {
    
    const callRef = useRef()
    const refHandler = () => {
        callRef.current.focus()
    }
    useImperativeHandle(ref, () => {
        return{
            focus: refHandler,
        }
    })

    return (
        <div>
            <label htmlFor={props.id} > {props.input.label}
                <input ref={callRef} {...props.input} />
            </label>
        </div>
    )
})

export default Input