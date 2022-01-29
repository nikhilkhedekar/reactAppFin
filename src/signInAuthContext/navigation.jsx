import { useContext } from 'react'

import AuthContext from './authcontext'

const Nav = () => {
    const ctx = useContext(AuthContext);
    return(
    <div>
        {ctx.isValid?
            <div  >
                <div>
                    <span>Home</span>
                </div>
                <div>
                    <span>About</span>
                </div>
                <div>
                    <span>Contact</span>
                </div>
            </div>   
        : null}
    </div> 
    )
}

export default Nav