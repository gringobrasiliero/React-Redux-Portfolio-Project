import React from 'react'
// import Vote from '../votes';
import Comment from './comment'

const CommentList = ({ comments, onHandleClick }) => (
  <div className="vote-list">
    { comments.map(comment => <Comment onClick={onHandleClick} id={comment.id} created_at={comment.created_at} key={comment.id} comment={comment.comment} user_id={comment.user_id} post_id={comment.post_id} />) }
  </div>
)

export default CommentList
