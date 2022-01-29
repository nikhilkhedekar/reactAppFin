import { Route, BrowserRouter, NavLink, Switch, Redirect } from 'react-router-dom'

import HomePage from './homePage'
import FilterChart from './filterChart/filterChart'
import FilterChartCSS from './filterChart_CSS/filterChartCSS' 
import CartMain from './cart/cartMain'
import DeleteItem from './deleteItem/deleteItem'
import SignInAuthContext from './signInAuthContext/signInAuthContext'
import FoodApp from './foodApp/foodApp'
import ReqresAPI from './reqresAPI/reqresAPI'
import SwapiAPI from './swapiAPI/swapiAPI'
import WikipediaAPI from './wikipediaAPI/wikipediaAPI'
import NewsAPI from './NewsAPI/NewsAPI'
import FirebaseAuth from './firebaseAuth/firebaseAuth'
import FirebaseToDoListCRUD from './firebaseToDoListCRUD/firebaseToDoListCRUD'
import ClassIndex from './classMethod/classIndex'
import ReactFinFinal from './reactFinFinal/reactFinFinal'

const Nav = () => {
    return(
        <BrowserRouter>
            <nav>
            <NavLink exact to='/' >Home Page</NavLink><br />
            <NavLink to='/filterChart'>Filter Chart</NavLink><br />
            <NavLink to='/filterChartCSS'>Filter Chart CSS </NavLink><br />
            <NavLink to='/cart' >Cart</NavLink><br />
            <NavLink to='/deleteItem'>Delete Item</NavLink><br />
            <NavLink to='/signInAuthContext' > Sign In Auth </NavLink><br />
            <NavLink to='/foodApp' > Food App </NavLink><br />
            <NavLink to='/reqresAPI' > Reqres API </NavLink><br />
            <NavLink to='/swapiAPI' > SW API </NavLink><br />
            <NavLink to='/wikipediaAPI' > Wikipedia API </NavLink><br />
            <NavLink to='/NewsAPI' > News API </NavLink><br />
            <NavLink to='/firebaseAuth' > Firebase Auth </NavLink><br />
            <NavLink to='/firebaseToDoListCRUD' > Firebase ToDo List </NavLink><br />
            <NavLink to='reactFinFinal' > Final Project </NavLink><br />
            <NavLink exact to='/classMethod/' > Class Method </NavLink>           
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' >
                    <HomePage />
                </Route>
                <Route path='/filterChart'>
                    <FilterChart />
                </Route>
                <Route path='/filterChartCSS' >
                    <FilterChartCSS />
                </Route>
                <Route path='/cart' >
                    <CartMain />
                </Route>
                <Route path='/deleteItem' >
                    <DeleteItem />
                </Route>
                <Route path='/signInAuthContext' >
                    <SignInAuthContext />
                </Route>
                <Route path='/foodApp' >
                    <FoodApp />
                </Route>
                <Route path='/reqresAPI' >
                    <ReqresAPI />
                </Route>
                <Route path='/swapiAPI' >
                    <SwapiAPI />
                </Route>
                <Route path='/wikipediaAPI' >
                    <WikipediaAPI />
                </Route>
                <Route path='/NewsAPI' >
                    <NewsAPI />
                </Route>
                <Route path='/firebaseAuth' >
                    <FirebaseAuth />
                </Route>
                <Route path='/firebaseToDoListCRUD' >
                    <FirebaseToDoListCRUD />
                </Route>
                <Route path='/reactFinFinal' >
                    <ReactFinFinal />
                </Route>
                <Route exact path='/classMethod' >
                    <ClassIndex />
                </Route>
                <Redirect to='/'>
                    <HomePage />
                </Redirect>
            </Switch>
        </BrowserRouter>
    )
}

export default Nav