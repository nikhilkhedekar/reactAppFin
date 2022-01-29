import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'

import ClassCommentList from './commentList/classCommentList'
import ClassFilterChart from './filterChart/classFilterChart'
import HomePage from './homePage'
import UpdateNameApp from './updateName/updateNameApp'
import ClassCart from './classCart/classCart'
import ClassReqresAPI from './classReqresAPI/classReqresAPI'
import ClassFoodApp from './classFoodApp/classFoodApp'

class ClassNav extends Component{
    render(){
        return(
            <BrowserRouter>
            <NavLink exact to='/' >HomePage</NavLink><br />
            <NavLink to='/updateName' >Update Name</NavLink><br />
            <NavLink to='/classFilterChart' > Class Filter Chart </NavLink><br />
            <NavLink to='/classCommentList' > Class Comment List </NavLink><br />
            <NavLink to='/classCart' > Class Cart </NavLink><br />
            <NavLink to='/classFoodApp' > Class Food App </NavLink><br />
            <NavLink to='/classReqresAPI' > Class Reqres API </NavLink ><br />
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route path='/updateName' >
                    <UpdateNameApp />
                </Route>
                <Route path='/classFilterChart' >
                    <ClassFilterChart />
                </Route>
                <Route path='/classCommentList' >
                    <ClassCommentList />
                </Route>
                <Route path='/classCart' >
                    <ClassCart />
                </Route>
                <Route path='/classFoodApp' > 
                    <ClassFoodApp  />
                </Route>
                <Route path='/classReqresAPI' >
                    <ClassReqresAPI />
                </Route>
                <Redirect to='/'>
                    <HomePage />
                </Redirect>
            </Switch>
            </BrowserRouter>
        )
    }
}

export default ClassNav