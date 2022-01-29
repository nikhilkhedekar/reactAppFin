import { Component } from 'react';

import HomePage from "./homePage"
import Header from "./header"
import Temp from './temp'
import { SigninContextProvider } from "./signinContextProvider"

export default class ReactFinFinal extends Component{
    render(){
        return(
            
            <SigninContextProvider>
                <Header />
            </SigninContextProvider>
        )
    }
}

// const App = () => {
//     return(
//         <SigninContextProvider>
//             <Header />
//         </SigninContextProvider>
//     )
// }

// export default App