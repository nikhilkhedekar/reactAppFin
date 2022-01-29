import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentForm from './commentForm'
import DeleteComment from './deleteComment'

class CommentsList extends Component{
    constructor(){
        super()
        this.state = {
            list: [
                {
                    userId: uuidv4(),
                    comment: 'commetn1'
                },{
                    userId: uuidv4(),
                    comment: 'commetn1'
                },{
                    userId: uuidv4(),
                    comment: 'commetn1'
                },
            ],
            listItem: '',
        }
        this.addComment = this.addComment.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
    }
    

    /** */
    addComment(newComment){
       this.setState({listItem: newComment})
       console.log('listItem', this.state.listItem)
       return this.setState({list: [ ...this.state.list, {userId: uuidv4(), comment: this.state.listItem},]})
    }
    
    deleteComment(deleteId){
        this.setState({list: this.state.list.filter(item => item.userId !== deleteId)})
    }
    
    render(){
        console.log('list', this.state.list)
       const renderList = this.state.list.map(comments => (
        <DeleteComment key={comments.userId}
        userId={comments.userId}
        comment={comments.comment} 
        deleteComment={this.deleteComment} />
    ))
        return(
            <div>
                <div>
                    <CommentForm addComment={this.addComment} />
                </div>
               {renderList}
            </div>
        )
    }
}

export default CommentsList