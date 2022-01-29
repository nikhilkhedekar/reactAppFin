import React, { Component } from 'react'
import axios from 'axios'
import { v4 as userId } from 'uuid'

export default class ClassReqresAPI extends Component{
    constructor(){
        super()
        this.state = {
            userId: userId(),
            userList: []
        }
    }

    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=2')
        .then(response => {
            const dataList = response.data
            console.log('response', dataList)
            const renderList = dataList.data.map(userData => {
                return(
                    <div key={this.state.userId} >
                        <div> {userData.id} </div><br />
                        <div> {userData.first_name} &nbsp; {userData.last_name} </div><br />
                        <div> {userData.email} </div>
                    </div>
                )
            })
            this.setState({ userList: renderList })
            console.log(this.state.userList)
        })
        .then(err => {
            if(err){
                console.error(err)
            }
        })
    }

    render(){
        
        return(
            <div>
                {this.state.userList}
            </div>
        )
    }
}