import { useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import SigninContext from './signinContext'

const Login = () => {
    const signinCtx = useContext(SigninContext)
    const history = useHistory();
    const API_KEY = 'AIzaSyBIo-40ixEfvE5Lwl4kL5khBoXJWFOT1qQ';
    const emailRef = useRef();
    const passwordRef = useRef();
    const onSignIn = async (e) => {
        try {
            e.preventDefault();
            const userData = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
                returnSecureToken: true,
            }
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, userData)
            //console.log('signin response', response)
            const responseData = response.data
            console.log('signin response', responseData)
            const token = responseData.idToken
            console.log('idToken', token)
            signinCtx.onSignin(token)
            history.push('/productsPage')
        }catch (error) {
            alert(error.message)
        }
    }

    return (
        <div>
            <h3>Login</h3>
            <br /><br />
            <div>
                <form onSubmit={onSignIn} >
                    <label htmlFor='userName' >Username:
                        <input id='userName' type='email' ref={emailRef} required placeholder='example@gmail.com' />
                    </label><br /> <br />
                    <label htmlFor='password' >Password:
                        <input id='password' type='password' ref={passwordRef} required />
                    </label><br /> <br />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login