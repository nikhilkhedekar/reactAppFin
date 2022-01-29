import Nav from './Nav'
import { AuthContextProvider } from './authContextProvider'

const FirebaseAuth = () => {
    return(
        <AuthContextProvider>
            <Nav />
        </AuthContextProvider>
    )
}

export default FirebaseAuth