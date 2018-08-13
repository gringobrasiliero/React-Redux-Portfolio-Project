import React from 'react'
import { Field, reduxForm } from 'redux-form'


 let Comment = ({ id, comment, user_id, handleNewComment, handleChange}) => (
  <div className="comment" key={url}>
    <section className="commentContainer">
      <div className="content">


      </div>

      <form onSubmit={handleNewComment}>
      <label>New Comment</label>
        <input type="text" id="comment" name="comment" />

      </form>

    </section>
    <br />
  </div>
)

}
export default Comment
