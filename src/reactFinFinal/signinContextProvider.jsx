import { useState } from 'react'

import SigninContext from "./signinContext"

export const SigninContextProvider = (props) => {
    
    const [token, setToken] = useState('')
    const [isSignedIn, setIsSignedIn] = useState(false)
    const onSignin = (signinToken) => {
        setToken(signinToken);
        console.log('signin token', token)
        setIsSignedIn(true)
        localStorage.setItem('token', token)
    }
    const onSignout = () => {
        setToken(null);
        setIsSignedIn(false)
        console.log('signout token', token)
        localStorage.removeItem('token')
        
    }
    const signinContextProvider = {
        isSignedIn,
        onSignin,
        onSignout,
    }
    return(
        <SigninContext.Provider value={signinContextProvider} >
            {props.children}
        </SigninContext.Provider>
    )
}