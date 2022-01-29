export const nameReducer = (state, action) => {
    if(action.type === 'NAME_CHANGE'){
        return{
            value: action.val,
            isValid: action.val.trim().length > 8 && action.val.includes('@')
        }
    }
    if(action.type === 'NAME_BLUR'){
        return{
            value: state.value,
            isValid: state.value.trim().length > 8 && state.value.includes('@')
        }
    }
    return{
        value: '',
        isValid: false
    }
}

export const codeReducer = (state, action) => {
    if(action.type === 'CODE_CHANGE'){
        return{
            value: action.val,
            isValid: action.val.trim().length > 8
        }
    }
    if(action.type === 'CODE_BLUR') {
        return{
            value: state.value,
            isValid: state.value.trim().length > 8 
        }
    }
    return{
        value: '',
        isValid: false
    }
}