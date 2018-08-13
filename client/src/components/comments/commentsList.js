import React from 'react'
// import Vote from '../votes';
import Comment from './comment'

const CommentList = ({ comments }) => (
  <div className="vote-list">
    { comments.map(comment => <Comment id={comment.id} key={comment.id} comment={comment.comment} user_id={comment.user_id} />) }
  </div>
)

export default CommentList
