import { useContext } from 'react'
import Logout from './logout'
import Nav from './Nav'
import SigninContext from './signinContext'

const Header = () => {
   
    return(
        <div>
            <h1>React App</h1>
            
            <Nav />
        </div>
    )
}

export default Header