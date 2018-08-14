import React from 'react'


 let Comment = ({ id, comment, user_id, post_id}) => (
  <div className="comment" key={id}>
    <section className="commentContainer">
      <div className="content">
      <h1>{user_id}</h1>
      <h2>{comment}</h2>
      <h2>{post_id}</h2>

      </div>

    </section>
    <br />
  </div>
)


export default Comment
