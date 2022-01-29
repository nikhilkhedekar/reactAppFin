import React, { Component } from 'react'

class DeleteComment extends Component{
    constructor(props){
        super(props)
        this.deleteComment = this.deleteComment.bind(this)
    }
    deleteComment(){
        this.props.deleteComment(this.props.userId)
    }
    render(){
        return(
            <div>
                {this.props.comment}
                {console.log(this.props.comment)}
                <button onClick={this.deleteComment} >delete</button>
            </div>
        )
    }
}

export default DeleteComment