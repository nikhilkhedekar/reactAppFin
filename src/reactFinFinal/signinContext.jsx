import { createContext } from "react";

const SigninContext = createContext({
    isSignedIn: false,
    onSignin: (token) => {},
    onSignout: () => {},
})

export default SigninContext