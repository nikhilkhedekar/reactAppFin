import React, {Component} from 'react'

class UpdateName extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
        this.nameHandler = this.nameHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    nameHandler(e){
        this.setState({name: e.target.value})
    }
    submitHandler(e){
        e.preventDefault()
        this.props.updateName(this.state.name)
    }

    /** */
    componentDidMount(){
        console.log('child compnent did mount')
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('child y or n', nextProps, nextState )
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('child snapshot', prevState, prevProps)
        return prevState
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('child component did update', prevProps, prevState, snapshot )
        
    }
    componentWillUnmount(){
        console.log('child component will unmount')
    }
    render(){
        return(
            <form onSubmit={this.submitHandler} >
                <input type='text' placeholder='Change Name' onChange={this.nameHandler} value={this.props.name} />
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default UpdateName