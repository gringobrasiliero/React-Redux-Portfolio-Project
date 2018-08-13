import React from 'react'
import { Field, reduxForm } from 'redux-form'


 let Comment = ({ id, comment, user_id, handleNewComment, handleChange}) => (
  <div className="comment" key={id}>
    <section className="commentContainer">
      <div className="content">
      <h1>{user_id}</h1>
      <h2>{comment}</h2>

      </div>

    </section>
    <br />
  </div>
)


export default Comment
