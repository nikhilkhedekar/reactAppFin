import { useContext } from 'react'

import SignOut from './signoutbutton'
import Nav from './navigation'
import AuthContext from './authcontext'

const Header = () => {
    const ctx = useContext(AuthContext)
    return(
        <div>
            {ctx.isValid?
            <div>
                <h1>Header</h1>
                <SignOut />
            </div>:
            <div>
                <h1>Header</h1>
            </div>
            }
            <Nav />
        </div>
    )
}

export default Header