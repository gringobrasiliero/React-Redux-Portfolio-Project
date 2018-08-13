import React from 'react'
import { Field, reduxForm } from 'redux-form'


 let Comment = ({ id, comment, user_id, handleNewComment, handleChange}) => (
  <div className="comment" key={url}>

      <form onSubmit={handleNewComment}>
        <input type="text" id="comment" name="comment" />
      </form>
    
  </div>
)

}
export default Comment
