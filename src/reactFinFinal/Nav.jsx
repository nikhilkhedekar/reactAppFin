import { BrowserRouter, NavLink, Switch, Redirect, Route } from 'react-router-dom'
import HomePage from './homePage'
import Login from './login'
import ProductsPage from './productsPage'
import Store from './store'
import Cart from './cart'
import Logout from './logout'
import EditProduct from './editProduct'
import { useContext } from 'react'
import SigninContext from './signinContext'

const Nav = () => {
    const signinCtx = useContext(SigninContext);
    console.log('is signed in',signinCtx.isSignedIn)
    return (
        <div>
            <BrowserRouter>

                {signinCtx.isSignedIn ?
                    <nav>
                        <NavLink to='/productsPage' > Products </NavLink>
                        <NavLink to='/store' > Store </NavLink>
                        <NavLink to='/cart' > Cart </NavLink>
                        <NavLink to='/logout' > Logout </NavLink>
                    </nav>
                    :
                    <nav>
                        <NavLink exact to='/' > Home </NavLink>
                        <NavLink to='/login' > Login </NavLink>
                    </nav>
                }
                
                <Switch>
                    <Route exact path='/' >
                        <HomePage />
                    </Route>
                    <Route path='/productsPage' >
                        <ProductsPage />
                    </Route>
                    <Route path='/store'>
                        <Store />
                    </Route>
                    <Route path='/cart' >
                        <Cart />
                    </Route>
                    <Route path='/login' >
                        <Login />
                    </Route>
                    <Route path='/logout' >  
                        <Logout />
                    </Route>
                    <Route path='/editProduct/:productKey' >
                        <EditProduct />
                    </Route>
                    
                    <Redirect to='/'>
                        <HomePage />
                    </Redirect>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Nav