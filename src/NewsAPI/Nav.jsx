import { BrowserRouter as Router, NavLink, Switch, Route, Redirect } from 'react-router-dom'

import HeadlinesPage from './headlinesPage'
import TopHeadLinesPage from './topHeadLinesPage'
import SearchNews from './searchNews'

const Nav = () => {
    return(
        <Router>
            <NavLink exact to='/' >Headlines</NavLink>
            <NavLink to='/topHeadLinesPage' > Country and Category </NavLink>
            <NavLink to='/searchNews' > Search </NavLink>
            <Switch>
            <Route exact path='/' ><HeadlinesPage /></Route>
            <Route path='/topHeadlinesPage' ><TopHeadLinesPage /></Route>
            <Route path='/searchNews' ><SearchNews /></Route>
            <Redirect to='/'><HeadlinesPage /></Redirect>
            </Switch>
        </Router>
    )
}

export default Nav