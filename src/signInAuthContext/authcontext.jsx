import { createContext } from 'react'

const AuthContext = createContext({
    isValid: false,
    onSignIn: () => {},
    onSignOut: () => {},
})

export default AuthContext