import React from 'react'
// import { Field, reduxForm } from 'redux-form'


 let CommentForm = ({ id, comment, post_id, onHandleSubmit, onHandleChange, onHandleIdChange}) => (
  <div className="comment" key={id}>

      <form onSubmit={onHandleSubmit}>
      <label>Comment: </label>
        <input type="text" id="comment" name="comment" onChange={onHandleChange} />
        <input type="text" id="postId" name="postId" onChange={onHandleChange} value={post_id} style={{display: 'none'}}  />
<input type="submit" value="Post Your Comment!" />
      </form>

  </div>
)

export default CommentForm
