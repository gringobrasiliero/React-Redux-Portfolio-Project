import React from 'react'
// import { Field, reduxForm } from 'redux-form'


 let CommentForm = ({ id, comment, post_id, onHandleSubmit, handleChange}) => (
  <div className="comment" key={id}>

      <form onSubmit={onHandleSubmit}>
      <label>Comment: </label>
        <input type="text" id="comment" name="comment" />
        <input type="text" id="postId" name="postId" defaultValue={"POST ID GOES HERE"} style={{display: 'none'}} />
<input type="submit" value="Post Your Comment!" />
      </form>

  </div>
)


export default CommentForm
