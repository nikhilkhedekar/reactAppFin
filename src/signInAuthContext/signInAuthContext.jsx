import { useReducer, useState, useEffect } from 'react'

import { nameReducer, codeReducer } from './reducer'
import SignIn from './signin'
import Home from './home'
import Header from './header'
import AuthContext from './authcontext'

const SignInAuthContext = () => {
    
    const [validForm, setValidForm] = useState(false);
    const [name, dispName] = useReducer(nameReducer, {
        value: '',
        isValid: false,
    })
    const [code, dispCode] = useReducer(codeReducer, {
        value: '',
        isValid: false,
    })


    const signInHandler = (e) => {
        e.preventDefault()
        if(name.isValid && code.isValid){
        setValidForm(true)
        localStorage.setItem('user', 'loggedIn')
        }else{
            setValidForm(false)
        }
        if(!name.isValid){
            document.getElementById('name').style.backgroundColor = 'red'
        }
        else if(!code.isValid){
            document.getElementById('code').style.backgroundColor = 'red'
        }else{
            return null
        }
    }

    useEffect(() => {
        const userStatus = localStorage.getItem('user')
        if(userStatus === 'loggedIn'){
            setValidForm(true)
        }
    }, [])

    const signOutHandler = () => {
        setValidForm(false)
        localStorage.removeItem('user')
    }
    
    const nameChange = (e) => {
        dispName({
            type: 'NAME_CHANGE',
            val: e.target.value,
        })
    }
    const nameBlur = () => {
        dispName({
            type: 'NAME_BLUR'
        })
    }
    const codeChange = (e) => {
        dispCode({
            type: 'CODE_CHANGE',
            val: e.target.value,
        })
    }
    const codeBlur = () => {
        dispCode({
            type: 'CODE_BLUR'
        })
    }

  

    return(
            <AuthContext.Provider value={{
                isValid: validForm,
                onSignIn: signInHandler,
                onSignOut: signOutHandler,
            }} >
            <Header validForm={validForm} signOutHandler={signOutHandler} />
            {!validForm? <SignIn nameValue={name.value} codeValue={code.value}
            nameChange={nameChange} nameBlur={nameBlur}
            codeChange={codeChange} codeBlur={codeBlur}
            signInHandler={signInHandler} /> : null }
            {validForm? <Home /> : null}
            </AuthContext.Provider>
    )
}

export default SignInAuthContext