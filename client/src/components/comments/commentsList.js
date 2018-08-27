import React from 'react'
import Comment from './Comment'
var moment = require('moment');

const CommentList = ({ comments, onHandleClick }) => (
  <div className="vote-list">
    { comments.map(comment =>
      <Comment
        onClick={onHandleClick}
        id={comment.id}
        created_at={moment(comment.created_at).format('LLL')}
        key={comment.id} comment={comment.comment}
        user_id={comment.user_id}
        post_id={comment.post_id}
      />
    )}
  </div>
)

export default CommentList
