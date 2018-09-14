import React from 'react'

 const CommentForm = ({ id, comment, onHandleSubmit, onHandleChange}) => (
  <div className="comment" key={id}>
      <form onSubmit={onHandleSubmit}>
        <label>Comment: </label>
          <input type="text" id="comment" name="comment" onChange={onHandleChange} />
        <input type="submit" value="Post Your Comment!" />
      </form>
  </div>
)

export default CommentForm
