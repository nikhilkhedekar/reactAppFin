import { useContext, } from "react"
import { useHistory } from 'react-router-dom'

import SigninContext from "./signinContext"

const Logout = () => {
    const history = useHistory();
    const signinCtx = useContext(SigninContext);
    const signOut = () => {
        signinCtx.onSignout();
        history.push('/')
    }
    return(
        <div>
             <h3> Log Out Page </h3>
            <button onClick={signOut} >Logout</button>
        </div>
    )
}

export default Logout