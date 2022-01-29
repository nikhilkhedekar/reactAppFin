import { useContext } from 'react'

import AuthContext from './authcontext'

const SignOut = () => {
    const ctx = useContext(AuthContext)
    return (
        <div>
            <button onClick={ctx.onSignOut} >
                Sign Out
            </button>
        </div>
    )
}

export default SignOut