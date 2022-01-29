import React, { Component } from 'react'
import UpdateName from './updateName'

class UpdateNameApp extends Component{
    constructor(){
        super()
        this.state = {
            name: ''
        }
        this.updateName = this.updateName.bind(this)
    }
    updateName(getName){
        this.setState({name: getName })
    }
    /**
     * componentWillMount(){
        console.log('component will mount')
    }
     */
    componentDidMount(){
        console.log('compnent did mount')
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('y or n', nextProps, nextState )
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('snapshot', prevState, prevProps)
        return prevState
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('component did update', prevProps, prevState, snapshot )
        
    }
    componentWillUnmount(){
        console.log('component will unmount')
    }
    render(){
        return(
            <div>
                <UpdateName updateName={this.updateName}  />
                <span> {this.state.name} </span>
            </div>
        )
    }
}

export default UpdateNameApp