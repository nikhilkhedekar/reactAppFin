import React, { Component } from 'react'

class CommentForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            comment: ''
        }
        this.commentHandler = this.commentHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    commentHandler(e){
        this.setState({
            comment: e.target.value
        })
    }
    submitHandler(e){
        e.preventDefault()
        console.log('commentform', this.state.comment)
        this.props.addComment(this.state.comment)
        this.setState({ comment: '' })
    }
    render(){
        return(
            <form onSubmit={this.submitHandler} >
                <label htmlFor='comment' >
                    <input id='comment' type='text' onChange={this.commentHandler} value={this.state.comment} />
                </label>
                <button> Submit </button>
            </form>
        )
    }
}

export default CommentForm